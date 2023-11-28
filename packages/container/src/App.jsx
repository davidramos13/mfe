
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generatedClassName = createGenerateClassName({
  productionPrefix: 'co'
});

const App = () => (
  <BrowserRouter>
    <StylesProvider generateClassName={generatedClassName}>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </StylesProvider>
  </BrowserRouter>
) ;

export default App;
