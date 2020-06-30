import React from 'react';
import { Card} from 'antd';
import { ReactComponent as ProfilePic } from '../../assets/profile.svg';
import { EditOutlined} from '@ant-design/icons';
// import actions from '../../services/index';

// import actions from '../../services/index';

const Profile = (props) => {

    const editProfile = async (e) => {
        // e.preventDefault()
        // console.log("made it to submit", props.profile)
        // let editedProfile = await actions.editProfile(props.profile)
        console.log('Edit Profile!')
    }
    
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
            <Card hoverable
                actions={[
                <EditOutlined key="edit" onClick={editProfile}/>,
                ]}
                extra='Your Profile'
            >
                
                <ProfilePic  style ={{ width: '12%', height: '2%'}}/>
                <h2>Welcome Back {props.profile.email}</h2>
                <ul>{showOrder()}</ul>
            </Card>
        </section>
    );
};

export default Profile;