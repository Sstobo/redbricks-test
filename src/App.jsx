import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';
import './App.css'
import { Toaster } from "@/components/ui/toaster"
 

function App() {
  return (
    <>
      <Header />
      <Container>
        <Content />
        <Toaster />
      </Container>
    </>
  );
}

export default App;
