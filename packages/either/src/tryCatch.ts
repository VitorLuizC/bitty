import type Either from './Either';

import Left from './Left.js';
import Right from './Right.js';

/**
 * Receives a function that returns a value used as `Right`, if an error is
 * thrown it calls `onLeft` with error and returns its result as `Left`.
 * @param {function(): R} fn
 * @param {function(*): L} onLeft
 * @returns {Either.<L, R>}
 * @template L, R
 */
export default function tryCatch<L, R>(
  fn: () => R,
  onLeft: (error: unknown) => L,
): Either<L, R> {
  try {
    return Right(fn());
  } catch (error) {
    return Left(onLeft(error));
  }
}
