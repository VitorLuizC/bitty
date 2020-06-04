import type { EitherMethods } from './Either.js';

interface Left<L, R> extends EitherMethods<L, R> {
  _kind: 'Left';
}

/**
 * Creates a `Left` instance that implements `Either` methods. It generally
 * represents an error because `Either` is right-oriented.
 * @param {L} value - The value used as `Left`.
 * @returns {Left.<L, *>}
 * @template L
 */
function Left<L = never, R = never>(value: L): Left<L, R> {
  return {
    _kind: 'Left',
    map: () => Left(value),
    then: () => Left(value),
    chain: () => Left(value),
    mapLeft: (fn) => Left(fn(value)),
    isLeft: () => true,
    isRight: () => false,
    match: ({ left }) => left(value),
    fold: (onLeft) => onLeft(value),
    getOrElse: (fn) => fn(value),
    orElse: (fn) => fn(value),
    unwrap: () => value,
  };
}

export default Left;
