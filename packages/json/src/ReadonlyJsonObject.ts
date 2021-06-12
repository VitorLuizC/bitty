import type ReadonlyJson from './ReadonlyJson';

/** An object whose property keys are strings and values are read-only JSON. */
type ReadonlyJsonObject = {
  readonly [key: string]: ReadonlyJson;
};

export default ReadonlyJsonObject;
