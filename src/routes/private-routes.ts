import React from 'react';
import { RouteProps } from 'react-router';

const DemoView = React.lazy(() => import('../pages/DemoView'));

export default {
  root: {
    path: '/pages',
    component: DemoView,
  } as RouteProps,
  demo: {
    path: '/pages/demo',
    component: DemoView,
  } as RouteProps,
};
