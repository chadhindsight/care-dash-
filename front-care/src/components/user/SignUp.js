import React, { useState } from 'react';
import actions from '../../services/index';
import { ReactComponent as Signup } from '../../assets/signup.svg';
import {MDBRow, MDBInput, MDBBtn } from 'mdbreact';


const SignUp = (props) => {
    // NB: Only call Hooks from React function components.
    // Don’t call Hooks from regular JavaScript functions
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')
    // const [primaryPharmacy, setPharmacy] = useState('')
    // const [conditions, setCondition] = useState('')
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInformation = { email: username, fullname, password }
        console.log(userInformation)
        await actions.signup(userInformation).then(user => {
            props.setUser({ ...user.data })
            console.log(user.data)
            props.history.push("/profile")
        }).catch(err => console.log('bad juju!'))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section style={{ width: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <MDBInput label="Username/Email" size="lg" onChange={e => setUserName(e.target.value)}/>
                    <MDBInput label="Password"  size="lg" onChange={e => setPassword(e.target.value)}/>
                    <MDBInput label="Full Name" size="lg" onChange={e => setFullName(e.target.value)}/>
                    <MDBRow style={{ justifyContent: 'center' }}>
                        <MDBBtn color="indigo" onClick={handleSubmit}>Submit</MDBBtn>
                    </MDBRow>
                </section>
            </form>

            <Signup style={{position: 'relative', zIndex: '-1', width: '45%', height: '35%' }}
            className="background-pic"/>
        </>
    );
}

export default SignUp