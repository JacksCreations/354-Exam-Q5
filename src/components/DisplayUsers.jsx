import React from 'react';

const DisplayUsers = ({ users }) => {
  return (
    <div>
      <div>User list here</div>
      <div> {users.map((user) => user.user + '\n')}</div>
    </div>
  );
};

export default DisplayUsers;
