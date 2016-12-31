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

export const Header = ({
  loggedIn = false,
}: {
  loggedIn: boolean,
  children?: React$Element<*> | Array<React$Element<*>>,
}) => (
  <ul>
    { links.map(props => props.protected ?
      (loggedIn &&
        <li key={props.to}>
          <Link
            className="c:red"
            activeClassName="active"
            activeOnlyWhenExact
            to={props.to}
          >
            {props.children}
          </Link>
        </li>
      ) : (
        <li key={props.to}>
          <Link
            className="c:red"
            activeClassName="active"
            activeOnlyWhenExact
            to={props.to}
          >
            {props.children}
          </Link>
        </li>
      ),
    )}
  </ul>
);

const mapStateToProps = (state: AppState) => ({
  loggedIn: state.currentUser.loggedIn,
});

export default connect(mapStateToProps)(Header);
