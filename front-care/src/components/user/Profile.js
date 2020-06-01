import React from 'react';
import actions from '../../services/index';
import { MDBBtn } from 'mdbreact';

const Profile = (props) => {
    console.log(props)
    // if(props.profile.email){
    //     props.history.push('/')
    // }
   const  profileSubmit = async (e) => {
        e.preventDefault()
        console.log("made it to submit", props.profile)
        let newProfile = await actions.editProfile(props.profile)

        console.log(newProfile)
    }

    return (
        <>
           Profile 
            <h1>{props.profile.email}</h1>
            <form onSubmit={(e)=>profileSubmit(e)}>
                <input placeholder="email" name="email" onBlur={props.handleBlur} onChange={ props.handleChange} /> 
                <input placeholder="primary pharmacy" name="primaryPharm" onBlur={props.handleBlur} onChange={props.handleChange} /> 
                
                <MDBBtn color="secondary" onClick={profileSubmit}>Submit</MDBBtn>
            </form>
        </>
    );
};

export default Profile;
// dayjs