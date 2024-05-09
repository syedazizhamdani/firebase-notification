import React from 'react';
import { Container, Typography } from '@mui/material';
import Notification from './Notification';
import ButtonContainer from './ButtonContainer';

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Notification System
      </Typography>
      <Notification />
      <ButtonContainer />
    </Container>
  );
}

export default App;
