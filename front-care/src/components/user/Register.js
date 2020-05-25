import React, { useState } from 'react';
import {Redirect } from 'react-router-dom';
import actions from '../../services/index';

const Register = (props) => {
    // NB: Only call Hooks from React function components.
    // Don’t call Hooks from regular JavaScript functions
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')
    const [primaryPharmacy, setPharmacy] = useState('')
    const [conditions, setCondition] = useState([])

    const renderRedirect = () => <Redirect to='/profile' />

// Handle submit passes the registration info to the related action and then that info  gets passed to backend DB
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInformation = {username, password, fullname, primaryPharmacy, conditions}
        await actions.register(userInformation).then(user => {
            props.setUser({ ...user.data })
            renderRedirect()
        }).catch(err=> console.log('bad juju!'))
    }
    console.log(username, 'username here')
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" onChange={e => setUserName(e.target.value)} />
                <input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <input type="text" name="fullname" placeholder="fullname" onChange={e => setFullName(e.target.value)} />
                <input type="text" name="primaryPharmacy" placeholder="pharmacy" onChange={e => setPharmacy(e.target.value)} />
                <input type="text" placeholder="symptoms/conditions"/>
                <input type="submit"/>
            </form>

            <a className="" href="/auth/google" role="button">
                <i className="fab fa-google"></i>
                    Sign Up with Google
                </a>
        </>
    );
}

export default Register;
