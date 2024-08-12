import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import './App.css'


function App() {
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col bg-red-400">hekki</div>
        <Content />
      </Container>
    </>
  );
}

export default App;
