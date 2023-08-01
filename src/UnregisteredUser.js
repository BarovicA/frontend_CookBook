import React, { useEffect, useState } from 'react';
import logo from './logo.jpg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledLogo = styled('img')`
  width: 100%;
  max-width: 1100px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.show {
    opacity: 1;
  }
    border: 10px solid red;
`;

const UnregisteredUser = ({ 
  onHomeClick,
  onRegisterClick, 
  onLoginClick, }) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setShowLogo(true);
  }, []);

  const handleRegisterClick = () => {
    console.log('Register button clicked');
  };

  const handleLoginClick = () => {
    console.log('Login button clicked');
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Unregistered User Panel
      </Typography>
      <Button onClick={onHomeClick} variant="contained" color="primary" sx={{ mr: 1 }}>
        Home
      </Button>
      <Button onClick={onRegisterClick} variant="contained" color="secondary" sx={{ mr: 1 }}>
        Register
      </Button>
      <Button onClick={onLoginClick} variant="contained" color="info">
        Login
      </Button>
      <Box sx={{ marginTop: '20px' }}>
        {/* Dodajemo klasu "show" na sliku kako bi se postepeno pojavila */}
        <StyledLogo src={logo} alt="Logo" className={showLogo ? 'show' : ''} />
      </Box>
    </Box>
  );
};

export default UnregisteredUser;
