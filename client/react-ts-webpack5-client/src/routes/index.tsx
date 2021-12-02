import React from 'react';
import LoginPage from '@/pages/login';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LoginPage />,
  },
];

export default routes;
