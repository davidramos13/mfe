
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co'
});

const App = () => (
  <BrowserRouter>
    <StylesProvider generateClassName={generatedClassName}>
      <div>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component = {AuthLazy} />
            <Route path="/" component = {MarketingLazy} />
          </Switch>
        </Suspense>
      </div>
    </StylesProvider>
  </BrowserRouter>
) ;

export default App;
