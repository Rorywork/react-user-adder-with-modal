import React from "react";

import User from './User'

const UsersList = (props) => {

    console.log(props);


  if (props.users.length === 0) {
    return <h2>Found no users.</h2>;
  }

  return (
    <ul>
      {props.users.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UsersList;
