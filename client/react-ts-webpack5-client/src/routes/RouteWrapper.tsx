import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';
import PrivateRoute from './PrivateRoute';

export interface RouteWrapperProps extends RouteProps {
  /** document title locale id */
  titleId: string;
  /** authorization？ */
  auth?: boolean;
}

const RouteWrapper: FC<RouteWrapperProps> = ({ titleId, auth, ...props }) => {
  // const { formatMessage } = useIntl();
  const WitchRoute = auth ? PrivateRoute : Route;
  if (titleId) {
    // document.title = formatMessage({
    //   id: titleId,
    // });
  }
  return <WitchRoute {...props} />;
};

export default RouteWrapper;
