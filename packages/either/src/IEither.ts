interface IEither<L, R> {
  map<R2>(fn: (value: R) => R2): IEither<L, R2>;

  chain<R2>(fn: (value: R) => IEither<L, R2>): IEither<L, R2>;

  isLeft(): boolean;

  isRight(): boolean;
}

export default IEither;
