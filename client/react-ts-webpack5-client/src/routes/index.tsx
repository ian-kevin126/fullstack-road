import React, { lazy } from 'react';
import LayoutPage from '@/layout';
import { PartialRouteObject } from 'react-router';
import RouteWrapper from '@/routes/RouteWrapper';

const LoginPage = lazy(async () => import(/* webpackChunkName: "login" */ '@/pages/login'));
const RegisterPage = lazy(
  async () => import(/* webpackChunkName: "register" */ '@/pages/register'),
);
const ErrorPage = lazy(async () => import(/* webpackChunkName: "error" */ '@/pages/error'));

const DashBoard = lazy(async () => import(/* webpackChunkName: "dashboard" */ '@/pages/dashboard'));
const Documentation = lazy(
  async () => import(/* webpackChunkName: "documentation" */ '@/pages/documentation'),
);

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
    element: <RouteWrapper element={<LayoutPage />} titleId="title.login" />,
    children: [
      {
        path: 'dashboard',
        element: <RouteWrapper element={<DashBoard />} titleId="title.dashboard" />,
      },
      {
        path: 'documentation',
        element: <RouteWrapper element={<Documentation />} titleId="title.register" />,
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
