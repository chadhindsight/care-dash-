import React from 'react';

// DO A GET HERE
const Profile = (props) => {
    console.log(props.profile)
    return (
        <>
           Profile 
            <h1>{props.profile.email}</h1>
        </>
    );
};

export default Profile;