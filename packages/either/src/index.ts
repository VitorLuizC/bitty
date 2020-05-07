type Either<L, R> = Left<L, R> | Right<L, R>;

type IEither<L, R> = {
  map<R2>(fn: (value: R) => R2): Either<L, R2>;
  then<R2>(fn: (value: R) => R2 | Either<L, R2>): Either<L, R2>;
  chain<R2>(fn: (value: R) => Either<L, R2>): Either<L, R2>;
};

type Left<L, R> = IEither<L, R> & {
  _kind: 'Left';
};

type Right<L, R> = IEither<L, R> & {
  _kind: 'Right';
}

// ---

const isEither = (value: unknown): value is Either<unknown, unknown> => (
  (value as any)?._kind === 'Left' ||
  (value as any)?._kind === 'Right'
);

const Left = <L = never, R = never>(value: L): Left<L, R> => ({
  _kind: 'Left',
  map: () => Left(value),
  then: () => Left(value),
  chain: () => Left(value),
});

const Right = <L = never, R = never>(value: R): Right<L, R> => ({
  _kind: 'Right',
  map: (fn) => Right(fn(value)),
  then: (fn) => {
    const valueOrEither = fn(value);
    return isEither(valueOrEither) ? valueOrEither : Right(valueOrEither);
  },
  chain: (fn) => fn(value)
});
