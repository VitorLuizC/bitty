import test from 'ava';
import type Json from './Json.js';
import type JsonPrimitive from './JsonPrimitive.js';
import type ReadonlyJson from './ReadonlyJson.js';
import type ReadonlyJsonArray from './ReadonlyJsonArray.js';
import type ReadonlyJsonObject from './ReadonlyJsonObject.js';

type Assert<T, Expected> = T extends Expected ? true : false;

test("matches 'Json'", (context) => {
  const valid: Assert<Json, ReadonlyJson> = true;

  context.true(valid);
});

test('defines a read-only JSON type', (context) => {
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

test("matches 'PrimitiveJson', 'ReadonlyJsonArray' and 'ReadonlyJsonObject'", (context) => {
  const valid_0: Assert<JsonPrimitive, ReadonlyJson> = true;
  const valid_1: Assert<ReadonlyJsonArray, ReadonlyJson> = true;
  const valid_2: Assert<ReadonlyJsonObject, ReadonlyJson> = true;

  context.true(valid_0);
  context.true(valid_1);
  context.true(valid_2);
});
