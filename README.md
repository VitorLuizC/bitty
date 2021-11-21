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
[`@bitty/animate`](https://github.com/VitorLuizC/animate) | Create and manage animation functions with browser's AnimationFrame API.
[`@bitty/create-request`](https://github.com/VitorLuizC/create-request) | Apply interceptors to `fetch` and create a custom request function.
[`@bitty/deferred`](./packages/deferred/README.md) | It provides a function to create [Deferred](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred/README.md) objects. They contain a Promise and methods to imperatively resolve or reject it.
[`@bitty/either`](./packages/either/README.md) | An algebraic data type that represents a value of one of two possible types (a disjoint union).
[`@bitty/event-emitter`](https://github.com/VitorLuizC/event-emitter) | Emit and listen events in any class, object or function without messing them extending classes.
[`@bitty/falsy`](./packages/falsy/README.md) | Falsy helper functions and types for TypeScript.
[`@bitty/format-date`](https://github.com/VitorLuizC/format-date) | A small library (around 400 B when gziped & minified) to format JavaScript `Date` object using same tokens as moment.
[`@bitty/insist`](https://github.com/VitorLuizC/insist) | Insistently runs a callback and only resolves the promise when its result is truthy.
[`@bitty/json`](./packages/json/README.md) | Types and type-safe functions for JSON.
[`@bitty/maybe`](https://github.com/VitorLuizC/maybe) | An algebraic data type that is a container for an optional values.
[`@bitty/nullish`](./packages/nullish/README.md) | Nullish helper functions and types for TypeScript.
[`@bitty/pipe`](./packages/pipe/README.md) | A pipe function to perform function composition in LTR (Left-To-Right) direction.
[`@bitty/predicate`](./packages/predicate/README.md) | `Predicate` and `Refinement` types for TypeScript.

## License

All the packages are released under **MIT License**.
