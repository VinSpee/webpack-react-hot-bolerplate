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
  authenticated,
  links = defaultLinks,
}: {
  authenticated?: boolean,
  links: Array<{
    to: string,
    children: string,
    protected?: boolean,
  }>,
  children?: React$Element<*> | Array<React$Element<*>>,
}) => (
  <ul>
    { links.map(props => props.protected ?
      (authenticated &&
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
  authenticated: state.currentUser.authenticated,
});

export default connect(mapStateToProps)(Header);
