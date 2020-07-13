import type Either from './Either.js';

import isFalsy, { Falsy, NonFalsy } from '@bitty/falsy';

import Left from './Left.js';
import Right from './Right.js';

/**
 * Receives a default value and returns a function to create `Either` instances
 * from values that can be falsy (`""`, `null`, `false`, `0`, `-0`, `0n`, `NaN`
 * or `undefined`). If so, it returns a `Left` with the received default value,
 * otherwise a `Right` with non-falsy value.
 * @param {L} defaultValue - The value used as `Left` if value is falsy.
 * @returns {function(R | Falsy): Either.<L, R>}
 * @template L, R
 */
export default function fromFalsy<L>(defaultValue: L) {
  return <R>(value?: Falsy | R): Either<L, NonFalsy<R>> =>
    isFalsy(value) ? Left(defaultValue) : Right(value as NonFalsy<R>);
}
