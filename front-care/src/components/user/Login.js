import React, { useState } from 'react';
import actions from '../../services/index';
import { MDBRow, MDBInput, MDBBtn } from 'mdbreact';

const Login = (props) => {
    // REACT HOOKS
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logInHandler = async e => {
        e.preventDefault()
        console.log(email, password)
        await actions.login({ email, password }).then(user => {
            props.setUser({ ...user.data })
            props.history.push("/profile")
        }).catch((err) => console.log(err));
    }

    return (
        <form onSubmit={logInHandler} >
            <section className="grey-text" style={{ width: '60%', display: 'flex', flexDirection: 'column' }}>
                <MDBInput label="Please enter your email" size="lg" group type="email" validate error="wrong"
                    success="right" onChange={e => setEmail(e.target.value)} />
                <MDBInput label="Please enter your password" size="lg" group type="password" validate onChange={e => setPassword(e.target.value)} />
                <MDBRow style={{ justifyContent: 'center' }}>
                    <MDBBtn color="indigo" onClick={logInHandler}>Login</MDBBtn>
                </MDBRow>
            </section>
        </form>
    );
};

export default Login;