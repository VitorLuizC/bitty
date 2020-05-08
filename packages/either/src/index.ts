type Either<L, R> = Left<L, R> | Right<L, R>;

type EitherPattern<L, R, T> = {
  left: (value: L) => T;
  right: (value: R) => T;
};

interface EitherMethods<L, R> {
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
}

interface Left<L, R> extends EitherMethods<L, R> {
  _kind: 'Left';
}

interface Right<L, R> extends EitherMethods<L, R> {
  _kind: 'Right';
}

// ---

const isEither = (value: unknown): value is Either<unknown, unknown> =>
  (value as any)?._kind === 'Left' || (value as any)?._kind === 'Right';

const Left = <L = never, R = never>(value: L): Left<L, R> => ({
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
});

const Right = <L = never, R = never>(value: R): Right<L, R> => ({
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
});
