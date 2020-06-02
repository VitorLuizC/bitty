import type { EitherMethods } from './Either.js';

import isEither from './isEither.js';

interface Right<L, R> extends EitherMethods<L, R> {
  _kind: 'Right';
}

/**
 * Creates a `Right` instance that implements `Either` methods. It generally
 * represents an successful value because `Either` is right-oriented.
 * @param {R} value - The value used as `Right`.
 * @returns {Left.<*, R>}
 * @template R
 */
function Right<L = never, R = never>(value: R): Right<L, R> {
  return {
    _kind: 'Right',
    map: (fn) => Right(fn(value)),
    then: (fn) => {
      const valueOrEither = fn(value);
      return isEither(valueOrEither) ? valueOrEither : Right(valueOrEither);
    },
    chain: (fn) => fn(value),
    mapLeft: () => Right(value),
    isLeft: () => false,
    isRight: () => true,
    match: ({ right }) => right(value),
    fold: (_, onRight) => onRight(value),
    getOrElse: () => value,
    onError: () => Right(value),
    unwrap: () => value,
  };
}

export default Right;
