import test from 'ava';
import tryCatch from './tryCatch.js';

test('tryCatch execute function and use its return as `Right`', (context) => {
  const value = tryCatch(
    () => JSON.parse('{"name":"Karl"}'),
    (error) => error,
  );

  context.deepEqual(value.unwrap(), { name: 'Karl' });
  context.true(value.isRight());
});

test('tryCatch when error is thrown calls onLeft with error and returns its result as `Left`', (context) => {
  const value = tryCatch(
    () => JSON.parse('{"name":Karl}'),
    (error) =>
      new Error(
        error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : 'Unknown error message.',
      ),
  );

  context.true(value.unwrap() instanceof Error);
  context.true(value.isLeft());
});
