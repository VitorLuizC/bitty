import test from 'ava';
import toJSON from './toJSON.js';

test('toJSON transforms Json value to JSON string', (context) => {
  const user = {
    name: 'Santos Dumont',
  };

  context.is(toJSON<{ name: string }>(user, 0), `{"name":"Santos Dumont"}`);
});
