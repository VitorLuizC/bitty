import type Either from './Either.js';

import { isNullish, Nullish, NonNullish } from '@bitty/nullish';

import Left from './Left.js';
import Right from './Right.js';

/**
 * Receives a default value and returns a function to create `Either` instances
 * from values that can be nullish (`void`, `null` or `undefined`). If so, it
 * returns a `Left` with the received default value, otherwise a `Right` with
 * non-nullish value.
 * @param {L} defaultValue - The value used as `Left` if value is nullish.
 * @returns {function(R | null | undefined | void): Either.<L, R>}
 * @template L, R
 */
export default function fromNullish<L>(defaultValue: L) {
  return <R>(value?: Nullish | R): Either<L, NonNullish<R>> =>
    isNullish(value) ? Left(defaultValue) : Right(value as NonNullish<R>);
}
