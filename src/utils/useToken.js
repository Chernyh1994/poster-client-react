import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getUser } from '../store/actions/authAction';
import instanceAxios from './instanceAxios';

// eslint-disable-next-line import/prefer-default-export
export const useToken = () => {
  const localStorageToken = localStorage.getItem('token');
  const token = useSelector((state) => state.authReducer.token);
  useGetUser(localStorageToken);
  if (token) {
    instanceAxios.defaults.headers.Authorization = `Bearer ${token}`;
  }
  instanceAxios.defaults.headers.Authorization = `Bearer ${localStorageToken}`;
};

const useGetUser = (token) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [dispatch, token]);
};
