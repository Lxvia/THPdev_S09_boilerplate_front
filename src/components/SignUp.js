import { useSetAtom } from 'jotai';
import React, { useState } from 'react';
import { currentUserAtom } from '../services/atoms/currentUser';
import { loggedAtom } from '../services/atoms/user';
import APIManager from '../services/Api';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userID = useSetAtom(currentUserAtom);
    const logged = useSetAtom(loggedAtom);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await APIManager.registerUser(email, password);
        logged(true);
        userID(JSON.stringify(response.user));
    };

    return (
        <form onSubmit={handleSubmit}>
            Email<input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            Password<input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Signup;