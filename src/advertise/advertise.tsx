import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const Advertise: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">
        Design and Generate Documents
      </Typography>
      <Typography variant="body1">
        Our product is fast, scalable, and powered by AI.
      </Typography>
      <Typography variant="body1">
        With our advanced AI technology, you can generate templates effortlessly.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Box>
  );
};

export default Advertise;