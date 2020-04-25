/**
 * A function that check if value (`T`) matches some predicate.
 */
type Predicate<T = unknown> = (value: T) => boolean;

export default Predicate;
