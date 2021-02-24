import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from "react-helmet";
import { fetchUsers } from '../actions';

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  return (
    <ul>
      <Helmet>
        <title>Users App</title>
        <meta name="og:title" content="Users App" />
      </Helmet>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

UsersPage.loadData = (store) => {
  return store.dispatch(fetchUsers());
}

export default UsersPage;

