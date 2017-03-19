// import { curry } from 'ramda';
import fetch from 'fetch-jsonp';

const ENDPOINTS = {
  LOG_IN: 'http://www.mocky.io/v2/587c2700110000ab158baa15',
  LOG_OUT: 'http://www.mocky.io/v2/58cddb67110000602525f7b5',
};

export default {
  logIn: credentials => (
    fetch(
      ENDPOINTS.LOG_IN,
      {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        credentials: 'same-origin',
      },
    )
    .then(res => res.json())
    .catch(err => new Error(err))
  ),
  logOut: credentials => (
    fetch(
      ENDPOINTS.LOG_OUT,
      {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        credentials: 'same-origin',
      },
    )
    .then(res => res.json())
    .catch(err => new Error(err))
  ),
};
