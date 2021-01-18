import test from 'ava';
import createDeferred from './main';

test('deferred default exports a function', (context) => {
  context.is(typeof createDeferred, 'function');
});
