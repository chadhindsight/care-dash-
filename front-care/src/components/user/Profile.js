import React from 'react';
// import actions from '../../services/index';
// import { MDBBtn } from 'mdbreact';

const Profile = (props) => {

    // const profileEditSubmit = async (e) => {
    //     e.preventDefault()
    //     // console.log("made it to submit", props.profile)
    //     let editedProfile = await actions.editProfile(props.profile)
    // }

      
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
            <h2>Welcome Back {props.profile.email}</h2>
            <ul>{showOrder()}</ul>
        </>
    );
};

export default Profile;