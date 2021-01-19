import type Deferred from './Deferred.js';

export type { Deferred };

/**
 * Creates a `Deferred` object that provides a new promise along with methods to
 * change its state.
 * @template T
 * @returns {import('./Deferred.js').default<T>}
 */
export default function createDeferred<T>(): Deferred<T> {
  let reject: (reason?: unknown) => void;
  let resolve: (value: T | PromiseLike<T>) => void;

  return {
    promise: new Promise<T>((_resolve, _reject) => {
      reject = _reject;
      resolve = _resolve;
    }),

    // reject was assigned, because Promise initialization is eager (sync).
    // @ts-expect-error
    reject,

    // resolve was assigned, because Promise initialization is eager (sync).
    // @ts-expect-error
    resolve,
  };
}
