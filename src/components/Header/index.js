import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const links = [
  { to: '/', children: 'Home' },
  { to: '/dashboard', children: 'Dashboard' },
];

const Header = () => (
  <div>
    { links.map((props, i) =>
      <Link
        key={i}
        activeClassName="active"
        activeOnlyWhenExact
        {...props}
      >
        {props.children}
      </Link>,
    )}
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;

