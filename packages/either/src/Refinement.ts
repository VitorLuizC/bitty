/**
 * A function that check if value (`T`) is of type `T2`.
 */
type Refinement<T, T2 extends T> = (value: T) => value is T2;

export default Refinement;
