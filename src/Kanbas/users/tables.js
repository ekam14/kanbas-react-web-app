import React, { useState, useEffect } from "react";
import * as client from "./client";
import {Link} from "react-router-dom";

function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ _id: 1, username: "", password: "", role: "USER" });

    const createUser = async () => {
        try {
            if(user.username.trim() === ""
               || user.password.trim() === "") {
                return;
            }

            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };

    const updateUser = async () => {
        try {
            const response = await client.updateUser(user);
            if(response.status !== 400) {
                setUsers(users.map((u) => (u._id === user._id ? user : u)));
            }
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        await client.deleteUser(user);
        setUsers(users.filter((u) => (u._id !== user._id)));
    }

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        const newId = users.length + 1001;
        setUser({...user, _id: newId})
        setUsers(users);
    };

    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <tr>
                    <td>
                        <input placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                        <input placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                    </td>
                    <td>
                        <input placeholder="Firstname" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
                    </td>
                    <td>
                        <input placeholder="Lastname" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
                    </td>
                    <td>
                        <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </td>
                    <td className="text-nowrap">
                        <button className="btn btn-primary" onClick={createUser}>
                            Create User
                        </button>
                        <button className="btn btn-success" onClick={updateUser}>
                            Update
                        </button>
                    </td>
                </tr>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>
                            <Link to={`/project/account/${user._id}`}>
                                {user.username}
                            </Link>
                        </td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <button className="btn btn-warning me-2" onClick={() => setUser(user)}>
                            Edit user
                        </button>
                        <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                            Delete user
                        </button>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;