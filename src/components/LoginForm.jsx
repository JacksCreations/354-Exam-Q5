import React, { useState } from 'react';

const LoginForm = ({ addUser }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleUserChange(event) {
    //console.log('user: ', event.target.value);
    setUser(event.target.value);
  }
  function handlePasswordChange(event) {
    //console.log('password: ', event.target.value);
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    //alert('Login form submitted: ' + user + ' ' + password);
    event.preventDefault();
    addUser({ user });
  }

  return (
    <div className="row p-2">
      <form onSubmit={handleSubmit}>
        <div>
          <label>User:&nbsp;</label>
          <input className="m-1" user={user} onChange={handleUserChange} />
          <br />
          <label>Password:&nbsp;</label>
          <input
            className="m-1"
            password={password}
            onChange={handlePasswordChange}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
