# `@bitty/predicate`

[![Bundle minified size](https://badgen.net/bundlephobia/min/@bitty/predicate)](https://bundlephobia.com/result?p=@bitty/predicate)
[![Bundle minified and gzipped size](https://badgen.net/bundlephobia/minzip/@bitty/predicate)](https://bundlephobia.com/result?p=@bitty/predicate)

`Predicate` and `Refinement` types for TypeScript.

- 🏷 Safe:
  - JSDocs and type declarations for IDEs and editor's autocomplete/intellisense.
  - Made with TypeScript as strict as possible.
  - Unit tests with AVA.

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install @bitty/predicate --save

# For Yarn, use the command below.
yarn add @bitty/predicate
```

## Getting Stated

It exports `Predicate` and `Refinement` types.

- `Predicate` is a function that receives a value and returns a boolean.

  ```ts
  import type { Predicate } from '@bitty/predicate';

  function checkAll<T = unknown>(predicates: Predicate<T>[]): Predicate<T> {
    return (value) => predicates.every((predicate) => predicate(value));
  }
  ```

- `Refinement` is similar to `Predicate`, but uses [TypeScript `is` type guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards).

  ```ts
  import { Refinement } from '@bitty/predicate';

  const isNumber: Refinement<unknown, number> = (value) =>
    Number.isFinite(value);
  //=> Was typed as `(value: unknown) => value is number`.

  const value: number | string = Math.random() > 0.5 ? 100 : 'A text.';

  if (isNumber(value)) {
    console.log(value.toFixed(2));
    //=> Okay, because type of `value` was refined to `number`.
  }
  console.log(value.toFixed(2));
  //=> Property 'toFixed' does not exist on type 'string | number'.
  //     Property 'toFixed' does not exist on type 'string'.
  ```

## License

Released under [MIT License](./LICENSE).
