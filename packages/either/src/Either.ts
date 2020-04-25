import Left from './Left.js';
import Nullish, { NotNullish } from './Nullish.js';
import Predicate from './Predicate.js';
import Refinement from './Refinement.js';
import Right from './Right.js';

type Either<L, R> = Left<L, R> | Right<L, R>;

export const left = Left;

export const right = Right;

/**
 *
 * @param predicate
 * @param onLeft
 */
export function fromPredicate<L, R, R2 extends R>(
  predicate: Refinement<R, R2>,
  onLeft: (value: R) => L,
): (value: R) => Either<L, R2>;
export function fromPredicate<L, R>(
  predicate: Predicate<R>,
  onLeft: (value: R) => L,
): (value: R) => Either<L, R>;
export function fromPredicate(predicate: Predicate, onLeft: Function) {
  return (value: unknown) =>
    predicate(value) ? Right(value) : Left(onLeft(value));
}

/**
 *
 * @param defaultValue
 */
export function fromNullish<L>(defaultValue: L) {
  return <R>(value?: Nullish | R): Either<L, NotNullish<R>> =>
    value === null || value === undefined
      ? Left(defaultValue)
      : Right(value as NotNullish<R>);
}

/**
 *
 * @param fn
 * @param onLeft
 */
export function tryCatch<L, R>(
  fn: () => R,
  onLeft: (error: unknown) => L,
): Either<L, R> {
  try {
    return Right(fn());
  } catch (error) {
    return Left(onLeft(error));
  }
}

type EitherConstructor = {
  left: typeof left;
  right: typeof right;
  tryCatch: typeof tryCatch;
  fromNullish: typeof fromNullish;
  fromPredicate: typeof fromPredicate;
};

const Either: EitherConstructor = {
  left,
  right,
  tryCatch,
  fromNullish,
  fromPredicate,
};

export default Either;
