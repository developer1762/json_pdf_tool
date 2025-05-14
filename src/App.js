import * as React from 'react';
import { Box, Container } from '@mui/material';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default function App() {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', overflowY:'hidden' }}>
      <Header />

      <Body/>

      <Footer />
    </Box>
  );
}

