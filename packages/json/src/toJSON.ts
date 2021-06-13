import type { ReadonlyJson } from './ReadonlyJson.js';

/**
 * Transforms a {@link Json} value to JSON string.
 * @example
 * ```ts
 * type User = {
 *   name: string;
 * };
 *
 * const user: User = {
 *   name: 'Karl Marx',
 * };
 *
 * toJson(user, 0);
 * //=> '{"name":"Karl Marx"}'
 * ```
 * @param value - A {@link ReadonlyJson} value, usually an object or array.
 * @param space - A character or the number of spaces used for indentation.
 */
function toJSON(value: ReadonlyJson, space: string | number = 2): string {
  return JSON.stringify(value, null, space);
}

export default toJSON;
