import React from 'react';
import actions from '../../services/index';

const Profile = (props) => {
    console.log(props.profile)
    return (
        <>
           Profile 
            <h1>{props.profile.fullname}</h1>
            <h2>{props.profile.primaryPharmacy}</h2>
            <h3>{props.profile.conditions}</h3>
        </>
    );
};

export default Profile;