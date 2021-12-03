import React, { lazy } from 'react';
import { PartialRouteObject } from 'react-router';
import RouteWrapper from '@/routes/RouteWrapper';

const LoginPage = lazy(() => import(/* webpackChunkName: "login'" */ '@/pages/login'));
const RegisterPage = lazy(() => import(/* webpackChunkName: "register'" */ '@/pages/register'));
const ErrorPage = lazy(() => import(/* webpackChunkName: "error'" */ '@/pages/error'));

const mainRoutes: PartialRouteObject[] = [
  {
    path: 'login',
    element: <RouteWrapper element={<LoginPage />} titleId="title.login" />,
  },
  {
    path: 'register',
    element: <RouteWrapper element={<RegisterPage />} titleId="title.register" />,
  },
  {
    path: '/',
    element: <RouteWrapper element={<LoginPage />} titleId="title.login" />,
    children: [
      {
        path: 'dashboard',
        element: <RouteWrapper element={<LoginPage />} titleId="title.login" />,
      },
      {
        path: 'documentation',
        element: <RouteWrapper element={<RegisterPage />} titleId="title.register" />,
      },
    ],
  },
];

const constantRoutes: PartialRouteObject[] = [
  {
    path: '/error',
    element: <RouteWrapper element={<ErrorPage />} titleId="title.error" />,
  },
  {
    // 没有的页面404
    path: '*',
    element: <RouteWrapper element={<ErrorPage />} titleId="title.error" />,
  },
];

const routes: PartialRouteObject[] = [...mainRoutes, ...constantRoutes];

export default routes;
