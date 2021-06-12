import type JsonArray from './JsonArray';
import type JsonObject from './JsonObject';
import type JsonPrimitive from './JsonPrimitive';

/**
 * An union of primitive JSON types, JSON object and JSON array.
 *
 * @see {@link https://www.json.org/} for more information.
 */
type Json = JsonPrimitive | JsonArray | JsonObject;

export default Json;
