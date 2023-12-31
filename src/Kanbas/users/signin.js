import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const signin = async () => {
        await client.signin(credentials);
        navigate("/project/account");
    };
    return (
        <div>
            <h2>Signin</h2>
            <input className="form-control" placeholder="Enter username"
                value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <input className="my-2 form-control" placeholder="Enter password"
                value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button className="btn btn-primary" onClick={signin}> Signin </button>
        </div>
    );
}
export default Signin;