import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import isLogin from '../utils/isLogin';

const PrivateRoute = ({ element: Element, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Element {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export default PrivateRoute;
