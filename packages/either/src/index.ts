// /// ----

// type Either<L, R> = Left<L, R> | Right<L, R>;

// type EitherConstructor = {
//   map: <L, R>(
//     either: Either<L, R>,
//   ) => <R2>(fn: (value: R) => R2) => Either<L, R2>;

//   chain: <L, R>(
//     either: Either<L, R>,
//   ) => <R2>(fn: (value: R) => Either<L, R2>) => Either<L, R2>;

//   isLeft: (value: unknown) => value is Left<unknown, unknown>;

//   isRight: (value: unknown) => value is Right<unknown, unknown>;
// };

// const isObject = (value: unknown): value is object =>
//   typeof value === 'object' && value !== null;

// const hasKey = <Key extends string>(
//   object: object,
//   key: Key,
// ): object is { [key in Key]: unknown } =>
//   Object.prototype.hasOwnProperty.call(object, key);

// const Either: EitherConstructor = {
//   map:

//   isLeft: (value: unknown): value is Left<unknown, unknown> =>
//     isObject(value) && hasKey(value, '_kind') && value._kind === 'Left',

//   isRight: (value: unknown): value is Right<unknown, unknown> =>
//     isObject(value) && hasKey(value, '_kind') && value._kind === 'Right',
// };

// type LeftConstructor = {
//   of: <L, R>(value: L) => Left<L, R>;

//   map: <L, R>(left: Left<L, R>) => <R2>(fn: (value: R) => R2) => Left<L, R2>;

//   chain: <L, R>(
//     left: Left<L, R>,
//   ) => <R2>(fn: (value: R) => Left<L, R2>) => Left<L, R2>;

//   isLeft: <L, R>(left: Left<L, R>) => () => true;

//   isRight: <L, R>(left: Left<L, R>) => () => false;
// };

// type Left<L, R> = {
//   readonly _kind: 'Left';

//   map: <R2>(fn: (value: R) => R2) => Left<L, R2>;

//   chain: <R2>(fn: (value: R) => Left<L, R2>) => Left<L, R2>;

//   isLeft: () => true;

//   isRight: () => false;
// };

// type Right<L, R> = {
//   readonly _kind: 'Right';

//   map: <R2>(fn: (value: R) => R2) => Right<L, R2>;

//   chain: <R2>(fn: (value: R) => Right<L, R2>) => Right<L, R2>;

//   isLeft: () => false;

//   isRight: () => true;
// };

// const x: Either<number, number>;
// // const Right = (value) => ({
// //   _kind: 'Right',

// //   map: (fn) => Right(fn(value)),

// //   chain: (fn) => fn(value),
// // });

// // /// ----

// // const Left = (value) => ({
// //   _kind: 'Left',

// //   map: () => Left(value),

// //   chain: () => Left(value),
// // });

// // /// ----

// // const Either = {
// //   fromPredicate: (predicate, onFalse) => (value) =>
// //     predicate(value) ? Right(value) : Left(onFalse(value)),

// //   fromNullish: (defaultValue) => (value) =>
// //     value === undefined || value === null ? Left(defaultValue) : Right(value),
// // };

// // /// ----

// // /// ----

// // // export type Predicate<T> = (value: T) => boolean;

// // // export type Refinement<T, T2 extends T> = (value: T) => value is T2;

// // // type Nullish = void | null | undefined;

// // // type EitherConstructor = {
// // //   fromPredicate<L, R, R2 extends R>(
// // //     refinement: Refinement<R, R2>,
// // //     onFalse: (value: R) => L,
// // //   ): (value: R) => Either<L, R2>;
// // //   fromPredicate<L, R>(
// // //     predicate: Predicate<R>,
// // //     onFalse: (value: R) => L,
// // //   ): (value: R) => Either<L, R>;

// // //   fromNullish<L>(defaultValue: L): <R>(value?: Nullish | R) => Either<L, R>;
// // // };

// // // const DECIMAL_SEPARATOR = ',';

// // // const THOUSAND_SEPARATOR = '.';

// // // /**
// // //  * A branded type for valid numbers.
// // //  */
// // // type ValidNumber = number & {
// // //   _kind: 'ValidNumber';
// // // };

// // // /**
// // //  * Check if value is not `NaN` or `Infinity`.
// // //  * @param value - Any number value.
// // //  */
// // // const isValidNumber = (value: number): value is ValidNumber =>
// // //   !isNaN(value) && isFinite(value);

// // // type Numeric = (string | number) & {
// // //   _kind: 'Numeric';
// // // };

// // // const isValidNumeric: (value: string | number) => value is Numeric = pipe(
// // //   (value) => (typeof value !== 'number' ? parseFloat(value) : value),
// // //   isValidNumber,
// // // );

// // // const resolve = pipe(
// // //   fromPredicate(isValidNumeric, () => '0'),

// // // )

// // // const formatToNumber = (value: string | number) => {
// // //   const [number, decimals] = numeric.split('.');
// // //   const number2 = number.replace(
// // //     /(\d)(?=(\d{3})+(?!\d))/g,
// // //     '$1' + THOUSAND_SEPARATOR,
// // //   );
// // //   return !decimals ? number2 : number2 + DECIMAL_SEPARATOR + decimals;
// // // };

// // // export default formatToNumber;
