import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import DisplayUsers from './components/DisplayUsers';

// don't forget to add your components here

const App = () => {
  const [users, setUsers] = useState([
    {
      user: 'JackLohmar',
    },
    {
      user: 'DonaldDuck',
    },
  ]);

  const addUser = async (user) => {
    setUsers([...users, user]);
    users.push(user);
    console.log(users);
  };

  return (
    <div className="container">
      <LoginForm addUser={addUser} />
      <br />
      <DisplayUsers users={users} />
    </div>
  );
};

export default App;
