import test from 'ava';
import toJSONString from './toJSONString.js';

test('toJSONString transforms Json value to JSON string', (context) => {
  const user = {
    name: 'Santos Dumont',
  };

  context.is(toJSONString<{ name: string }>(user, 0), `{"name":"Santos Dumont"}`);
});
