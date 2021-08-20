import React from 'react';
import { useState } from 'react';

function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function login(){

    }
    return(
        <div>
            <h3>Login</h3>
            
            <p>UserName</p>
            <div>
                <input className="form-control" value={userName} 
                                onChange={(evt) =>setUserName(evt.target.value)}/>
            </div>
            <p>Password</p>
            <div>
                <input className="form-control" type="password" value={password} 
                                onChange={(evt) =>setPassword(evt.target.value)}/>
            </div>
            <br/>
            <button className="btn btn-success" onClick={login}>Login</button>
        </div>
    )
}

export default Login;