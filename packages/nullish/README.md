# `@bitty/nullish`

[![Bundle minified size](https://badgen.net/bundlephobia/min/@bitty/nullish)](https://bundlephobia.com/result?p=@bitty/nullish)
[![Bundle minified and gzipped size](https://badgen.net/bundlephobia/minzip/@bitty/nullish)](https://bundlephobia.com/result?p=@bitty/nullish)

Nullish helper functions and types for TypeScript.

- 📦 Distributions in ESM, CommonJS, UMD and UMD _minified_ formats.

- ⚡ Lightweight:
  - Weighs less than 0.2KB (min + gzip).
  - Tree-shakeable.
  - Side-effects free.

- 🔋 Bateries included:
  - No dependencies.
  - Its not based on newer browser's APIs or es2015+ features.

- 🏷 Safe:
  - JSDocs and type declarations for IDEs and editor's autocomplete/intellisense.
  - Made with TypeScript as strict as possible.
  - Unit tests with AVA.

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install @bitty/nullish --save

# For Yarn, use the command below.
yarn add @bitty/nullish
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bitty/nullish"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bitty/nullish"></script>

<script>
  // UMD module is exposed through the "isNullish" global function.
  console.log(isNullish);
  //=> "[Function: isNullish]"

  console.log(isNullish(null));
  //=> true
</script>
```

## Getting Stated

This module default exports `isNullish`, which is a function that checks if value is _nullish_.

```ts
import isNullish from '@bitty/pipe';

isNullish(null);
//=> true

isNullish(undefined);
//=> true

isNullish(undefined as void);
//=> true

isNullish(NaN);
//=> false
```

We also exports `NonNullish` and `Nullish` types.

- `Nullish` is simply an union of `null`, `void` and `undefined` types.

  ```ts
  import { Nullish } from '@bitty/nullish';

  let nullish: Nullish;
  nullish = null;
  nullish = undefined;
  nullish = undefined as void;

  nullish = false;
  //=> throws "Type 'false' is not assignable to type 'Nullish'.".
  ```

- `NonNullish<T>` is a type helper that removes _nullish_ types.

  ```ts
  import { NonNullish } from '@bitty/nullish';

  type Value = string | null | undefined;

  const value: NonNullish<Value> = null;
  //=> throws "Type 'null' is not assignable to type 'string'.".
  ```

## License

Released under [MIT License](./LICENSE).
