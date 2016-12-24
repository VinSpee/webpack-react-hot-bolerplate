import asyncComponent from 'components/async-component';

const AsyncDashboard = asyncComponent(() =>
  import('./Dashboard').then(module => module.default),
);

export default AsyncDashboard;
