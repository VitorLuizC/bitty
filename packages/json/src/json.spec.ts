import test from 'ava';

import { Json, JsonArray, JsonObject, parseJson, toJson } from './json.js';

type AssertEqual<T, Expected> = T extends Expected ? true : false;

test('type Json can receive `null`, `boolean`, `number`, `string`, `JsonArray` & `JsonObject`', (context) => {
  const valid00: AssertEqual<null, Json> = true;
  const valid01: AssertEqual<boolean, Json> = true;
  const valid02: AssertEqual<true, Json> = true;
  const valid03: AssertEqual<false, Json> = true;
  const valid04: AssertEqual<number, Json> = true;
  const valid05: AssertEqual<1917, Json> = true;
  const valid06: AssertEqual<string, Json> = true;
  const valid07: AssertEqual<'JSON is better than XML', Json> = true;
  const valid08: AssertEqual<JsonArray, Json> = true;
  const valid09: AssertEqual<['JSON', 1999, boolean[]], Json> = true;
  const valid10: AssertEqual<JsonObject, Json> = true;
  const valid11: AssertEqual<
    {
      name: string;
      stats: {
        A: number;
      };
      records: null | string[];
    },
    Json
  > = true;

  context.true(valid00);
  context.true(valid01);
  context.true(valid02);
  context.true(valid03);
  context.true(valid04);
  context.true(valid05);
  context.true(valid06);
  context.true(valid07);
  context.true(valid08);
  context.true(valid09);
  context.true(valid10);
  context.true(valid11);
});

test('type JsonArray can receive array of `Json`', (context) => {
  const valid: AssertEqual<Json[], JsonArray> = true;

  context.true(valid);
});

test('type JsonObject can receive array of `Json`', (context) => {
  const valid: AssertEqual<Record<string, Json>, JsonObject> = true;

  context.true(valid);
});

test("type Json can't receive invalid JSON values", (context) => {
  const invalid1: AssertEqual<undefined, Json> = false;
  const invalid2: AssertEqual<bigint, Json> = false;
  const invalid3: AssertEqual<symbol, Json> = false;
  const invalid4: AssertEqual<Set<number>, Json> = false;
  const invalid5: AssertEqual<Date, Json> = false;
  const invalid6: AssertEqual<() => void, Json> = false;

  context.false(invalid1);
  context.false(invalid2);
  context.false(invalid3);
  context.false(invalid4);
  context.false(invalid5);
  context.false(invalid6);
});

test('parseJson parses JSON string', (context) => {
  const json = '{ "name": "Santos Dumont" }';

  context.deepEqual(parseJson<{ name: string }>(json), {
    name: 'Santos Dumont',
  });
});

test('toJson transforms object valid as JSON to JSON string', (context) => {
  const user = {
    name: 'Santos Dumont',
  };

  context.is(toJson<{ name: string }>(user, 0), `{"name":"Santos Dumont"}`);
});
