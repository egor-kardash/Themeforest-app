import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { v4 as getId } from 'uuid';

import { Header } from '@/components/Header';
import { WrappedRoute } from '@/components/WrappedRoute';
import { Paths, routes } from '@/constants';

import { Footer } from '../Footer';

export const App = () => {
  return (
    <BrowserRouter forceRefresh={true}>
      <Header />
      <Switch>
        {routes.map((route) => (
          <WrappedRoute key={getId()} {...route} />
        ))}
        <Redirect strict from={Paths.NotFound} to={Paths.Home} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
