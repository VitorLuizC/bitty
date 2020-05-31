import test from 'ava';
import fromNullish from './fromNullish.js';

test('fromNullish is a function', (context) => {
  context.is(typeof fromNullish, 'function');
});
