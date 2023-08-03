import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import loginImage from './login.jpg';

const LoginForm = ({ onHomeClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${loginImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '500px',
        margin: 'auto',
        border: '10px solid green'
      }}
    >
      <div className="navbar">
        <Button onClick={onHomeClick} startIcon={<HomeIcon />}>
          Home
        </Button>
      </div>
      <h2>Uloguj se</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Korisnicko ime"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Lozinka"
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
