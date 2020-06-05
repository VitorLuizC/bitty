import test from 'ava';
import Right from './Right.js';
import Left from './Left.js';

test('Right.unwrap returns value wrapped by `Right`', (context) => {
  const VALUE = Math.random();
  const value = Right(VALUE);
  context.is(value.unwrap(), VALUE);
});

test('Right.map morphs wrapped value', (context) => {
  const VALUE = Math.random();
  const value1 = Right(VALUE);
  const value2 = value1.map((value) => value * 2);

  context.is(value1.unwrap(), VALUE);
  context.is(value2.unwrap(), VALUE * 2);
  context.not(value1, value2);
});

test('Right.then morphs wrapped value', (context) => {
  const VALUE = Math.random();
  const value1 = Right(VALUE);
  const value2 = value1.then((value) => value * 2);

  context.is(value1.unwrap(), VALUE);
  context.is(value2.unwrap(), VALUE * 2);
  context.not(value1, value2);
});

test('Right.then morphs wrapped value and return a new `Right`', (context) => {
  const VALUE = Math.random();
  const value1 = Right(VALUE);
  const value2 = value1.then((value) => Right(value * 2));

  context.is(value1.unwrap(), VALUE);
  context.is(value2.unwrap(), VALUE * 2);
  context.not(value1, value2);
});

test('Right.chain morphs wrapped value and return a new `Right`', (context) => {
  const VALUE = Math.random();
  const value1 = Right(VALUE);
  const value2 = value1.chain((value) => Right(value * 2));

  context.is(value1.unwrap(), VALUE);
  context.is(value2.unwrap(), VALUE * 2);
  context.not(value1, value2);
});

test("Right.mapLeft don't apply function to the value", (context) => {
  let wasCalled = false;

  Right(1298).mapLeft(() => {
    wasCalled = true;
    return null;
  });

  context.false(wasCalled);
});

test('Right.mapLeft returns new `Right` with same wrapped value', (context) => {
  const VALUE = Math.random();

  const value = Right(VALUE).mapLeft(() => Math.random());

  context.is(value.unwrap(), VALUE);
});

test('Right.isLeft returns `false`', (context) => {
  context.false(Right(0).isLeft());
});

test('Right.isRight returns `true`', (context) => {
  context.true(Right(0).isRight());
});

test('Right.match morphs wrapped value and return it', (context) => {
  const formatToMoney = (value: number) => `$ ${value.toFixed(2)}`;

  const money = Right(100).match({
    left: formatToMoney,
    right: formatToMoney,
  });

  context.is(money, '$ 100.00');
});

test('Right.match only call `Right` leaf', (context) => {
  let leftWasCalled = false;
  let rightWasCalled = false;

  Right(0).match({
    left: () => {
      leftWasCalled = true;
    },
    right: () => {
      rightWasCalled = true;
    },
  });

  context.false(leftWasCalled);
  context.true(rightWasCalled);
});

test('Right.fold morphs wrapped value and return it', (context) => {
  const formatToMoney = (value: number) => `$ ${value.toFixed(2)}`;

  const money = Right(100).fold(formatToMoney, formatToMoney);

  context.is(money, '$ 100.00');
});

test('Right.fold only call `Right` function', (context) => {
  let leftWasCalled = false;
  let rightWasCalled = false;

  Right(0).fold(
    () => {
      leftWasCalled = true;
    },
    () => {
      rightWasCalled = true;
    },
  );

  context.false(leftWasCalled);
  context.true(rightWasCalled);
});

test('Right.getOrElse just returns wrapped value', (context) => {
  const VALUE = Math.random();
  const value = Right<Error, number>(VALUE).getOrElse(() => 0);

  context.is(value, VALUE);
});

test("Right.orElse don't even execute the callback", (context) => {
  let wasCalled = false;

  Right<Error, number>(100).orElse((error) => {
    wasCalled = true;
    if (error instanceof TypeError) return Left(0);
    return Left(NaN);
  });

  context.false(wasCalled);
});
