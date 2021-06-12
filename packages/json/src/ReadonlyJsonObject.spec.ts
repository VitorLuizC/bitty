import test from 'ava';
import type JsonObject from './JsonObject.js';
import type ReadonlyJsonObject from './ReadonlyJsonObject.js';

type Assert<T, Expected> = T extends Expected ? true : false;

test("matches 'JsonObject'", (context) => {
  const valid: Assert<JsonObject, ReadonlyJsonObject> = true;

  context.true(valid);
});

test('defines a read-only JSON object', (context) => {
  const user: ReadonlyJsonObject = {
    name: 'Lord Haxz',
    level: 9,
  };

  // @ts-expect-error
  user.level = 99;

  // @ts-expect-error
  delete user.name;

  context.pass();
});
