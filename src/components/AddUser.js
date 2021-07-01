import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";


const AddUser = ({user}) => {
    const {dispatchUserEvent} = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [age, setAge] = useState("");

    const addHandler = () => {
        const user = {id:Math.random(),name,bio,age,email}
        dispatchUserEvent("AddUser",{newUser:user});
    } 
    return(
        <div className="user">
            <input type="text" value={name} onChange={e => {setName(e.target.value)}} placeholder="name"/>
            <input type="email" value={email} onChange={e => {setEmail(e.target.value)}} placeholder="email"/>
            <input type="number" value={age} onChange={e => {setAge(e.target.value)}} placeholder="age"/>
            <input type="text" value={bio} onChange={e => {setBio(e.target.value)}} placeholder="bio"/>
            <button onClick={addHandler}>Add User</button>
        </div>
    )
}

export default AddUser