import React from 'react';

import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar';
import Player from './components/Player';

import { Wrapper, Container } from './styles/components';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
