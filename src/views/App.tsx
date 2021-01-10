import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';

import GlobalStyle from '~/application/styles/globalStyles';

import Popular from '~/application/components/Popular';
import Recommendations from '~/application/components/Recommendations';
import Similar from '~/application/components/Similar';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  background-color: #010101;
  margin-bottom: 2rem;
  color: #fff;
  padding: 1.2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  li {
    background-color: #ccc;
    padding: 0.5rem 2rem;
    margin: 0 0.5rem;
    border-radius: 2rem;
    color: #000;
    font-weight: bold;
  }
`;

const queryClient = new QueryClient();

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header>
        <Title>Collections</Title>

        <Nav>
          <li>
            <Link to='/'>Popular</Link>
          </li>
          <li>
            <Link to='/recommendations'>Recommendations</Link>
          </li>
          <li>
            <Link to='/similar'>Similar</Link>
          </li>
        </Nav>
      </Header>

      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path='/' component={Popular} />
          <Route path='/recommendations'>
            <Recommendations mediaId='508442' mediaType='movie' />
          </Route>
          <Route path='/similar'>
            <Similar mediaId='508442' mediaType='movie' />
          </Route>
        </Switch>
      </QueryClientProvider>
    </Router>
  </>
);

export default App;
