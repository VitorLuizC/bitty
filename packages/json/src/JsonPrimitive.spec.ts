import test from 'ava';
import type JsonPrimitive from './JsonPrimitive.js';

type Assert<T, Expected> = T extends Expected ? true : false;

test("matches 'null'", (context) => {
  const valid: Assert<null, JsonPrimitive> = true;

  context.true(valid);
});

test("matches 'boolean' and its sub-types", (context) => {
  const valid_0: Assert<boolean, JsonPrimitive> = true;
  const valid_1: Assert<true, JsonPrimitive> = true;
  const valid_2: Assert<false, JsonPrimitive> = true;

  context.true(valid_0);
  context.true(valid_1);
  context.true(valid_2);
});

test("matches 'number' and its sub-types", (context) => {
  const valid_0: Assert<number, JsonPrimitive> = true;
  const valid_1: Assert<1917, JsonPrimitive> = true;

  context.true(valid_0);
  context.true(valid_1);
});

test("matches 'string' and its sub-types", (context) => {
  const valid_0: Assert<string, JsonPrimitive> = true;
  const valid_1: Assert<"JSON is better than XML", JsonPrimitive> = true;

  context.true(valid_0);
  context.true(valid_1);
});

test("doesn't match 'undefined' and its sub-type 'void'", (context) => {
  const valid_0: Assert<undefined, JsonPrimitive> = false;
  const valid_1: Assert<void, JsonPrimitive> = false;

  context.true(valid_0);
  context.true(valid_1);
});

test("doesn't match 'bigint' and its sub-types", (context) => {
  const valid_0: Assert<bigint, JsonPrimitive> = false;
  const valid_1: Assert<9999999999999999999999n, JsonPrimitive> = false;

  context.true(valid_0);
  context.true(valid_1);
});

test("doesn't match 'symbol'", (context) => {
  const valid: Assert<symbol, JsonPrimitive> = false;

  context.true(valid);
});
