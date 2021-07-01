import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "./AddUser.css";

const AddUser = () => {
    const { dispatchUserEvent } = useContext(UserContext);

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [age, setAge] = useState("");

    const addHandler = (e) => {
        const user = { id: Math.random(), name, bio, age }
        dispatchUserEvent("AddUser", { newUser: user });
        e.preventDefault();
        setName("");
        setBio("");
        setAge("");
    }
    return (
        <div className="add_user">
            <form onSubmit={addHandler}>
                <h1>Add user</h1>
                <input className="input" type="text" placeholder="name" onChange={e => setName(e.target.value)} value={name} required />
                <input className="input" type="number" placeholder="age" onChange={e => setAge(e.target.value)} value={age} required />
                <textarea className="input" type="text" placeholder="bio" onChange={e => setBio(e.target.value)} value={bio} >{bio}</textarea>
                <button type="submit"  className="addBtn">Add User</button>
            </form>
        </div>
    )
}

export default AddUser
