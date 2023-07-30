import React from 'react';

const UnregisteredUser = ({ onHomeClick }) => {
  return (
    <div>
      <h2>Unregistered User Panel</h2>
      {}
      <button onClick={onHomeClick}>Home</button>
      <button>Register</button>
      <button>Login</button>
    </div>
  );
};

export default UnregisteredUser;
