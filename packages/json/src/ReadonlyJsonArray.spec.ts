import test from 'ava';
import type JsonArray from './JsonArray.js';
import type ReadonlyJsonArray from './ReadonlyJsonArray.js';

type Assert<T, Expected> = T extends Expected ? true : false;

test("matches 'JsonArray'", (context) => {
  const valid: Assert<JsonArray, ReadonlyJsonArray> = true;

  context.true(valid);
});

test('defines a read-only JSON array', (context) => {
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
