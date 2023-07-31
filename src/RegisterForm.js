import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './RegisterForm.css';
import HomeIcon from '@mui/icons-material/Home';

const RegisterForm = ({ onHomeClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [passwordRequirementsMet, setPasswordRequirementsMet] = useState(true);
  const [usernameLengthMet, setUsernameLengthMet] = useState(true);

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

  const handleSubmit = (event) => {
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

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className="navbar">
        <Button onClick={onHomeClick} startIcon={<HomeIcon />}>
          Home
        </Button>
      </div>
      <h2>Register Forma</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Korisnicko ime"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            error={!usernameLengthMet}
            helperText={!usernameLengthMet ? " Korisnicko ime mora da ima barem 4 karaktera" : ""}
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
            helperText={!passwordRequirementsMet ? "Lozinka treba da sadrzi, jedno veliko slovo, jedno malo slovo jedan broj i da bude minimalno 3 karaktera duzine" : ""}
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
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <div className="requirements">
          <p style={{ fontSize: '12px' }}>
            Lozinka treba da sadrzi, jedno veliko slovo, jedno malo slovo jedan broj i da bude minimalno 3 karaktera duzine 
          </p>
          <p style={{ fontSize: '12px' }}>
            Korisnicko ime mora da ima barem 4 karaktera
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
