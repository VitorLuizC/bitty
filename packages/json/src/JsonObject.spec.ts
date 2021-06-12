import test from 'ava';
import type JsonObject from './JsonObject';

type Assert<T, Expected> = T extends Expected ? true : false;

test('matches an object with primitive JSON types', (context) => {
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

test("doesn't match objects of non-JSON types", (context) => {
  const valid_0: Assert<{ value: bigint; }, JsonObject> = false;
  const valid_1: Assert<{ id: symbol; }, JsonObject> = false;
  const valid_2: Assert<{ name?: string; }[], JsonObject> = false;

  context.false(valid_0);
  context.false(valid_1);
  context.false(valid_2);
});

test("doesn't match non object", (context) => {
  const valid: Assert<number, JsonObject> = false;

  context.false(valid);
});
