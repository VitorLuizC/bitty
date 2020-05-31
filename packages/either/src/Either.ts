import type Left from './Left';
import type Right from './Right';

type Either<L, R> = Left<L, R> | Right<L, R>;

export type EitherPattern<L, R, T> = {
  left: (value: L) => T;
  right: (value: R) => T;
};

export interface EitherMethods<L, R> {
  map<R2>(fn: (value: R) => R2): Either<L, R2>;

  then<R2>(fn: (value: R) => R2 | Either<L, R2>): Either<L, R2>;

  chain<R2>(fn: (value: R) => Either<L, R2>): Either<L, R2>;

  mapLeft<L2>(fn: (value: L) => L2): Either<L2, R>;

  isLeft(): this is Left<L, R>;

  isRight(): this is Right<L, R>;

  match<T>(pattern: EitherPattern<L, R, T>): T;

  fold<T>(onLeft: (value: L) => T, onRight: (value: R) => T): T;

  onError<L2>(fn: (value: L) => Either<L2, R>): Either<L2, R>;

  getOrElse(fn: (value: L) => R): R;

  unwrap(): L | R;
}

export default Either;
