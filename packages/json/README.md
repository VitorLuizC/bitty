# `@bitty/json`

[![Bundle minified size](https://badgen.net/bundlephobia/min/@bitty/json)](https://bundlephobia.com/result?p=@bitty/json)
[![Bundle minified and gzipped size](https://badgen.net/bundlephobia/minzip/@bitty/json)](https://bundlephobia.com/result?p=@bitty/json)

Types and type-safe functions for JSON.

- 📦 Distributions in ESM, CommonJS, UMD and UMD _minified_ formats.

- ⚡ Lightweight:
  - Weighs less than 0.2KB (min + gzip).
  - Tree-shakeable.
  - Side-effects free.

- 🔋 Batteries included:
  - No dependencies.
  - Its not based on newer browser's APIs or es2015+ features.

- 🏷 Safe:
  - JSDocs and type declarations for IDEs and editor's autocomplete/intellisense.
  - Made with TypeScript as strict as possible.
  - Unit tests with AVA (types was also tested).

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install @bitty/json --save

# For Yarn, use the command below.
yarn add @bitty/json
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bitty/json"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bitty/json"></script>

<script>
  // UMD module is exposed through the "Json" global object.
  console.log(Json);
  //=> "[Object: Json]"

  console.log(Json.toJson({ name: 'Carlos Marcos' }, 0));
  //=> "{\"name\":\"Carlos Marcos\"}"
</script>
```

## Getting Stated

This module named exports functions and types to type-safely handle JSON.

```ts
import { JsonObject, toJson } from '@bitty/json';

const sendJson = <T extends JsonObject = JsonObject>(obj: T) => {
  const json = toJson(obj);
  // ...
};

sendJson<{ names: Set<string> }>({ ... });
//=> ❌ Type 'Set<string>' is not assignable to type 'Json'.

sendJson<{ names: string[] }>({ ... });
//=> ✅
```

## API

#### `JsonArray`

An array of `Json` values.

```ts
import { JsonArray } from '@bitty/json';

const answers: JsonArray = [false, 'Okay', null, { color: '#fff' }, [0,3]];
```

#### `JsonObject`

An object whose property keys are strings and values are `Json` values.

```ts
import { JsonObject } from '@bitty/json';

const response: JsonObject = {
  id: 36,
  association: null,
  colors: [{color: '#00f'}, {color: '#d7a'}],
  isDisabled: true
};
```

#### `Json`

A union of `null`, `boolean`, `number`, `string`, `JsonArray` and `JsonObject` types.

```ts
import { Json } from '@bitty/json';

const response: Json = {
  latest: undefined, // ❌ Type 'undefined' is not assignable to type 'Json'.
  current: [
    {
      name: 'Orange',
      color: '#ff8721',
      score: 2871,
      disabled: true,
    }
  ]
};
```

#### `parseJson`

Converts a valid JSON string into a value, whose type that extends `Json`.

```ts
import { parseJson } from '@bitty/json';

type User = {
  name: string;
};

const user = parseJson<User>('{"name":"Carlos Marcos"}');
```

#### `toJson`

Converts a value, whose type extends `Json`, to value to JSON string.

```ts
import { toJson } from '@bitty/json';

type User = {
  name: string;
};

const user = toJson<User>({
  name: 'Carlos Marcos'
}, 0);
//=> "{\"name\":\"Carlos Marcos\"}"
```

## License

Released under [MIT License](./LICENSE).
