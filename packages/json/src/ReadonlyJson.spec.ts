import test from 'ava';
import type { Json, JsonArray, JsonObject, JsonPrimitive } from './Json.js';
import type { ReadonlyJson, ReadonlyJsonArray, ReadonlyJsonObject } from './ReadonlyJson.js';

type Assert<T, Expected> = T extends Expected ? true : false;

test("ReadonlyJson matches 'Json'", (context) => {
  const valid: Assert<Json, ReadonlyJson> = true;

  context.true(valid);
});

test('ReadonlyJson defines a read-only JSON type', (context) => {
  const user: ReadonlyJson = {
    name: 'Vitor',
    items: [
      {
        name: 'Magic Long Sword'
      }
    ]
  };

  // @ts-expect-error
  user.name = 'William';

  // @ts-expect-error
  delete user.items[0];

  // @ts-expect-error
  user.items.push({
    name: 'Magic Hat'
  });

  context.pass();
});

test("ReadonlyJson matches 'PrimitiveJson', 'ReadonlyJsonArray' and 'ReadonlyJsonObject'", (context) => {
  const valid_0: Assert<JsonPrimitive, ReadonlyJson> = true;
  const valid_1: Assert<ReadonlyJsonArray, ReadonlyJson> = true;
  const valid_2: Assert<ReadonlyJsonObject, ReadonlyJson> = true;

  context.true(valid_0);
  context.true(valid_1);
  context.true(valid_2);
});

test("ReadonlyJsonArray matches 'JsonArray'", (context) => {
  const valid: Assert<JsonArray, ReadonlyJsonArray> = true;

  context.true(valid);
});

test('ReadonlyJsonArray defines a read-only JSON array', (context) => {
  const items: ReadonlyJsonArray = [
    {
      name: 'Magic Long Sword',
    },
  ];

  // @ts-expect-error
  items.splice(0);

  // @ts-expect-error
  items.push({
    name: 'Axe'
  });

  context.pass();
});

test("ReadonlyJsonObject matches 'JsonObject'", (context) => {
  const valid: Assert<JsonObject, ReadonlyJsonObject> = true;

  context.true(valid);
});

test('ReadonlyJsonObject defines a read-only JSON object', (context) => {
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
