import React, { useState } from 'react';
import './App.css';
import { UserContext } from "./components/UserContext";
import AddUser from "./components/AddUser";
import ListUser from "./components/ListUser";

function App() {
  const [users, setUsers] = useState([]);

  const dispatchUserEvent = (action, data) => {
    switch (action) {
      case "AddUser":
        setUsers([...users, data.newUser]);
        return;
      case "DeleteUser":
        setUsers(users.filter(user => user.id !== data.userId));
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ users,dispatchUserEvent  }}>
        <AddUser />
        <ListUser />
      </UserContext.Provider>
    </div>
  )
}

export default App
