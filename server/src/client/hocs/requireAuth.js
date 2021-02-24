import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const requireAuth = (Component) => (props) => {
  const auth = useSelector(state => state.auth);
  switch(auth) {
    case null: {
      return (
        <div>Loading...</div>
      )
    }
    case false: {
      return (
        <Redirect to='/' />
      )
    }
    default: {
      return <Component {...props} />
    }
  }
}

export default requireAuth;