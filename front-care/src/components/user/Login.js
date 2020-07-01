import React, { useState } from 'react';
import actions from '../../services/index';
import { MDBBtn} from 'mdbreact';
import {Link} from 'react-router-dom';
import { Card } from 'antd';
import { ReactComponent as Signin } from '../../assets/signin.svg'

const Login = (props) => {
    // REACT HOOKS HERE!
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logInHandler = async e => {
        e.preventDefault()
        console.log(email, password)
        await actions.login({ email, password }).then(user => {
            console.log(user, 'line 16')
            props.setUser({ ...user.data })
            props.history.push("/profile")
        }).catch((err) => console.log(err));
    }

    return (
        <form>
            <Card onSubmit={logInHandler} hoverable className="log-card">
                <input type="text" name="email" placeholder="username" onChange={e => setEmail(e.target.value)}
                className="login-input"/>
                <input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}
                className="login-input"/>

                <Link to="/profile"><MDBBtn color="secondary"  className="login100-Form-btn"
                onClick={logInHandler}>Submit</MDBBtn></Link>
                {/* <Signin style={{ width: '40%'}}
                    className="background-pic-login"/> */}
            </Card>
        </form>
    );
};

{/* <input className="input100" type="text" name="email" placeholder="username" onChange={e => setEmail(e.target.value)} />
    <input className="input100" type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} /> */}

export default Login;