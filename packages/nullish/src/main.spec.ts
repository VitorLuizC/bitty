import test from 'ava';
import isNullish from './main.js';

test('isNullish returns `true` for nullish values', (context) => {
  context.true(isNullish());
  context.true(isNullish(null));
  context.true(isNullish(undefined));
});

test('isNullish returns `false` for non-nullish value', (context) => {
  context.false(isNullish('Okay'));
  context.false(isNullish({ name: 'Karl Marx' }));
  context.false(isNullish(true));
  context.false(isNullish(1917));
});

test('isNullish returns `false` even for falsy non-nullish values', (context) => {
  context.false(isNullish(''));
  context.false(isNullish(NaN));
  context.false(isNullish(false));
  context.false(isNullish(0));
});
