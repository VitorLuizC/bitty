import type JsonPrimitive from './JsonPrimitive';
import type ReadonlyJsonObject from "./ReadonlyJsonObject";
import type ReadonlyJsonArray from "./ReadonlyJsonArray";

/** An union of primitive JSON types with read-only JSON array and object. */
type ReadonlyJson = JsonPrimitive | ReadonlyJsonArray | ReadonlyJsonObject;

export default ReadonlyJson;
