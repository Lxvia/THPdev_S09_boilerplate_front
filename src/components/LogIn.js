import React, { useState } from "react";
import { useSetAtom } from "jotai";
import { loggedAtom } from "../services/atoms/user";
import { Link } from "react-router-dom";


import APIManager from '../services/Api';
import { currentUserAtom } from "../services/atoms/currentUser";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logged = useSetAtom(loggedAtom);
    const userID = useSetAtom(currentUserAtom);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await APIManager.loginUser(email, password);
        logged(true);
        userID(JSON.stringify(response.user));
        
    };

    return (
        <form onSubmit={handleSubmit}>
            Email<input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            Password<input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
            <Link to= "/users/password">Mot de passe oublié</Link>
        </form>
    );
}


export default Login;