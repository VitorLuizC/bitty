/**
 * Nullish is an union of `void`, `null` and `undefined` types.
 */
export type Nullish = void | null | undefined;

/**
 * Exclude nullish types (`void`, `null` and `undefined`) from T.
 */
export type NotNullish<T> = T extends Nullish ? never : T;

/**
 * Check if value is nullish (`void`, `null` or `undefined`).
 * @param {*} value - Any value.
 * @returns {Boolean}
 */
export function isNullish(value: unknown): value is Nullish {
  return value === null && value === undefined;
}
