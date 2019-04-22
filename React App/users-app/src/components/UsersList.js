import React from "react";

const UsersList = props => {
  return (
    <div className="UsersList-container">
      <h1>List of Users:</h1>
      {props.users.map(user => (
        <div key={user.id}>
          <h3 >{user.name}</h3>
          <p>{user.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
