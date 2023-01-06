import React from "react";

import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length === 0) {
    return <h2>Found no users.</h2>;
  }

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
