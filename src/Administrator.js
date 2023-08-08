import React, { useState, useEffect } from 'react';
import adminImage from './admin.jpg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const StyledAdminImage = styled('img')`
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

const Administrator = ({ onHomeClick }) => {
  const [showAdminImage, setShowAdminImage] = useState(false);

  useEffect(() => {
    setShowAdminImage(true);
  }, []);

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h2">Administrator Panel</Typography>
      <Button variant="contained" color="secondary">
        <NavLink to="add_new_cook">
        Dodaj Kuvara
        </NavLink>
        </Button>
      <Button variant="contained" color="primary">
        Pregled Svih Recepata
      </Button>
      <Button variant="contained" color="warning">Pregled Svih Alergena</Button>
      <Button variant="contained" color="error">Logout</Button>
      <Box sx={{ marginTop: '20px' }}>
        <StyledAdminImage src={adminImage} alt="Administrator" className={showAdminImage ? 'show' : ''} />
      </Box>
    </Box>
  );
};

export default Administrator;
