// @flow
import React from 'react';
import { Link } from 'react-router';
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

export const Header = ({
  authenticated = false,
  links = defaultLinks,
}: {
  /* eslint-disable react/require-default-props */
  authenticated?: boolean,
  /* eslint-enable react/require-default-props */
  links: Array<{
    to: string,
    children: string,
    protected?: boolean,
  }>,
}) => (
  <ul>
    { links.map(data => data.protected ?
      (authenticated &&
        <li key={data.to}>
          <Link
            className="c:red"
            activeClassName="active"
            activeOnlyWhenExact
            to={data.to}
          >
            {data.children}
          </Link>
        </li>
      ) : (
        <li key={data.to}>
          <Link
            className="c:red"
            activeClassName="active"
            activeOnlyWhenExact
            to={data.to}
          >
            {data.children}
          </Link>
        </li>
      ),
    )}
  </ul>
);

const mapStateToProps = (state: AppState) => ({
  authenticated: state.currentUser.authenticated,
});

export default connect(mapStateToProps)(Header);
