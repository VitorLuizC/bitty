/**
 * An union of `null`-like types and the `null` itself.
 */
type Nullish = void | null | undefined;

/**
 * A type that excludes `null`, `undefined` and `void` from `T`.
 */
export type NotNullish<T> = T extends Nullish ? never : T;

export default Nullish;
