import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';

import Title from '@App/components/Title';
import Logo from '@App/components/Logo';

import View from '@App/components/pages/view/View';
import Recipient from '@App/components/pages/recipient/Recipient';
import Select from '@App/components/pages/select/Select';

const LogoUrl = require('../../assets/images/logo-birdie.svg');
const api = 'https://birdietechtestbackend.herokuapp.com';

interface AppProps {

}

interface AppState {

}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Logo src={LogoUrl} />
          <Title>Welcome to birdie</Title>
          <Router>
            <Switch>
              <Route 
                exact={true} 
                path="/"
                component={(props: RouteComponentProps) => <Select 
                  api={api}
                  {...props} 
                />} 
              />
              <Route 
                exact={true} 
                path="/recipient/:id"
                component={(props: RouteComponentProps) => <Recipient 
                  api={api}
                  {...props} 
                />} 
              />
              <Route 
                exact={true} 
                path="/view/:id/:type" 
                component={(props: RouteComponentProps) => <View
                  api={api}
                  {...props} 
                />} 
              />
            </Switch>
          </Router>
        </AppContainer>
      </>
    );
  }
}

export default App;