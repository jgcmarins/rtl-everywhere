import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

import { Routes, RouterComponent } from './Routes';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const AppBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLink = styled(Link)`
  color: #61dafb;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <AppBody>
          <ul>
            <li>
              <StyledLink to="/class">Class Component</StyledLink>
            </li>
            <li>
              <StyledLink to="/hooks">Hooks</StyledLink>
            </li>
            <li>
              <StyledLink to="/fetch">Fetch</StyledLink>
            </li>
          </ul>
        </AppBody>
        <AppBody>
          {Routes.map((route, index) => (
            <RouterComponent key={index} {...route} />
          ))}
        </AppBody>
      </AppContainer>
    </Router>
  );
};

export default App;
