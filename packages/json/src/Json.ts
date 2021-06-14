/**
 * An union between primitive types (`null`, `boolean`, `number` and `string`) supported by JSON.
 */
type JsonPrimitive = null | boolean | number | string;

/**
 * An union between {@link JsonPrimitive}, {@link JsonArray} and {@link JsonObject}.
 */
type Json = JsonPrimitive | JsonArray | JsonObject;

/**
 * An array of {@link Json} elements.
 */
type JsonArray = Json[];

/**
 * An object whose property keys are strings and values are {@link Json}.
 */
type JsonObject = {
  [key: string]: Json;
};

export type { Json, JsonArray, JsonObject, JsonPrimitive };
