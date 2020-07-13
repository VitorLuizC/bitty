# `@bitty/falsy`

[![Bundle minified size](https://badgen.net/bundlephobia/min/@bitty/falsy)](https://bundlephobia.com/result?p=@bitty/falsy)
[![Bundle minified and gzipped size](https://badgen.net/bundlephobia/minzip/@bitty/falsy)](https://bundlephobia.com/result?p=@bitty/falsy)

Falsy helper functions and types for TypeScript.

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
npm install @bitty/falsy --save

# For Yarn, use the command below.
yarn add @bitty/falsy
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bitty/falsy"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bitty/falsy"></script>

<script>
  // UMD module is exposed through the "isFalsy" global function.
  console.log(isFalsy);
  //=> "[Function: isFalsy]"

  console.log(isFalsy(null));
  //=> true
</script>
```

## Getting Stated

This module default exports `isFalsy`, which is a predicate function that checks if value is _falsy_.

```ts
import isFalsy from '@bitty/pipe';

isFalsy();
isFalsy(null);
isFalsy(undefined);
isFalsy(0);
isFalsy(-0);
isFalsy(0n);
isFalsy(NaN);
isFalsy('');
isFalsy(false);
//=> true

isFalsy('Not empty.');
//=> false
```

We also exports `NonFalsy` and `Falsy` types.

- `Falsy` is simply an union of `false`, `void`, `''`, `0`, `0n`, `null` and `undefined`, types.

  ```ts
  import { Falsy } from '@bitty/falsy';

  let falsy: Falsy;
  falsy = false;
  falsy = undefined as void;
  falsy = '';
  falsy = 0;
  falsy = 0n;
  falsy = null;
  falsy = undefined;

  falsy = 1;
  //=> throws "Type '1' is not assignable to type 'Falsy'.".
  ```

- `NonFalsy<T>` is a type helper that removes _falsy_ types.

  ```ts
  import { NonFalsy } from '@bitty/falsy';

  type Value = 0 | 1 | 2;

  const value: NonFalsy<Value> = 0;
  //=> throws "Type '0' is not assignable to type '1 | 2'.".
  ```

## License

Released under [MIT License](./LICENSE).
