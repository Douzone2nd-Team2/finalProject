import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import isLogin from '../utils/isLogin';

const PublicRoute = ({ element: Element, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? <Element {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export default PublicRoute;
