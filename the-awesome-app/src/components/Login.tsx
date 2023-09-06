import { useState } from "react";
import Alert from "./Alert";
import axios from 'axios';

function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function login(){
        console.log(`username: ${userName}, pwd: ${password}`);
        if(userName && password){

            try {
                
                const url = "http://localhost:9000/login";
                const response = await axios.post(url, {name: userName, password: password});
                setErrorMessage("");

            } catch (error) {
                
                setErrorMessage("Invalid credentials");

            }


        }
        else{
            setErrorMessage("Please enter the credentials");
        }
    }

    return (
        <div>
            <h4>Login</h4>
            <br/>
            {errorMessage? <Alert message={errorMessage} severity="error"/> : null}
            <br/>

            <div className="form-group">
                <label>UserName</label>
                <input className="form-control" value={userName} onChange={evt => setUserName(evt.target.value)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} 
                                                            onChange={evt => setPassword(evt.target.value)}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login;