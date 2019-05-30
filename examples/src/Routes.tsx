import React from 'react';
import { Route} from 'react-router-dom';

import Class from './components/class/Class';
import Hooks from './components/hooks/Hooks';
import Fetch from './components/fetch/Fetch';

export function RouterComponent(route: any) {
  // @ts-ignore
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export const Routes = [
  {
    path: '/class',
    component: Class,
  },
  {
    path: '/hooks',
    component: Hooks,
  },
  {
    path: '/fetch',
    component: Fetch,
  }
];