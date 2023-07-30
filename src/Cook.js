import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Cook = ({ onHomeClick }) => {
  return (
    <div>
      <Typography variant="h2">Cook Panel</Typography>
      {}
      <Button onClick={onHomeClick} variant="contained" color="primary">
        Home
      </Button>
      <Button variant="contained" color="primary">
        Add Recipe
      </Button>
      <Button variant="contained" color="primary">
        Logout
      </Button>
    </div>
  );
};

export default Cook;
