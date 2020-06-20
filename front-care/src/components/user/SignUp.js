import React, { useState } from 'react';
import actions from '../../services/index';
import { ReactComponent as Signup } from '../../assets/signup.svg';
import { MDBBtn } from 'mdbreact';


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
                <input type="text" name="username" placeholder="username" onChange={e => setUserName(e.target.value)} />
                <input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <input type="text" name="fullname" placeholder="fullname" onChange={e => setFullName(e.target.value)} />
                {/* <input type="text" name="primaryPharmacy" placeholder="pharmacy" onChange={e => setPharmacy(e.target.value)} />
                <input type="text" placeholder="symptoms/conditions" onChange={e=> setCondition(e.target.value)}/> */}
                <MDBBtn color="indigo" onClick={handleSubmit}>Submit</MDBBtn>
            </form>
            {/* Change image */}
            <Signup style={{ position: 'relative', zIndex: '-1', marginTop: '-19.5%', width: '70%' }}/>
        </>
    );
}

export default SignUp