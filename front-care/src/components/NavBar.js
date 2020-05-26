import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import actions from '../services/index';

const NavBar = (props) => {
    const logOut = async () => {
        let res = await actions.logout()
        props.userSet({ email: null, createdAt: null, updatedAt: null, _id: null }) //FIX 
        return <Redirect to='/target' />         
    }

    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/" onClick={logOut}>Logout</Link>
        </>
    );
};

export default NavBar;