import test from 'ava';
import isFalsy, { Falsy, NonFalsy } from './main.js';

test('isFalsy returns `true` for falsy values', (context) => {
  context.true(isFalsy());
  context.true(isFalsy(null));
  context.true(isFalsy(undefined));
  context.true(isFalsy(0));
  context.true(isFalsy(-0));
  context.true(isFalsy(0n));
  context.true(isFalsy(NaN));
  context.true(isFalsy(''));
  context.true(isFalsy(false));
});

test('isFalsy returns `false` for non-falsy values', (context) => {
  context.false(isFalsy([]));
  context.false(isFalsy({}));
  context.false(isFalsy('Oi'));
  context.false(isFalsy(10));
  context.false(isFalsy(true));
  context.false(isFalsy(Infinity));
  context.false(isFalsy(0.1));
  context.false(isFalsy(-1n));
});

test('Falsy type is an union of falsy types', (context) => {
  type Assert<A, B> = A extends B ? true : false;

  const value01: Assert<0, Falsy> = true;
  const value02: Assert<0n, Falsy> = true;
  const value03: Assert<-0, Falsy> = true;
  const value04: Assert<'', Falsy> = true;
  const value05: Assert<void, Falsy> = true;
  const value06: Assert<null, Falsy> = true;
  const value07: Assert<false, Falsy> = true;
  const value08: Assert<undefined, Falsy> = true;

  context.true(value01);
  context.true(value02);
  context.true(value03);
  context.true(value04);
  context.true(value05);
  context.true(value06);
  context.true(value07);
  context.true(value08);
});

test('NonFalsy type excludes falsy types', (context) => {
  type Assert<A, B> = A extends B ? true : false;

  const value01: Assert<1 | 2 | 3, NonFalsy<0 | 1 | 2 | 3>> = true;
  const value02: Assert<true, NonFalsy<true | false>> = true;

  context.true(value01);
  context.true(value02);
});
