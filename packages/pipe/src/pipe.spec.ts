import test from 'ava';
import pipe from './pipe.js';

test('pipe is a function', (context) => {
  context.is(typeof pipe, 'function');
});

test('pipe compose functions in LTR direction', (context) => {
  const add = (x: number) => (y: number) => y + x;
  const subtract = (x: number) => (y: number) => y - x;
  const multiply = (x: number) => (y: number) => y * x;
  const divide = (x: number) => (y: number) => y / x;

  const calc = pipe(add(5), subtract(2), multiply(3), divide(2));

  context.is(calc(2), 7.5);
  context.not(calc(2), 6);
});

test("pipe's first function can handle more than one argument", (context) => {
  const getNames = (name: string, wordsToBeIgnored: string[] = []) =>
    name.split(' ').filter((word) => wordsToBeIgnored.indexOf(word) === -1);

  const formatToInitials = pipe(
    getNames,
    (names) => names.map((name) => name.charAt(0)),
    (initials) => initials.join('').toUpperCase(),
  );

  context.is(formatToInitials('Jairo de Almeida Machado', ['de']), 'JAM');
});
