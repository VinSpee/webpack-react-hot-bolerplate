import React from 'react';
import { Link } from 'react-router';

const links = [
  { to: '/', children: 'Home' },
  { to: '/dashboard', children: 'Dashboard' }
];

const Header = () => (
  <div>
    { links.map((props, i) =>
      <Link
        key={ i }
        activeClassName="active"
        activeOnlyWhenExact
        { ...props }
      />
    )}
  </div>
);

export default Header;

