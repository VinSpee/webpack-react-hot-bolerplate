import React from 'react';
import { connect } from 'react-redux';
import { logIn } from 'modules/current-user';

const Home = ({
  handleLoginClick,
  loggedIn,
}) => (
  <div>
    Home Page
    <button onClick={handleLoginClick}>
      Login
    </button>
    {loggedIn ? 'Logged In' : 'Logged Out'}
  </div>
);

const mapStateToProps = state => ({
  loggedIn: state.currentUser.loggedIn,
});

const mapDispatchToProps = {
  handleLoginClick: logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
