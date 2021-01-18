/**
 * Based on the obsolete `Deferred` object, that came long before Promises/A+
 * spec. It's an object returned by `createdDeferred` function, that provide a
 * new promise along with methods to change its state.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred|MDN} for more information.
 */
export default interface Deferred<T> {
  readonly promise: Promise<T>;

  reject(reason: unknown): void;

  resolve(value: T | PromiseLike<T>): void;
}
