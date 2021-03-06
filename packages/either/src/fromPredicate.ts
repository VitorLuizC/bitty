import type { Predicate, Refinement } from '@bitty/predicate';

import type Either from './Either.js';

import Left from './Left.js';
import Right from './Right.js';

/**
 * Receives two arguments, a predicate, and the `onLeft` function, and returns a
 * function to create `Either` instances by checking predicate on values. If the
 * predicate returns true it uses the value as `Right`, otherwise it calls
 * `onLeft` with value and uses its result as `Left`.
 * @param {function(R): boolean} predicate - A predicate function.
 * @param {function(R): L} onLeft - A function to create value used as `Left`.
 * @returns {function(R): Either.<L, R>}
 * @template L, R
 */
export default function fromPredicate<L, R, R2 extends R>(
  predicate: Refinement<R, R2>,
  onLeft: (value: R) => L,
): (value: R) => Either<L, R2>;
export default function fromPredicate<L, R>(
  predicate: Predicate<R>,
  onLeft: (value: R) => L,
): (value: R) => Either<L, R>;
export default function fromPredicate(predicate: Predicate, onLeft: Function) {
  return (value: unknown) =>
    predicate(value) ? Right(value) : Left(onLeft(value));
}
