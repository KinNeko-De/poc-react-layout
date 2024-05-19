import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { useTitle } from './layout';

export default function GlobalHeader() {
  const currentTitle = useSelector((state: any) => state.title.value);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{currentTitle}</Typography><Typography variant="h6">Context: {"test"}</Typography>
      </Toolbar>
    </AppBar>
  );
};