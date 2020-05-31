import test from 'ava';
import fromPredicate from './fromPredicate.js';

test("fromPredicate returns `Left` if value doesn't match predicate", (context) => {
  const validateEven = fromPredicate(
    (value: number) => value % 2 === 0,
    (value) => value,
  );

  context.true(validateEven(1).isLeft());
});

test('fromPredicate returns `Right` if value matches predicate', (context) => {
  const validateEven = fromPredicate(
    (value: number) => value % 2 === 0,
    (value) => value,
  );

  context.true(validateEven(2).isRight());
});

test('fromPredicate create value returned as `Left` with `onLeft` callback', (context) => {
  const VALUE = Math.random();

  const getString = fromPredicate(
    (value: unknown) => typeof value === 'string',
    (value: unknown) => String(value),
  );

  context.is(getString(VALUE).unwrap(), String(VALUE));
});

test('fromPredicate uses value as returned `Right` if value matches predicate', (context) => {
  const VALUE = Math.random();
  const validateEven = fromPredicate(
    (value: number) => typeof value === 'number',
    (value) => value,
  );

  context.is(validateEven(VALUE).unwrap(), VALUE);
});
