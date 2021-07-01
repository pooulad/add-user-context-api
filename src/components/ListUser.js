import React, { useContext } from 'react';
import {UserContext} from "./UserContext";
import User from "./User";

const ListUser = () => {
    const {users} = useContext(UserContext);
    return (
        <div className="listUser"> 
            <h1>All Users</h1>
            {users.map(user => <User key={user.id} user={user} />)}
        </div>
    )
}

export default ListUser
