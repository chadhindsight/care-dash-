import React, { useState } from 'react';
import actions from '../../services/index';

const Login = (props) => {
    // REACT HOOKS HERE!
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const logInHandler = async e => {
        e.preventDefault()
        await actions.login({ username: username, password: password }).then(user => {
            props.setUser({ ...user.data }) 
            props.history.push("/profile")

        }).catch(({ response }) => console.error(response.data));
    }
   
    return (
        <>
            <form onSubmit={logInHandler}>
                <input type="text" name="username" placeholder="username" onChange={e => setUserName(e.target.value)} />
                <input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <input type="submit"/>
            </form>
            
            <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                <i className="fab fa-google"></i>
            Login with Google
          </a>
        </>
    );
};

export default Login;