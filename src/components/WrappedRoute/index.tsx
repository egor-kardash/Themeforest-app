import React from 'react';

import { Route } from 'react-router-dom';

import { ErrorBoundary } from '../ErrorBoundary';
import { IRoute } from './types';

export const WrappedRoute = (props: any) => (
  <ErrorBoundary key={props.location?.pathname}>
    <Route {...props} />
  </ErrorBoundary>
);
