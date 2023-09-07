import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTitle } from "./useTitle";
import axios from "axios";
import { AuthState } from "../redux/authReducer";

export const useLogin = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useTitle("Login");

    async function login(){
        console.log(`username: ${userName}, pwd: ${password}`);
        if(userName && password){

            try {
                
                const url = "http://localhost:9000/login";
                const response = await axios.post(url, {name: userName, password: password});
                const accessToken = response.data.accessToken;
                const refreshToken = response.data.refreshToken;

                const updateState: AuthState = {
                    isAuthenticated: true,
                    userName,
                    accessToken,
                    refreshToken
                }
                dispatch({type: "UPDATE_AUTH", payload: updateState});

                setErrorMessage("");
                navigate("/products");

            } catch (error) {
                
                setErrorMessage("Invalid credentials");

            }


        }
        else{
            setErrorMessage("Please enter the credentials");
        }
    }

    return [userName, setUserName, password, setPassword, errorMessage, setErrorMessage, login] as const;

}