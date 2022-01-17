import React from 'react';
import {
  Container, CssBaseline, Box, Typography,
} from '@mui/material';

function Dashboard() {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 1,
          borderColor: 'primary.light',
          padding: 3,
          borderRadius: '2%',
        }}
      >
        <Typography component="h1" variant="h4">
          Welcome to the Dashboard!
        </Typography>
      </Box>
    </Container>
  );
}

export default Dashboard;
