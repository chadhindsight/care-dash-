import React, {useEffect} from 'react';
import actions from '../../services/index';
import { MDBBtn } from 'mdbreact';

const Profile = (props) => {
    
   const  profileSubmit = async (e) => {
        e.preventDefault()
        console.log("made it to submit", props.profile)
        let newProfile = await actions.editProfile(props.profile)

        console.log(newProfile)
    }
   
    useEffect(() =>{
          return async () => {
            let order = await props.profile.order
            console.log(props)
        }
    })

    return (
        <>
           Profile 
            <h1>{props.profile.email}</h1>
                {/* <ul>{showOrder()}</ul> */}
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