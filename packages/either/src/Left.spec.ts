import test from 'ava';
import Left from './Left.js';

test('Left.unwrap returns value wrapped by `Left`', (context) => {
  const VALUE = Math.random();
  const value = Left(VALUE);
  context.is(value.unwrap(), VALUE);
});

test("Left.map don't apply function to the value", (context) => {
  let wasCalled = false;

  Left(null).map(() => {
    wasCalled = true;
    return null;
  });

  context.false(wasCalled);
});

test("Left.then don't apply function to the value", (context) => {
  let wasCalled = false;

  Left(null).then(() => {
    wasCalled = true;
    return null;
  });

  context.false(wasCalled);
});

test("Left.chain don't apply function to the value", (context) => {
  let wasCalled = false;

  Left(Math.random()).chain((value) => {
    wasCalled = true;
    return Left(value * 2);
  });

  context.false(wasCalled);
});

test('Left.mapLeft morphs `Left` value', (context) => {
  const VALUE = Math.random();
  const value = Left(VALUE).mapLeft((number) => number * 2);

  context.is(value.unwrap(), VALUE * 2);
});

test('Left.isLeft returns `true`', (context) => {
  context.true(Left(0).isLeft());
});

test('Left.isRight returns `false`', (context) => {
  context.false(Left(0).isRight());
});

test('Left.match morphs left value and return it', (context) => {
  const formatToMoney = (value: number) => `$ ${value.toFixed(2)}`;

  const money = Left(0).match({
    left: formatToMoney,
    right: formatToMoney,
  });

  context.is(money, '$ 0.00');
});

test('Left.match only call `left` leaf', (context) => {
  let leftWasCalled = false;
  let rightWasCalled = false;

  Left(0).match({
    left: () => {
      leftWasCalled = true;
    },
    right: () => {
      rightWasCalled = true;
    },
  });

  context.true(leftWasCalled);
  context.false(rightWasCalled);
});

test('Left.fold morphs left value and return it', (context) => {
  const formatToMoney = (value: number) => `$ ${value.toFixed(2)}`;

  const money = Left(0).fold(formatToMoney, formatToMoney);

  context.is(money, '$ 0.00');
});

test('Left.fold only call `left` function', (context) => {
  let leftWasCalled = false;
  let rightWasCalled = false;

  Left(0).fold(
    () => {
      leftWasCalled = true;
    },
    () => {
      rightWasCalled = true;
    },
  );

  context.true(leftWasCalled);
  context.false(rightWasCalled);
});

test('Left.getOrElse morphs value and return it', (context) => {
  const value = Left<Error, number>(new Error('Not a valid number')).getOrElse(
    () => 0,
  );

  context.is(value, 0);
});

test('Left.orElse morphs value and return a new Left', (context) => {
  const value = Left<Error, number>(new TypeError('Not a valid number')).orElse(
    (error) => {
      if (error instanceof TypeError) return Left(0);
      return Left(NaN);
    },
  );

  context.is(value.unwrap(), 0);
});
