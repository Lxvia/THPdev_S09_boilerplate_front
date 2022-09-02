import { useAtom } from "jotai";
import React from "react";
import { NavLink } from "react-router-dom";
import { loggedAtom } from "../services/atoms/user";
import APIManager from '../services/Api';


const Navigation = () => {
  
  const [logged, setLogged ] = useAtom(loggedAtom);

    let activeStyle = {
        textDecoration: "underline",
    };

    const logout = async (e) => {
        e.preventDefault();
        await APIManager.logoutUser();
        setLogged(false);
    }

    return (
        <div>
          <h1>My Website</h1>
            <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to='/'>
                Home
            </NavLink>

            {
                logged ? <button onClick = {logout}>Logout</button> :
                <>
                    <NavLink
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        to='/signup'>
                        Signup
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                        to='/login'>
                        Login
                    </NavLink>
                </>
            }

        </div>
    );
}

export default Navigation;