import React from 'react';
import actions from '../../services/index';
import { MDBBtn } from 'mdbreact';

const Profile = (props) => {

    const profileEditSubmit = async (e) => {
        e.preventDefault()
        console.log("made it to submit", props.profile)
        let newProfile = await actions.editProfile(props.profile)

        console.log(newProfile)
    }

    console.log(props.profile.order)    
    const showOrder = () => {
        return props?.profile?.order?.map(med => {
            return <li key={med.uniqueID}>
                <h3>{med.drugName}</h3>
                <p>Rating: {med.rating}</p>
                </li>
        })
    }
    return (
        <>
            <h1>{props.profile.email}</h1>
            <ul>{showOrder()}</ul>
            <form onSubmit={(e) => profileEditSubmit(e)}>
                <input placeholder="email" name="email" onBlur={props.handleBlur} onChange={props.handleChange} />
                <input placeholder="primary pharmacy" name="primaryPharm" onBlur={props.handleBlur} onChange={props.handleChange} />

                <MDBBtn color="indigo" onClick={profileEditSubmit}>Submit</MDBBtn>
            </form>
        </>
    );
};

export default Profile;