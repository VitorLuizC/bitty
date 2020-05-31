import test from 'ava';
import fromPredicate from './fromPredicate.js';

test('fromPredicate is a function', (context) => {
  context.is(typeof fromPredicate, 'function');
});
