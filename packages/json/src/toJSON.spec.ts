import test from 'ava';
import toJSON from './toJSON.js';

test('toJSON transforms Json value to JSON string', (context) => {
  type User = {
    name: string;
  };

  const user: User = {
    name: 'Santos Dumont',
  };

  context.is(toJSON(user, 0), `{"name":"Santos Dumont"}`);
});
