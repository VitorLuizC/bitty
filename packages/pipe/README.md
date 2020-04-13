# `@bitty/pipe`

[![Bundle minified size](https://badgen.net/bundlephobia/min/@bitty/pipe)](https://bundlephobia.com/result?p=@bitty/pipe)
[![Bundle minified and gzipped size](https://badgen.net/bundlephobia/minzip/@bitty/pipe)](https://bundlephobia.com/result?p=@bitty/pipe)

A pipe function to perform function composition in LTR (Left-To-Right) direction.

- 📦 Distributions in ESM, CommonJS, UMD and UMD _minified_ formats.

- ⚡ Lightweight:
  - Weighs less than 0.3KB (min + gzip).
  - 3x smaller than `ramda.pipe`.

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
npm install @bitty/pipe --save

# For Yarn, use the command below.
yarn add @bitty/pipe
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bitty/pipe"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bitty/pipe"></script>

<script>
  // UMD module is exposed through the "pipe" global function.
  console.log(pipe);
  //=> "[Function: pipe]"
</script>
```

## Getting Started

Import `pipe` from package and just compose your functions with it.

```js
import pipe from '@bitty/pipe';

const resolveToNumber = pipe(
  (value) => typeof value === 'number' ? value : parseFloat(value),
  (value) => Number.isNaN(value) ? 0 : value
);

resolveToNumber('12389');
//=> 12389
```

The first pipe argument is an arity N function, so you can receive more than one argument in the composition.

```ts
import pipe from '@bitty/pipe';

const fromTextToWords = (text: string, wordsToIgnore: string[] = []) =>
  text.trim().split(/\s+/).filter(word => !wordsToIgnore.includes(word));

const formatToInitials = pipe(
  fromTextToWords,
  (words) => words.map((word) => word.charAt(0)),
  (initials) => initials.join('').toUpperCase(),
);

formatToInitials('abraão  william de santana ', ['de']);
//=> "AWS"
```

## License

Released under [MIT License](./LICENSE).
