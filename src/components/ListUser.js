import React, { useContext } from 'react';
import { UserContext } from "./UserContext";
import User from "./User";
import "./ListUser.css";

const ListUser = () => {
    const { users } = useContext(UserContext);
    return (
        <div className="listUser">
            <h1>All Users</h1>
            <div className="allUsers">
                {users.map(user => <User key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default ListUser
