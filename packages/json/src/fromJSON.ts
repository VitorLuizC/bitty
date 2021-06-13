import type { Json } from './Json.js';

/**
 * Transforms (parses) a JSON string to {@link Json} value.
 * @example
 * ```ts
 * type User = {
 *   name: string;
 * };
 *
 * const user = fromJSON<User>('{"name":"Carlos Marcos"}');
 * //=> { name: 'Carlos Marcos' }
 * ```
 * @param json - The JSON string.
 */
function fromJSON<T extends Json = Json>(json: string): T {
  return JSON.parse(json);
}

export default fromJSON;
