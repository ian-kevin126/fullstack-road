import React from 'react';
import { LoginPage, RegisterPage } from '@/pages';
import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
];

export default routes;
