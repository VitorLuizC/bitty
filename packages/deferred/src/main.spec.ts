import test from 'ava';
import createDeferred from './main';

test('module default exports a function', (context) => {
  context.is(typeof createDeferred, 'function');
});

test('createDeferred creates a Deferred object', (context) => {
  const deferred = createDeferred<void>();

  context.is(typeof deferred, 'object');

  context.true(deferred.promise instanceof Promise);

  context.is(typeof deferred.reject, 'function');

  context.is(typeof deferred.resolve, 'function');
});

test('deferred.reject rejects deferred promise', async (context) => {
  const deferred = createDeferred<void>();

  deferred.promise
    .then(() => {
      context.fail();
    })
    .catch((reason) => {
      context.deepEqual(reason, new Error('No reason'));
    });

  deferred.reject(new Error('No reason'));
});

test('deferred.resolve resolves deferred promise', async (context) => {
  const deferred = createDeferred<number>();

  const VALUE = Math.random();

  deferred.promise
    .then((value) => {
      context.is(value, VALUE);
    })
    .catch(() => {
      context.fail();
    });

  deferred.resolve(VALUE);
});
