/**
 * Union of values that is considered false when converted to `Boolean`.
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}.
 * @typedef {false | void | '' | 0 | 0n | null | undefined} Falsy
 */

/**
 * Union of values that is considered false when converted to `Boolean`.
 * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Falsy}.
 */
export type Falsy = false | void | '' | 0 | 0n | null | undefined;

/**
 * Exclude falsy types (`false`, `void`, `''`, `0`, `0n`, `null` & `undefined`).
 */
export type NonFalsy<T> = T extends Falsy ? never : T;

/**
 * Check if value is falsy (`""`, `null`, `false`, `0`, `NaN` or `undefined`).
 * @param {*} value - The value that will be checked.
 * @returns {Boolean}
 */
export default function isFalsy(value?: unknown): value is Falsy {
  return !value;
}
