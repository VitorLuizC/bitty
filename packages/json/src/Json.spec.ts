import test from 'ava';
import type { Json, JsonArray, JsonObject, JsonPrimitive } from './Json.js';

type Assert<T, Expected> = T extends Expected ? true : false;

test("Json matches 'JsonPrimitive', 'JsonArray' and 'JsonObject'", (context) => {
  const valid_00: Assert<JsonPrimitive, Json> = true;
  const valid_01: Assert<null | boolean, Json> = true;
  const valid_02: Assert<true, Json> = true;
  const valid_03: Assert<false, Json> = true;
  const valid_04: Assert<number, Json> = true;
  const valid_05: Assert<1917, Json> = true;
  const valid_06: Assert<string, Json> = true;
  const valid_07: Assert<'JSON is better than XML', Json> = true;
  const valid_08: Assert<JsonArray, Json> = true;
  const valid_09: Assert<['JSON', 1999, boolean[]], Json> = true;
  const valid_10: Assert<JsonObject, Json> = true;
  const valid_11: Assert<
    {
      name: string;
      stats: {
        A: number;
      };
      records: null | string[];
    },
    Json
  > = true;

  context.true(valid_00);
  context.true(valid_01);
  context.true(valid_02);
  context.true(valid_03);
  context.true(valid_04);
  context.true(valid_05);
  context.true(valid_06);
  context.true(valid_07);
  context.true(valid_08);
  context.true(valid_09);
  context.true(valid_10);
  context.true(valid_11);
});

test("Json doesn't match invalid JSON types", (context) => {
  const valid_1: Assert<undefined, Json> = false;
  const valid_2: Assert<bigint, Json> = false;
  const valid_3: Assert<symbol, Json> = false;
  const valid_4: Assert<Set<number>, Json> = false;
  const valid_5: Assert<Date, Json> = false;
  const valid_6: Assert<() => void, Json> = false;

  context.false(valid_1);
  context.false(valid_2);
  context.false(valid_3);
  context.false(valid_4);
  context.false(valid_5);
  context.false(valid_6);
});

test('JsonArray matches an array of primitive JSON types', (context) => {
  const valid: Assert<(null | number | string | boolean)[], JsonArray> = true;

  context.true(valid);
});

test("JsonArray doesn't match arrays of non-JSON types", (context) => {
  const valid_0: Assert<bigint[], JsonArray> = false;
  const valid_1: Assert<symbol[], JsonArray> = false;
  const valid_2: Assert<(number | undefined)[], JsonArray> = false;

  context.false(valid_0);
  context.false(valid_1);
  context.false(valid_2);
});

test("JsonArray doesn't match non array", (context) => {
  const valid: Assert<string, JsonArray> = false;

  context.false(valid);
});

test('JsonObject matches an object with primitive JSON types', (context) => {
  const valid: Assert<
    {
      name: null | string;
      email: string;
      createdAt: number;
      isDisabled: boolean;
    },
    JsonObject
  > = true;

  context.true(valid);
});

test("JsonObject doesn't match objects of non-JSON types", (context) => {
  const valid_0: Assert<{ value: bigint }, JsonObject> = false;
  const valid_1: Assert<{ id: symbol }, JsonObject> = false;
  const valid_2: Assert<{ name?: string }[], JsonObject> = false;

  context.false(valid_0);
  context.false(valid_1);
  context.false(valid_2);
});

test("JsonObject doesn't match non object", (context) => {
  const valid: Assert<number, JsonObject> = false;

  context.false(valid);
});

test("JsonPrimitive matches 'null'", (context) => {
  const valid: Assert<null, JsonPrimitive> = true;

  context.true(valid);
});

test("JsonPrimitive matches 'boolean' and its sub-types", (context) => {
  const valid_0: Assert<boolean, JsonPrimitive> = true;
  const valid_1: Assert<true, JsonPrimitive> = true;
  const valid_2: Assert<false, JsonPrimitive> = true;

  context.true(valid_0);
  context.true(valid_1);
  context.true(valid_2);
});

test("JsonPrimitive matches 'number' and its sub-types", (context) => {
  const valid_0: Assert<number, JsonPrimitive> = true;
  const valid_1: Assert<1917, JsonPrimitive> = true;

  context.true(valid_0);
  context.true(valid_1);
});

test("JsonPrimitive matches 'string' and its sub-types", (context) => {
  const valid_0: Assert<string, JsonPrimitive> = true;
  const valid_1: Assert<'JSON is better than XML', JsonPrimitive> = true;

  context.true(valid_0);
  context.true(valid_1);
});

test("JsonPrimitive doesn't match 'undefined' and its sub-type 'void'", (context) => {
  const valid_0: Assert<undefined, JsonPrimitive> = false;
  const valid_1: Assert<void, JsonPrimitive> = false;

  context.true(valid_0);
  context.true(valid_1);
});

test("JsonPrimitive doesn't match 'bigint' and its sub-types", (context) => {
  const valid_0: Assert<bigint, JsonPrimitive> = false;
  const valid_1: Assert<9999999999999999999999n, JsonPrimitive> = false;

  context.true(valid_0);
  context.true(valid_1);
});

test("JsonPrimitive doesn't match 'symbol'", (context) => {
  const valid: Assert<symbol, JsonPrimitive> = false;

  context.true(valid);
});
