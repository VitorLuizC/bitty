# 🗃 `@bitty`

A mono-repository with functional programming helpers, algebraic data types, util functions, types and even some micro-frameworks in TypeScript. They were designed to support multiple environments (even older browsers and ESM Node.js).

- 📦 Packages distributed in ESM, CommonJS, UMD and UMD _minified_ formats.

- ⚡ Lightweight, tree-shakeable and side-effects free packages.

- 🔋 Bateries included:

  - Little to none dependencies.

  - Almost every package work independently.

## Packages

Package | Description
------- | -----------
[`@bitty/animate`](./packages/animate) | Create and manage animation functions with browser's AnimationFrame API.
[`@bitty/create-request`](./packages/create-request) | Apply interceptors to `fetch` and create a custom request function.
[`@bitty/deferred`](./packages/deferred) | It provides a function to create [Deferred](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred) objects. They contain a Promise and methods to imperatively resolve or reject it.
[`@bitty/either`](./packages/either) | An algebraic data type that represents a value of one of two possible types (a disjoint union).
[`@bitty/event-emitter`](./packages/event-emitter) | Emit and listen events in any class, object or function without messing them extending classes.
[`@bitty/falsy`](./packages/falsy) | Falsy helper functions and types for TypeScript.
[`@bitty/format-date`](./packages/format-date) | A small library (around 400 B when gziped & minified) to format JavaScript `Date` object using same tokens as moment.
[`@bitty/insistence`](./packages/insistence) | Insistently runs a callback and only resolves the promise when its result is truthy.
[`@bitty/json`](./packages/json) | Types and type-safe functions for JSON.
[`@bitty/maybe`](./packages/maybe) | An algebraic data type that is a container for an optional values.
[`@bitty/nullish`](./packages/nullish) | Nullish helper functions and types for TypeScript.
[`@bitty/pipe`](./packages/pipe) | A pipe function to perform function composition in LTR (Left-To-Right) direction.
[`@bitty/predicate`](./packages/predicate) | `Predicate` and `Refinement` types for TypeScript.

## License

All the packages are released under **MIT License**.
