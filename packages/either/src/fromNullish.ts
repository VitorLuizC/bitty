import type Either from './Either';
import type Nullish from './Nullish';
import type NotNullish from './NotNullish';

import Left from './Left.js';
import Right from './Right.js';

/**
 *
 * @param defaultValue -
 */
export default function fromNullish<L>(defaultValue: L) {
  return <R>(value?: Nullish | R): Either<L, NotNullish<R>> =>
    value === null || value === undefined
      ? Left(defaultValue)
      : Right(value as NotNullish<R>);
}
