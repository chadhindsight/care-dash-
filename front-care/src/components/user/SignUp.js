import React, { useState } from 'react';
import actions from '../../services/index';
import { Form, Input, Button, Checkbox } from 'antd';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import { ReactComponent as Signup } from '../../assets/signup.svg';
import { MDBAlert, MDBBtn } from 'mdbreact';


const SignUp = (props) => {
    // NB: Only call Hooks from React function components.
    // Don’t call Hooks from regular JavaScript functions
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')
    // const [primaryPharmacy, setPharmacy] = useState('')
    // const [conditions, setCondition] = useState('')

    const responseGoogle = async (response) => {
        console.log(response.profileObj);
        debugger
        let username = response.profileObj.email
        let googleId = response.profileObj.googleId
        let password = response.profileObj.googleId
        let fullname = response.profileObj.name

        await actions.signup({ username, googleId, password, fullname }).then(user => {
            props.setUser({ ...user.data })
            console.log(user.data)
            props.history.push("/profile")
        })
    }
    
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
                <input type="text" name="username" placeholder="username" onChange={e => setUserName(e.target.value)} />
                <input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <input type="text" name="fullname" placeholder="fullname" onChange={e => setFullName(e.target.value)} />
                {/* <input type="text" name="primaryPharmacy" placeholder="pharmacy" onChange={e => setPharmacy(e.target.value)} />
                <input type="text" placeholder="symptoms/conditions" onChange={e=> setCondition(e.target.value)}/> */}
                <MDBBtn color="default" onClick={handleSubmit}>Submit</MDBBtn>
            </form>
            {/* Change image */}
            <Signup style={{ position: 'relative', zIndex: '-1', marginTop: '-19.5%', width: '80%' }}/>
            {/* <GoogleLogin
                clientId="556929332950-si4a6sd3fktopq12klupsadi12l6sv1p.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            /> */}
        </>
    );
}

export default SignUp