import test from 'ava';

import fromFalsy from './fromFalsy.js';

test('fromFalsy returns `Left` for falsy values', (context) => {
  const from = fromFalsy(new Error('Not defined'));

  context.true(from(null).isLeft());
  context.true(from(undefined).isLeft());
  context.true(from(0n).isLeft());
  context.true(from(-0).isLeft());
  context.true(from(0).isLeft());
  context.true(from('').isLeft());
  context.true(from(NaN).isLeft());
  context.true(from(false).isLeft());
});

test('fromFalsy returns `Right` for non-falsy values', (context) => {
  const name = fromFalsy(new Error('Not defined'))('Karl');

  context.true(name.isRight());
});

test('fromFalsy uses default value as returned `Left` for falsy values', (context) => {
  const DEFAULT_VALUE = Math.random();

  const fromNull = fromFalsy(DEFAULT_VALUE)(null);

  context.is(fromNull.unwrap(), DEFAULT_VALUE);
});

test('fromFalsy uses value as returned `Right` for non-falsy values', (context) => {
  const VALUE = Math.random();
  const value = fromFalsy(new Error('Value is not defined'))(VALUE);

  context.is(value.unwrap(), VALUE);
});
