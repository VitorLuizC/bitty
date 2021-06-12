import test from 'ava';
import type JsonArray from './JsonArray';

type Assert<T, Expected> = T extends Expected ? true : false;

test('matches an array of primitive JSON types', (context) => {
  const valid: Assert<(null | number | string | boolean)[], JsonArray> = true;

  context.true(valid);
});

test("doesn't match arrays of non-JSON types", (context) => {
  const valid_0: Assert<bigint[], JsonArray> = false;
  const valid_1: Assert<symbol[], JsonArray> = false;
  const valid_2: Assert<(number | undefined)[], JsonArray> = false;

  context.false(valid_0);
  context.false(valid_1);
  context.false(valid_2);
});

test("doesn't match non array", (context) => {
  const valid: Assert<string, JsonArray> = false;

  context.false(valid);
});
