import type { Json } from './Json.js';

/**
 * Parses a JSON string to a {@link Json} value.
 * @param json - A JSON string.
 */
function fromJSONString<T extends Json = Json>(json: string): T {
  return JSON.parse(json);
}

export default fromJSONString;
