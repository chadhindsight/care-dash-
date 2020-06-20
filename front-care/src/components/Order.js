import React from 'react';
// import actions from '../services/index';
import { MDBBtn } from "mdbreact";
import { ReactComponent as DeliveryPic } from '../assets/delivery.svg'

const Order = (props) => {

    const displayItems = props.cart.map(med => {
        return (
            <div><li key={med.uniqueID}><h2>{med.drugName}</h2></li>
                <p><strong>Rating: {med.rating}</strong></p>
                <MDBBtn rounded color="danger" onClick={props.removeFromCart}>Remove</MDBBtn>
            </div>
        )
    })

    return (
        <div>
            <DeliveryPic style={{ position: 'relative', zIndex: '-1', marginBottom: '-5%', width: '50%', height: '50%' }} 
                className="background-pic" />
            <form>
                <ul>{displayItems}</ul>
                <MDBBtn color="indigo" style={{ position: 'relative', marginBottom: '55%'}}
                onClick={() => props.onOrderSubmit(props.cart) }>Place Order</MDBBtn>
            </form>
        </div>
    );
};

export default Order;