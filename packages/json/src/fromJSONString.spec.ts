import test from 'ava';
import fromJSONString from './fromJSONString.js';

test("fromJSONString parses JSON string to 'Json'", (context) => {
  const json = '{ "name": "Santos Dumont" }';

  context.deepEqual(fromJSONString<{ name: string }>(json), {
    name: 'Santos Dumont',
  });
});
