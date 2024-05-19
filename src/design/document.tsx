import React from 'react';
import { Typography, Box } from '@mui/material';
import { useOutletContext } from 'react-router-dom';

interface DocumentProps {
  revision: number;
  language: string;
  description: string;
}

const Document: React.FC<DocumentProps> = ({ revision, language, description }) => {
  const title = useOutletContext<string>();
  return (
    <Box>
      <Typography variant="h6">Revision: {revision}</Typography>
      <Typography variant="body1">Language: {language}</Typography>
      <Typography variant="body1">Description: {description}</Typography>
    </Box>
  );
};

export default Document;