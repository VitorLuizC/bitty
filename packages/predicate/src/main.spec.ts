import test from 'ava';
import type { Predicate, Refinement } from './main';

test('Predicate is a function that receives a value and returns boolean', (context) => {
  type Assert<T, T2> = T2 extends T ? true : false;

  const V1: Assert<Predicate, (value: unknown) => boolean> = true;
  const V2: Assert<Predicate<string>, (value: string) => boolean> = true;

  context.true(V1);
  context.true(V2);
});

test('Refinement is a Predicate that uses `is` type guard', (context) => {
  type Assert<T, T2> = T2 extends T ? true : false;

  const V1: Assert<Predicate<string>, Refinement<string, 'Okay'>> = true;
  const V2: Assert<
    Refinement<string, 'Okay'>,
    (value: string) => value is 'Okay'
  > = true;
  const V3: Assert<
    Refinement<number, 0>,
    (value: 0 | 1 | 2) => value is 0
  > = false;

  context.true(V1);
  context.true(V2);
  context.false(V3);
});
