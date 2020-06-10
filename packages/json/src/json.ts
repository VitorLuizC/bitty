/**
 * An union of types valid as JSON.
 *
 * @see {@link https://www.json.org/|JSON specification} for more information.
 */
type Json = null | boolean | number | string | JsonArray | JsonObject;

/**
 * An array of types valid as JSON.
 *
 * @see {@link Json}
 */
type JsonArray = Json[];

/**
 * An object whose property keys are strings and values are types valid as JSON.
 *
 * @see {@link Json}
 */
type JsonObject = { [property: string]: Json };

/**
 * Converts a valid JSON string into a Json value.
 * @param {JsonString} json - A valid JSON string.
 * @returns {T}
 * @template T
 */
function parseJson<T extends Json = Json>(json: string): T {
  return JSON.parse(json);
}

/**
 * Transform a Json value to JSON string.
 * @param {T} value - A Json value, usually an object or array.
 * @param {number|string} [space] - A character or a number os spaces used in indentation.
 * @returns {string}
 * @template T
 */
function toJson<T extends Json = Json>(value: T, space: string | number = 2) {
  return JSON.stringify(value, null, space);
}

export { Json, JsonArray, JsonObject, parseJson, toJson };
