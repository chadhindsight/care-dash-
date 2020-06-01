import React from 'react';
import { Modal, Button } from 'antd';
import actions from '../services/index';
import { MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom';

const Order = (props) => {

    const displayItems = props.cart.map(med => {
        return (
            <div><li key={med.uniqueID}><h2>{med.drugName}</h2></li>
                <p><strong>Rating: {med.rating}</strong></p>
                <Link to="/"><MDBBtn rounded color="danger" >Danger</MDBBtn></Link>
            </div>
        )
    })

    return (
        <div>
            <form>
                <ul>{displayItems}</ul>
                <MDBBtn className="default" onClick={() => props.onOrderSubmit(props.cart) }>Place Order</MDBBtn>
            </form>
        </div>
    );
};

export default Order;