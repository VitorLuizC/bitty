import type Nullish from './Nullish';

/**
 * A type that excludes `null`, `undefined` and `void` from `T`.
 */
type NotNullish<T> = T extends Nullish ? never : T;

export default NotNullish;
