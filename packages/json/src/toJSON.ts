import type { ReadonlyJson } from './ReadonlyJson.js';

/**
 * Transforms a {@link Json} value to JSON string.
 * @param value - A {@link Json} value, usually an object or array.
 * @param space - A character or the number of spaces used for indentation.
 */
function toJSON<T extends ReadonlyJson = ReadonlyJson>(
  value: T,
  space: string | number = 2,
): string {
  return JSON.stringify(value, null, space);
}

export default toJSON;
