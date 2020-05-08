import type Either from './Either';
import type Predicate from './Predicate';
import type Refinement from './Refinement';

import Left from './Left.js';
import Right from './Right.js';

/**
 *
 * @param predicate -
 * @param onLeft -
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
