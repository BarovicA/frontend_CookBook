import React from 'react';
import logo from './logo.jpg';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Administrator from './Administrator';

const DefaultBody = ({
  handleLoginClick,
  handleRegisterClick,
  handleHomeClick,
  handleAdminClick,
  isLoginVisible,
  isRegisterVisible,
  isAdminVisible,
}) => {
  return (
    <div>
      {}
      <Navbar
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onHomeClick={handleHomeClick}
        onAdminClick={handleAdminClick}
      />

      {isLoginVisible ? (
        <LoginForm />
      ) : isRegisterVisible ? (
        <RegisterForm />
      ) : isAdminVisible ? (
        <Administrator />
      ) : null}
    </div>
  );
};

export default DefaultBody;
