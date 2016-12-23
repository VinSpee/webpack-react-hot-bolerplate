// @flow
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const links = [
  {
    to: '/',
    children: 'Home',
  },
  {
    to: '/dashboard',
    children: 'Dashboard',
    protected: true,
  },
];

const Header = ({
  loggedIn,
}: {
  loggedIn: boolean,
  children?: React$Element<*> | Array<React$Element<*>>,
}) => (
  <div>
    { links.map((props, i) =>
      props.protected && loggedIn &&
      <Link
        key={i}
        activeClassName="active"
        activeOnlyWhenExact
        to={props.to}
      >
        {props.children}
      </Link>,
    )}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  loggedIn: state.currentUser.loggedIn,
});

export default connect(mapStateToProps)(Header);
