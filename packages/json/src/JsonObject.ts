import type Json from './Json';

/** An object whose property keys are strings and values are JSON. */
type JsonObject = {
  [key: string]: Json;
};

export default JsonObject;
