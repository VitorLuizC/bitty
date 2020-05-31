import type { EitherMethods } from './Either';

interface Left<L, R> extends EitherMethods<L, R> {
  _kind: 'Left';
}

/**
 *
 * @param value -
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
    onError: (fn) => fn(value),
    unwrap: () => value,
  };
}

export default Left;
