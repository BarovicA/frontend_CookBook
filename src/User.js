import React, { useEffect, useState } from 'react';
import user from './user.jpg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledUserImage = styled('img')`
  width: 100%;
  max-width: 1100px;
  border-radius: 200px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.show {
    opacity: 1;
  }
  border: 10px solid green;
  border-opacity: 0.5;
`;

const User = ({ onHomeClick }) => {
  const [showUserImage, setShowUserImage] = useState(false);

  useEffect(() => {
    setShowUserImage(true);
  }, []);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2">Dobrodošli</Typography>
      <Button variant="contained" color="primary">
        Moji Recepti
      </Button>
      <Button variant="contained" color="warning">
        Moj Kuvar
      </Button>
      <Button variant="contained" color="secondary">
        Moji Alergeni
      </Button>
      <Button variant="contained" color="error">
        Logout
      </Button>
      <Box sx={{ marginTop: '20px' }}>
        <StyledUserImage src={user} alt="User" className={showUserImage ? 'show' : ''} />
      </Box>
    </Box>
  );
};

export default User;
