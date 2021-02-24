import React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from './actions';
import Header from './components/Header';

const App = ({route}) => {
  const auth = useSelector(state => state.auth);

  return (
    <div>
      <Header auth={auth} />
      {renderRoutes(route.routes)}
    </div>
  )
}
App.loadData = ({ dispatch }) => {
  return dispatch(fetchCurrentUser());
}

export default App;