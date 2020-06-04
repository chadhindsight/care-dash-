import React from 'react';
import actions from '../../services/index';
import { MDBBtn } from 'mdbreact';

const Profile = (props) => {

    const profileSubmit = async (e) => {
        e.preventDefault()
        console.log("made it to submit", props.profile)
        let newProfile = await actions.editProfile(props.profile)

        console.log(newProfile)
    }

    
    const showOrder = () => {
        return props?.profile?.order?.map(med => {
            return <li key={med.uniqueID}>{med.drugName}</li>
        })
    }
    return (
        <>
            Profile
            <h1>{props.profile.email}</h1>
            <ul>{showOrder()}</ul>
            <form onSubmit={(e) => profileSubmit(e)}>
                <input placeholder="email" name="email" onBlur={props.handleBlur} onChange={props.handleChange} />
                <input placeholder="primary pharmacy" name="primaryPharm" onBlur={props.handleBlur} onChange={props.handleChange} />

                <MDBBtn color="secondary" onClick={profileSubmit}>Submit</MDBBtn>
            </form>
        </>
    );
};

export default Profile;