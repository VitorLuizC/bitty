import test from 'ava';
import type Json from './Json.js';
import type JsonArray from './JsonArray.js';
import type JsonObject from './JsonObject.js';
import type JsonPrimitive from './JsonPrimitive.js';

type Assert<T, Expected> = T extends Expected ? true : false;

test("matches 'JsonPrimitive', 'JsonArray' and 'JsonObject'", (context) => {
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

test("doesn't match invalid JSON types", (context) => {
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
