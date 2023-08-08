import './App.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import DefaultBody from './DefaultBody';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Administrator from './Administrator';
import Cook from './Cook';
import User from './User';
import UnregisteredUser from './UnregisteredUser';
import Recipe from './Recipe';
import { Outlet } from 'react-router';
import { Switch } from '@mui/material';

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [isAdminVisible, setIsAdminVisible] = useState(false);
  const [isCookVisible, setIsCookVisible] = useState(false);
  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isUnregisteredUserVisible, setIsUnregisteredUserVisible] = useState(true);
  const [isRecipeVisible, setIsRecipeVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginVisible(true);
    setIsRegisterVisible(false);
    setIsAdminVisible(false);
    setIsCookVisible(false);
    setIsUserVisible(false);
    setIsUnregisteredUserVisible(false);
    setIsRecipeVisible(false);
  };

  const handleRegisterClick = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(true);
    setIsAdminVisible(false);
    setIsCookVisible(false);
    setIsUserVisible(false);
    setIsUnregisteredUserVisible(false);
    setIsRecipeVisible(false);
  };

  const handleHomeClick = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
    setIsAdminVisible(false);
    setIsCookVisible(false);
    setIsUserVisible(false);
    setIsUnregisteredUserVisible(true);
    setIsRecipeVisible(false);
  };

  const handleAdminClick = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
    setIsAdminVisible(true);
    setIsCookVisible(false);
    setIsUserVisible(false);
    setIsUnregisteredUserVisible(false);
    setIsRecipeVisible(false);
  };

  const handleCookClick = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
    setIsAdminVisible(false);
    setIsCookVisible(true);
    setIsUserVisible(false);
    setIsUnregisteredUserVisible(false);
    setIsRecipeVisible(false);
  };

  const handleUserClick = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
    setIsAdminVisible(false);
    setIsCookVisible(false);
    setIsUserVisible(true);
    setIsUnregisteredUserVisible(false);
    setIsRecipeVisible(false);
  };

  const handleUnregisteredUserClick = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
    setIsAdminVisible(false);
    setIsCookVisible(false);
    setIsUserVisible(false);
    setIsUnregisteredUserVisible(true);
    setIsRecipeVisible(false);
  };

  const handleRecipeClick = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(false);
    setIsAdminVisible(false);
    setIsCookVisible(false);
    setIsUserVisible(false);
    setIsUnregisteredUserVisible(false);
    setIsRecipeVisible(true);
  };

  return (
    <div>
    <div className="App">
      <header className="App-header">
        <div>
          <Navbar
            onLoginClick={handleLoginClick}
            onRegisterClick={handleRegisterClick}
            onHomeClick={handleHomeClick}
            onAdminClick={handleAdminClick}
            onCookClick={handleCookClick}
            onUserClick={handleUserClick}
            onUnregisteredUserClick={handleUnregisteredUserClick}
            onRecipeClick={handleRecipeClick}
          />
        <Outlet></Outlet>

        </div>
        <div>
          {isLoginVisible ? (
            <LoginForm onHomeClick={handleHomeClick} />
          ) : isRegisterVisible ? (
            <RegisterForm onHomeClick={handleHomeClick} />
          ) : isAdminVisible ? (
            <Administrator />
          ) : isCookVisible ? (
            <Cook onHomeClick={handleHomeClick} />
          ) : isUserVisible ? (
            <User onHomeClick={handleHomeClick} />
          ) : isUnregisteredUserVisible ? (
            <UnregisteredUser onHomeClick={handleHomeClick} />
          ) : isRecipeVisible ? (
            <Recipe />
          ) : (
            <DefaultBody />
          )}
        </div>
      </header>
    </div>
    </div>
  );
}

export default App
