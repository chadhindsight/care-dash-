import React from 'react';
import { Modal, Button } from 'antd';
import actions from '../services/index';
import { MDBBtn } from "mdbreact";
import { ReactComponent as Delivery } from '../assets/delivery.svg'

import {Link} from 'react-router-dom';

const Order = (props) => {

    const displayItems = props.cart.map(med => {
        return (
            <div><li key={med.uniqueID}><h2>{med.drugName}</h2></li>
                <p><strong>Rating: {med.rating}</strong></p>
                <Link to="/"><MDBBtn rounded color="danger">Remove</MDBBtn></Link>
            </div>
        )
    })

    return (
        <div>
            <Delivery style={{ position: 'relative', zIndex: '-1', marginBottom: '-5%', width: '50%', height: '50%' }} />
            <form>
                <ul>{displayItems}</ul>
                <MDBBtn className="default" style={{ position: 'relative', marginBottom: '55%'}}
                onClick={() => props.onOrderSubmit(props.cart) }>Place Order</MDBBtn>
            </form>
        </div>
    );
};

export default Order;