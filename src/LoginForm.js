import React, { useState, useContext } from 'react';
import { UserContext } from "./App"
import { Button, Box, TextField, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import loginImage from './login.jpg';
import { useNavigate } from "react-router-dom";

const LoginForm = ({safePath, defaultPath, onHomeClick }) => {
  const {user, login, logout} = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
        const u = login(username, password); 
        if(u === null){
          setError(true);
      }else{
          setError(false);
          setOpen(false);
          nav(defaultPath);
      }
    }

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
        {/* <Button variant="outlined" onClick={e => {
            if(user === null){
                setOpen(true);
            }else{
                logout();
                nav(safePath);
            }
        }
        }>
            {(user) ? "Logout" : "Login"}
        </Button> */}
      </div>
      <h2>Uloguj se</h2>
      <form onSubmit={handleSubmit}>
        <div>

        <TextField
                    autoFocus
                    id="username"
                    label="Username"
                    type="text"
                    variant="outlined"
                    sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    margin="dense"
                />
                </div>
                <div>
                <TextField
                    id="password"
                    label="Lozinka"
                    type="password"
                    variant="outlined"
                    sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', mb: 2 }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    margin="dense"
                />
            {error && <Typography sx={{color: 'red'}}>Pogrešno korisničko ime ili lozinka.</Typography>}


          {/* <TextField
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
          /> */}
        </div>
        <Button type="submit" variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
