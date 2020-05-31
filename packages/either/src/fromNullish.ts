import type Either from './Either';

import { isNullish, Nullish, NotNullish } from '@bitty/nullish';

import Left from './Left.js';
import Right from './Right.js';

/**
 *
 * @param defaultValue -
 */
export default function fromNullish<L>(defaultValue: L) {
  return <R>(value?: Nullish | R): Either<L, NotNullish<R>> =>
    isNullish(value) ? Left(defaultValue) : Right(value as NotNullish<R>);
}
