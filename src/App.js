import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const USER_LIST = [];

function App() {

  const [users, setUsers] = useState(USER_LIST);

  const addUserToUserList = (name, age) => {

    const user = {
      name,
      age,
      id: Math.random().toString()
    }

    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser addUserToUserList={addUserToUserList}  />
      <UsersList users={users} />
    </div>
  );
}

export default App;
