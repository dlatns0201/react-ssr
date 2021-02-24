import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdmins } from '../actions';


const AdminsPage = () => {
  const dispatch = useDispatch();
  const admins = useSelector(state => state.admins);

  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  return (
    <ul>
      {admins.map(admin => <li key={admin.id}>{admin.name}</li>)}
    </ul>
  )
};

AdminsPage.loadData = ({ dispatch }) => {
  return dispatch(fetchAdmins());
}

export default AdminsPage;