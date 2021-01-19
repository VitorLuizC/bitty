import type Deferred from './Deferred.js';

export type { Deferred };

type State<T> =
  | { status: 'PENDING' }
  | { status: 'RESOLVED'; value: T | PromiseLike<T> }
  | { status: 'REJECTED'; reason?: unknown };

/**
 * Creates a `Deferred` object that provides a new promise along with methods to
 * change its state.
 * @template T
 * @returns {import('./Deferred.js').default<T>}
 */
export default function createDeferred<T>(): Deferred<T> {
  let state: State<T> = {
    status: 'PENDING',
  };

  const deferred: Deferred<T> = {
    promise: new Promise<T>((resolve, reject) => {
      switch (state.status) {
        case 'REJECTED':
          reject(state.reason);
          break;
        case 'RESOLVED':
          resolve(state.value);
          break;
        default:
          deferred.reject = reject;
          deferred.resolve = resolve;
      }
    }),

    // A placeholder method that fix reject call right after deferred creation.
    reject(reason) {
      state = {
        reason,
        status: 'REJECTED',
      };
    },

    // A placeholder method that fix resolve call right after deferred creation.
    resolve(value) {
      state = {
        value,
        status: 'RESOLVED',
      };
    },
  };

  return deferred;
}
