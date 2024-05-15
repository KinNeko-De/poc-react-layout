import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'

const GlobalHeader: React.FC = () => {
  const currecntTitle = useSelector((state: any) => state.title.value)
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{currecntTitle}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default GlobalHeader;