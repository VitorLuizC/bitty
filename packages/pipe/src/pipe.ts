/**
 * Performs function composition in LTR (Left To Right) direction.
 *
 * `pipe` supports N arguments. But its types support only 10 because TypeScript
 * doesn't support **Variadic Kinds** and we explicitly have to define the type
 * of all the possible usages as method overloads.
 *
 * https://github.com/microsoft/TypeScript/issues/5453
 *
 * @example
 * const normalizeWhiteSpaces = text => name.replace(/\s+/g, ' ').trim();
 *
 * const getInitials = pipe(
 *   normalizeWhiteSpaces,
 *   name => name.split(' ').map(name => name.charAt(0)),
 *   initials => initials.join('').toLocaleUpperCase()
 * );
 *
 * getInitials('Vitor Luiz Cavalcanti');
 * //=> "VLC"
 * @param fn - An arity N function. Its result is the argument of next one.
 * @param fns - Functions of arity 1. Each one's result is next's argument.
 */
// prettier-ignore
export default function pipe<Args extends unknown[], T0>(...fns: [(...xs: Args) => T0]): (...xs: Args) => T0;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1>(...fns: [(...xs: Args) => T0, (x: T0) => T1]): (...xs: Args) => T1;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2]): (...xs: Args) => T2;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2, T3>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3]): (...xs: Args) => T3;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2, T3, T4>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4]): (...xs: Args) => T4;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5]): (...xs: Args) => T5;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6]): (...xs: Args) => T6;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6, T7>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6, (x: T6) => T7]): (...xs: Args) => T7;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6, T7, T8>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6, (x: T6) => T7, (x: T7) => T8]): (...xs: Args) => T8;
// prettier-ignore
export default function pipe<Args extends unknown[], T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(...fns: [(...xs: Args) => T0, (x: T0) => T1, (x: T1) => T2, (x: T2) => T3, (x: T3) => T4, (x: T4) => T5, (x: T5) => T6, (x: T6) => T7, (x: T7) => T8, (x: T8) => T9]): (...xs: Args) => T9;

/**
 * Performs function composition in LTR (Left To Right) direction.
 * @example
 * const normalizeWhiteSpaces = text => name.replace(/\s+/g, ' ').trim();
 *
 * const getInitials = pipe(
 *   normalizeWhiteSpaces,
 *   name => name.split(' ').map(name => name.charAt(0)),
 *   initials => initials.join('').toLocaleUpperCase()
 * );
 *
 * getInitials('Vitor Luiz Cavalcanti');
 * //=> "VLC"
 * @param {Function} fn - An arity N function. Its result is the argument of next one.
 * @param {...Function[]} fns - Functions of arity 1. Each one's result is next's argument.
 * @returns {Function}
 */
export default function pipe(fn: Function, ...fns: Function[]) {
  return function () {
    return fns.reduce((x, fn) => fn(x), fn.apply(null, arguments));
  };
}
