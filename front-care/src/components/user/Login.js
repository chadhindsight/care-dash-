import React, { useState } from 'react';
import actions from '../../services/index';

const Login = (props) => {
    // REACT HOOKS HERE!
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logInHandler = async e => {
        e.preventDefault()
        console.log(email, password)
        await actions.login({ email, password }).then(user => {
            console.log(user, 'line 12')
            props.setUser({ ...user.data })
            props.history.push("/profile")
        }).catch((err) => console.log(err));
    }
console.log(email, password)

    return (
        <>
            <form onSubmit={logInHandler}>
                <input type="text" name="email" placeholder="username" onChange={e => setEmail(e.target.value)} />
                <input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <input type="submit" />
            </form>

            <a className="btn btn-block btn-social btn-google" href="/auth/google" role="button">
                <i className="fab fa-google"></i>
            Login with Google
          </a>
        </>
    );
};

export default Login;