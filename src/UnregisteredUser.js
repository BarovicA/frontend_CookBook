import React, { useEffect, useState } from 'react';
import logo from './logo.jpg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledLogo = styled('img')`
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

const UnregisteredUser = ({ 
  onHomeClick,
  onRegisterClick, 
  onLoginClick,
}) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setShowLogo(true);
  }, []);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Button onClick={onRegisterClick} variant="contained" color="secondary" sx={{ mr: 1 }}>
        Register
      </Button>
      <Button onClick={onLoginClick} variant="contained" color="warning">
        Login
      </Button>
      <Typography variant="h3" component="h2" gutterBottom>
        Dobrodošli u Interaktivni kuvar
      </Typography>
      <Box sx={{ marginTop: '20px' }}>
        <StyledLogo src={logo} alt="Logo" className={showLogo ? 'show' : ''} />
      </Box>
    </Box>
  );
};

export default UnregisteredUser;
