import test from 'ava';

import fromNullish from './fromNullish.js';

test('fromNullish returns `Left` for nullish values', (context) => {
  const from = fromNullish(new Error('Not defined'));

  context.true(from().isLeft());
  context.true(from(null).isLeft());
  context.true(from(undefined).isLeft());
  context.true(from(undefined as void).isLeft());
});

test('fromNullish returns `Right` for non-nullish values', (context) => {
  const name = fromNullish(new Error('Not defined'))('Karl');

  context.true(name.isRight());
});

test('fromNullish uses default value as returned `Left` for nullish values', (context) => {
  const DEFAULT_VALUE = Math.random();

  const from = fromNullish(DEFAULT_VALUE);

  context.is(from(null).unwrap(), DEFAULT_VALUE);
  context.is(from(undefined).unwrap(), DEFAULT_VALUE);
});

test('fromNullish uses value as returned `Right` for non-nullish values', (context) => {
  const VALUE = Math.random();
  const value = fromNullish(new Error('Value is not defined'))(VALUE);

  context.is(value.unwrap(), VALUE);
});
