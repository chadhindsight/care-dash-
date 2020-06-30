import React from 'react';
import { Card} from 'antd';
import { ReactComponent as ProfilePic } from '../../assets/profile.svg'

// import actions from '../../services/index';

const Profile = (props) => {

    // const profileEditSubmit = async (e) => {
    //     e.preventDefault()
    //     // console.log("made it to submit", props.profile)
    //     let editedProfile = await actions.editProfile(props.profile)
    // }
    
    // // Meta let's you plug the user info into the antd Card
    // const { Meta } = Card;
      
    const showOrder = () => {
        return props?.profile?.order?.map(med => {
            return <li key={med.uniqueID}>
                <h3>{med.drugName}</h3>
                <p>Rating: {med.rating}</p>
                </li>
        })
    }

    return (
        <section className="profile">  
            <Card hoverable>
                
                <ProfilePic  style ={{ width: '12%', height: '2%'}}/>
                <h2>Welcome Back {props.profile.email}</h2>
                <ul>{showOrder()}</ul>
            </Card>
        </section>
    );
};

export default Profile;