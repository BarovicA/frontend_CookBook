import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const User = ({ onHomeClick }) => {
  return (
    <div>
      <Typography variant="h2">User Panel</Typography>
      {}
      <Button onClick={onHomeClick} variant="contained" color="primary">
        Home
      </Button>
      <Button variant="contained" color="primary">
        Edit Profile
      </Button>
      <Button variant="contained" color="primary">
        Logout
      </Button>
    </div>
  );
};

export default User;
