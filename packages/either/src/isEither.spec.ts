import test from 'ava';

import isEither from './isEither.js';
import Left from './Left.js';
import Right from './Right.js';

test('isEither returns `true` for `Left` values', (context) => {
  context.true(isEither(Left(new Error('Invalid argument.'))));
  context.true(isEither(Left('Unknown')));
  context.true(isEither(Left([])));
});

test('isEither returns `true` for `Right` values', (context) => {
  context.true(isEither(Right(null)));
  context.true(isEither(Right('Okay')));
  context.true(isEither(Right([1, 2, 3])));
});

test('isEither returns `false` for any other value', (context) => {
  context.false(isEither(null));
  context.false(isEither('Okay'));
  context.false(isEither({}));
});
