import React, { useContext } from "react";
import { UserContext } from "./UserContext";


const AddUser = ({user}) => {
    const {dispatchUserEvent} = useContext(UserContext);

    const deleteHandler = () => {
        dispatchUserEvent("DeleteUser",{userId : user.id});
    } 
    return(
        <div className="user">
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>
            <div>{user.bio}</div>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    )
}

export default AddUser