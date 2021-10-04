import React from 'react';
import { RouteProps } from 'react-router';

const LogoView = React.lazy(() => import('../pages/LoginView'));

export default {
  login: {
    component: LogoView,
    path: '/login',
  } as RouteProps,
};
