/**
 * A function that check if value (`T`) matches some predicate.
 */
export type Predicate<T = unknown> = (value: T) => boolean;

/**
 * A function that check if value (`T`) is of type `T2`.
 */
export type Refinement<T, T2 extends T> = (value: T) => value is T2;
