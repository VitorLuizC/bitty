import { tryCatch, fromNullish } from './Either.js';

const parseJSON = <R>(value: string) =>
  tryCatch(
    (): R => JSON.parse(value),
    (error: any) => new Error(error),
  );

const x = parseJSON<{ name?: string }>(`{ "name": "Vitor" }`);
x.chain(({ name }) => fromNullish('')(name));
x.isLeft();
x.isRight();
