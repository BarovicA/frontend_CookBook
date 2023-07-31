import React, { useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AdminIcon from '@mui/icons-material/SupervisorAccount';
import RegisterIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Person';
import CookIcon from '@mui/icons-material/Restaurant';
import UserIcon from '@mui/icons-material/Person';
import UnregisteredUserIcon from '@mui/icons-material/PersonOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Ingredients from './Ingredients'; // Importujemo Ingredients modal


const Navbar = ({
  onLoginClick,
  onRegisterClick,
  onHomeClick,
  onAdminClick,
  onCookClick,
  onUserClick,
  onUnregisteredUserClick,
  onBackClick,
  onRecipeClick,
}) => {
  const [ingredientsOpen, setIngredientsOpen] = useState(false);

  const handleIngredientsOpen = () => {
    setIngredientsOpen(true);
  };

  const handleIngredientsClose = () => {
    setIngredientsOpen(false);
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Button onClick={onHomeClick} startIcon={<HomeIcon />}>
            Home
          </Button>
        </li>
        <li>
          <Button onClick={onAdminClick} startIcon={<AdminIcon />}>
            Administrator
          </Button>
        </li>
        <li>
          <Button onClick={onRegisterClick} startIcon={<RegisterIcon />}>
            Registruj se
          </Button>
        </li>
        <li>
          <Button onClick={onLoginClick} startIcon={<LoginIcon />}>
            Login
          </Button>
        </li>
        <li>
          <Button onClick={onCookClick} startIcon={<CookIcon />}>
            Cook
          </Button>
        </li>
        <li>
          <Button onClick={onUserClick} startIcon={<UserIcon />}>
            User
          </Button>
        </li>
        <li>
          <Button onClick={onUnregisteredUserClick} startIcon={<UnregisteredUserIcon />}>
            UnregisteredUser
          </Button>
        </li>
        <li>
          <Button onClick={onRecipeClick} startIcon={<CookIcon  />}>
            Recipe
          </Button>
        </li>
        <li>
          <Button onClick={onBackClick} startIcon={<ArrowBackIcon />}>
            Back
          </Button>
        </li>
        <li>
          {/* Dodajemo dugme za otvaranje Ingredients modala */}
          <Button onClick={handleIngredientsOpen} startIcon={<CookIcon  />}>
            Sastojak
          </Button>
        </li>
      </ul>

      {/* Renderujemo Ingredients modal */}
      <Ingredients open={ingredientsOpen} onClose={handleIngredientsClose} />
    </nav>
  );
};

export default Navbar;
