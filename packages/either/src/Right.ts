import IEither from './IEither.js';

interface Right<L, R> extends IEither<L, R> {
  _kind: 'Right';
}

type RightConstructor = <L, R>(value: R) => Right<L, R>;

const Right: RightConstructor = (value) => ({
  _kind: 'Right',

  map: (fn) => Right(fn(value)),

  chain: (fn) => fn(value),

  isLeft: () => false,

  isRight: () => true,
});

export default Right;
