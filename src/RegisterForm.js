import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './RegisterForm.css';
import HomeIcon from '@mui/icons-material/Home';
import registerImage from './register.jpg';

const RegisterForm = ({ onHomeClick }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordRequirementsMet, setPasswordRequirementsMet] = useState(true);
  const [usernameLengthMet, setUsernameLengthMet] = useState(true);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setUsernameLengthMet(value.length >= 4);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordRequirementsMet(false);
      return;
    }

    setPasswordRequirementsMet(true);

    // Priprema podataka za slanje
    const userData = {
      firstName,
      lastName,
      username,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/v1/regularuser/create', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
            'Accept': '*/*',
            'Origin': 'http://localhost:3000',
            'Authorization': JSON.parse(localStorage.getItem('user')).token
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User successfully registered!');
      } else {
        console.error('Registration failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundImage: `url(${registerImage})`,
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
      <h2>Registruj se</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Ime"
            variant="outlined"
            value={firstName}
            onChange={handleFirstNameChange}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
          />
        </div>
        <div>
          <TextField
            label="Prezime"
            variant="outlined"
            value={lastName}
            onChange={handleLastNameChange}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
          />
        </div>
        <div>
          <TextField
            label="Korisnicko ime"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            error={!usernameLengthMet}
            helperText={!usernameLengthMet ? "Korisnicko ime mora da ima barem 4 karaktera" : ""}
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
            error={!passwordRequirementsMet}
            helperText={!passwordRequirementsMet ? "Lozinka treba da sadrzi, jedno veliko slovo, jedno malo slovo, jedan broj i da bude minimalno 3 karaktera duzine" : ""}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
          />
        </div>
        <div>
          <TextField
            type="password"
            label="Potvrdi Lozinku"
            variant="outlined"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!passwordsMatch}
            helperText={!passwordsMatch ? "Passwords do not match" : ""}
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <div className="requirements">
          <p style={{ fontSize: '12px' }}>
            Lozinka treba da sadrzi, jedno veliko slovo, jedno malo slovo, jedan broj i da bude minimalno 3 karaktera duzine 
          </p>
          <p style={{ fontSize: '12px' }}>
            Korisnicko ime mora da ima barem 4 karaktera
          </p>
        </div>
      </form>
    </Box>
  );
};

export default RegisterForm;
