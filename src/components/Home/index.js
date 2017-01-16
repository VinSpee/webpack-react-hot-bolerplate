// @flow
import React from 'react';
import { connect } from 'react-redux';
import {
  logIn,
  logOut,
} from 'modules/current-user';

const Home = ({
  handleLoginClick,
  handleLogoutClick,
  authenticated,
  loading,
}: {
  handleLoginClick: (x: {
    user: string,
    pass: string,
  }) => void,
  handleLogoutClick: () => void,
  authenticated: boolean,
  loading: boolean,
}) => (
  <div>
    <h1>Home Page</h1>
    <div>
      { !authenticated
      ? (
        <button
          className="
            bg:black
            c:white
            p-x:2
            p-y:.5
          "
          onClick={() => {
            handleLoginClick({
              user: 'dude',
              pass: '^op$3crE+',
            });
          }}
        >
          {!authenticated && loading ? 'Loading' : 'Login'}
        </button>
      ) : (
        <button
          className="
            bg:black
            c:white
            p-x:2
            p-y:.5
          "
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      )}
    </div>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  authenticated: state.currentUser.authenticated,
  loading: state.currentUser.loading,
});

const mapDispatchToProps = {
  handleLoginClick: logIn,
  handleLogoutClick: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
