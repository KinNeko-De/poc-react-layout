import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';


const GlobalHeader: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Your App Name</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default GlobalHeader;