import React from 'react';
import Home from './components/Home';
import UserList from './components/UserList';

const Routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UserList
  }
]

export default Routes;