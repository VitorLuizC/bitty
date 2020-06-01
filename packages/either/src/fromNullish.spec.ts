import test from 'ava';

import fromNullish from './fromNullish.js';

test('fromNullish returns `Left` for nullish values', (context) => {
  const fromNull = fromNullish(new Error('Not defined'))(null);
  const fromUndefined = fromNullish(new Error('Not defined'))(undefined);

  context.true(fromNull.isLeft());
  context.true(fromUndefined.isLeft());
});

test('fromNullish returns `Right` for non-nullish values', (context) => {
  const name = fromNullish(new Error('Not defined'))('Karl');

  context.true(name.isRight());
});

test('fromNullish uses default value as returned `Left` for nullish values', (context) => {
  const DEFAULT_VALUE = Math.random();

  const fromNull = fromNullish(DEFAULT_VALUE)(null);
  const fromUndefined = fromNullish(DEFAULT_VALUE)(undefined);

  context.is(fromNull.unwrap(), DEFAULT_VALUE);
  context.is(fromUndefined.unwrap(), DEFAULT_VALUE);
});

test('fromNullish uses value as returned `Right` for non-nullish values', (context) => {
  const VALUE = Math.random();
  const value = fromNullish(new Error('Value is not defined'))(VALUE);

  context.is(value.unwrap(), VALUE);
});
