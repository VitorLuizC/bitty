import type { JsonPrimitive } from './Json';

/**
 * An union between {@link JsonPrimitive}, {@link ReadonlyJsonArray} and {@link ReadonlyJsonObject}.
 */
type ReadonlyJson = JsonPrimitive | ReadonlyJsonArray | ReadonlyJsonObject;

/**
 * A read-only array with {@link ReadonlyJson} elements.
 */
type ReadonlyJsonArray = readonly ReadonlyJson[];

/**
 * An object with read-only properties whose keys are strings and values are {@link ReadonlyJson}.
 */
type ReadonlyJsonObject = {
  readonly [key: string]: ReadonlyJson;
};

export type { ReadonlyJson, ReadonlyJsonArray, ReadonlyJsonObject };
