// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const defaultLinks = [
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
  authenticated = false,
  links = defaultLinks,
}: {
  authenticated: boolean,
  links: Array<{
    to: string,
    children: string,
    protected?: boolean,
  }>,
}) => (
  <ul>
    { links.map(data => (
      data.protected ? (
        (authenticated &&
          <li key={data.to}>
            <NavLink
              exact
              to={data.to}
            >
              {data.children}
            </NavLink>
          </li>
        )
      ) : (
        <li key={data.to}>
          <NavLink
            exact
            to={data.to}
          >
            {data.children}
          </NavLink>
        </li>
      )
    ))}
  </ul>
);

const mapStateToProps = (state: AppState) => ({
  authenticated: state.currentUser.authenticated,
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export {
  ConnectedHeader as default,
  Header as Component,
};
