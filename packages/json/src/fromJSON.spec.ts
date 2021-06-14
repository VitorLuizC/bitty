import test from 'ava';
import fromJSON from './fromJSON.js';

test("fromJSON parses JSON string to 'Json'", (context) => {
  const expected = {
    name: 'Santos Dumont',
  };

  context.deepEqual(
    fromJSON<{ name: string }>('{ "name": "Santos Dumont" }'),
    expected,
  );
});
