type Either<L, R> = Left<L, R> | Right<L, R>;

interface EitherMethods<L, R> {
  map<R2>(fn: (value: R) => R2): Either<L, R2>;

  then<R2>(fn: (value: R) => R2 | Either<L, R2>): Either<L, R2>;

  chain<R2>(fn: (value: R) => Either<L, R2>): Either<L, R2>;

  mapLeft<L2>(fn: (value: L) => L2): Either<L2, R>;

  isLeft(): this is Left<L, R>;

  isRight(): this is Right<L, R>;
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
});
