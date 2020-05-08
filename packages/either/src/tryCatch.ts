import type Either from './Either';

import Left from './Left.js';
import Right from './Right.js';

/**
 *
 * @param fn
 * @param onLeft
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
