import test from 'ava';
import {
  // shallow,
  mount,
  // render,
} from 'enzyme';
import React from 'react';
import {
  MemoryRouter,
} from 'react-router';
import { Header } from './';

test('Header', (t) => {
  const actual = mount(
    <MemoryRouter initialEntries={[window.location.pathname]}>
      <Header />
    </MemoryRouter>,
  );

  const expected = (
    <span>
      <ul>
        <li>
          <a href="/" className="c:red active">Home</a>
        </li>
      </ul>
    </span>
  );

  console.log(actual.debug());

  t.is(actual.contains(expected), true);
});
