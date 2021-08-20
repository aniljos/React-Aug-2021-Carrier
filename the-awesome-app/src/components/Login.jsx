import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import axios from "axios";
import {useDispatch} from 'react-redux';

function Login(props){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function login(){

        const url = process.env.REACT_APP_LOGIN_URL;
        try {
            
            const resp = await axios.post(url, {name: userName, password: password});
            dispatch({type: "SET_AUTH", 
                            data: {isAuth: true, userName: userName, accessKey: resp.data.accessToken}});
            props.history.push("/gadgets");

        } catch (error) {
            
            dispatch({type: "SET_AUTH", 
                            data: {isAuth: false, userName: "", accessKey: ""}});
            alert("Invalid Credential");
        }

    }
    return(
        <div>
            <h3>Login</h3>
            
            <p>UserName</p>
            <div>
                <input   className="form-control" value={userName} 
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