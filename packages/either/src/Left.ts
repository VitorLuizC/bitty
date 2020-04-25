import IEither from './IEither.js';

interface Left<L, R> extends IEither<L, R> {
  _kind: 'Left';
}

type LeftConstructor = <L, R>(value: L) => Left<L, R>;

const Left: LeftConstructor = (value) => ({
  _kind: 'Left',

  // This is kind a "Please, I known what I'm doing"
  map: () => Left(value) as any,

  // Same as above
  chain: () => Left(value) as any,

  isLeft: () => true,

  isRight: () => false,
});

export default Left;
