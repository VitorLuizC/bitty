/**
 * Receives a value and returns a new function that returns the value.
 * @param value - Any value.
 */
export default function constant<T>(value: T) {
  return () => value;
}
