/**
 * Nullish is an union of `void`, `null` and `undefined` types.
 */
export type Nullish = void | null | undefined;

/**
 * Exclude nullish types (`void`, `null` and `undefined`) from T.
 */
export type NonNullish<T> = T extends Nullish ? never : T;

/**
 * Check if value is nullish (`void`, `null` or `undefined`).
 * @param {*} value - Value that will be checked.
 * @returns {Boolean}
 */
export default function isNullish(value?: unknown): value is Nullish {
  return value == null;
}
