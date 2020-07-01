import React, { useState } from 'react';
import actions from '../../services/index';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

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
        <MDBContainer >
            <MDBRow>
                <MDBCol>
                    <form onSubmit={logInHandler} >
                        <div className="grey-text" style={{ width: '70%' }}>
                            <MDBInput label="Type your email" group type="email" validate error="wrong"
                                success="right" onChange={e => setEmail(e.target.value)}/>
                            <MDBInput label="Type your password" group type="password" validate onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
            <MDBRow style={{ justifyContent: 'center' }}>
                <MDBBtn onClick={logInHandler}>Login</MDBBtn>
            </MDBRow>
        </MDBContainer>
    );
};

export default Login;