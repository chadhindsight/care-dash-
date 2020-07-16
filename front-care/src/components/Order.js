import React from 'react';
// import actions from '../services/index';
import { MDBBtn, MDBAlert } from "mdbreact";
import { ReactComponent as DeliveryPic } from '../assets/delivery.svg'

const Order = (props) => {    
    const displayItems = props.cart.map(med => {
        return (
            <><li key={med.uniqueID}><h2>{med.drugName}</h2></li>
                <h3><strong>Rating: {med.rating}</strong></h3>
                <h4>Order total: ${Math.round(Math.random() * 20)}.00</h4>
                <MDBBtn rounded color="danger" onClick={props.removeFromCart}>Remove</MDBBtn>
            </>
        )
    })
    console.log(props.show)
    return (
        <section className="order-section">
            <DeliveryPic style={{ position: 'relative', marginTop: '4%', width: '68%', height: '68%' }}
                className="background-pic" />

            {props.show === true ? <div style={{ width: '300px', position: 'relative', textAlign: 'center', margin: '0 40%', zIndex: '3' }}>
                <MDBAlert color="success">Thank you for your order!</MDBAlert></div> : <p>Items added to your cart will be show here</p>}

            <ul>{displayItems}</ul>
            <MDBBtn color="indigo" style={{ position: 'relative' }}
                onClick={() => props.onOrderSubmit()}>Place Order</MDBBtn>
        </section>
    );
};

export default Order;