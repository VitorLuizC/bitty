# `@bitty/deferred`

[![Bundle minified size](https://badgen.net/bundlephobia/min/@bitty/deferred)](https://bundlephobia.com/result?p=@bitty/deferred)
[![Bundle minified and gzipped size](https://badgen.net/bundlephobia/minzip/@bitty/deferred)](https://bundlephobia.com/result?p=@bitty/deferred)

- 📦 Distributions in ESM, CommonJS, UMD and UMD _minified_ formats.

- ⚡ Lightweight:
  <!-- - Weighs less than 0.1KB (min + gzip). -->
  - Tree-shakeable.
  - Side-effects free.

- 🔋 Bateries included:
  - No dependencies.
  - Only requires `Promise`, but you can use a polyfill in unsupported environments.
  - Isn't based in other es2015+ features or APIs.

- 🏷 Safe:
  - JSDocs and type declarations for IDEs and editor's autocomplete/intellisense.
  - Made with TypeScript as strict as possible.
  - Unit tests with AVA.

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install @bitty/deferred --save

# For Yarn, use the command below.
yarn add @bitty/deferred
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bitty/deferred"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bitty/deferred"></script>

<script>
  // UMD module defines "createDeferred" in global/window scope.
  console.log(createDeferred);
  //=> "[Function: createDeferred]"

  let deferred = createDeferred();

  deferred.promise.then(() => {
    console.log('It was okay.');
  });

  deferred.resolve();
</script>
```

## Getting Stated

This module default exports `createDeferred`, which is a factory function that creates `Deferred` objects.

```ts
import createDeferred from '@bitty/deferred';

const deferred = createDeferred<boolean>();
```

`Deferred` objects exposes a `Promise` and methods to reject or resolve it.

```ts
import createDeferred, { Deferred } from '@bitty/deferred';

let deferred: Deferred<number>;

// ...

deferred.promise
  .then(value => console.log(`You received $ ${value.toFixed(2)}!`))
  .catch(reason => console.error(`Couldn't receive because of `, reason));

deferred.resolve(10);
//=> It logs "You received $ 50.00!" in the console.

deferred.reject(new Error('The account number is invalid.'));
//=> Won't log anything because promise is already resolved.
```

We also exports `Deferred` interface. Which simply defines the promise property (an instance of `Promise`) and the methods that change it.

```ts
interface Deferred<T> {
  readonly promise: Promise<T>;
  reject(reason: unknown): void;
  resolve(value: T | PromiseLike<T>): void;
}
```

## License

Released under [MIT License](./LICENSE).
