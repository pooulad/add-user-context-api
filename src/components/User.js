import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./User.css";

const User = ({user}) => {
    const {dispatchUserEvent} = useContext(UserContext);

    const deleteHandler = () => {
        dispatchUserEvent("DeleteUser",{userId : user.id});
    } 
    return(
        <div className="user">
            <div><span className="idSpan">ID</span> : {user.id}</div>
            <div>Name : {user.name}</div>
            <div>Age : {user.age}</div>
            <div>Bio : {user.bio}</div>
            <button className="deleteBtn" onClick={deleteHandler}>Delete</button>
        </div>
    )
}
export default User