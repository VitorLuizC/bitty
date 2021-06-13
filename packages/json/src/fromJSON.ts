import type { Json } from './Json.js';

/**
 * Transforms a JSON string to {@link Json} value.
 * @param json - The JSON string.
 */
function fromJSON<T extends Json = Json>(json: string): T {
  return JSON.parse(json);
}

export default fromJSON;
