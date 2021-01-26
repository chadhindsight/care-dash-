<<<<<<< HEAD
import React from 'react';
import { Modal, Button } from 'antd';
import actions from '../services/index';
import { MDBBtn } from "mdbreact";
import { ReactComponent as Delivery } from '../assets/delivery.svg'

import {Link} from 'react-router-dom';
=======
import React, { useState } from 'react';
// import actions from '../services/index';
import { MDBBtn, MDBAlert } from "mdbreact";
import { ReactComponent as DeliveryPic } from '../assets/delivery.svg'
>>>>>>> c2be9b040ee544f2fa775e00d565899102dc9eb9

const Order = (props) => { 
    // Piece of state that changes when user places an order 
    const [show, setShow] = useState(false)

    function onOrderSubmit() {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000);
    }

    const displayItems = props.cart.map(med => {
        return (
            <><li key={med.uniqueID}><h2>{med.drugName}</h2></li>
                <h3><strong>Rating: {med.rating}</strong></h3>
                <h4>Order total: ${Math.round(Math.random() * 20)}.00</h4>
                <MDBBtn rounded color="danger" onClick={props.removeFromCart}>Remove</MDBBtn>
            </>
        )
    })

    return (
<<<<<<< HEAD
        <div>
            <Delivery style={{ position: 'relative', zIndex: '-1', marginBottom: '-5%', width: '50%', height: '50%' }} />
            <form>
                <ul>{displayItems}</ul>
                <MDBBtn className="default" style={{ position: 'relative', marginBottom: '55%'}}
                onClick={() => props.onOrderSubmit(props.cart) }>Place Order</MDBBtn>
            </form>
        </div>
=======
        <section className="order-section">
            <DeliveryPic style={{ position: 'relative', marginTop: '4%', width: '68%', height: '68%' }}
                className="background-pic" />

            {show? <div style={{ width: '300px', position: 'relative', textAlign: 'center', margin: '0 40%', zIndex: '3' }}>
                <MDBAlert color="success">Thank you for your order!</MDBAlert></div> : '' }
            
            {props.cart.length === 0 ? <p>Items added to your cart will be show here</p> : ''}
            
            <ul>{displayItems}</ul>
            <MDBBtn color="indigo" style={{ position: 'relative' }}
                onClick={() => onOrderSubmit()}>Place Order</MDBBtn>
        </section>
>>>>>>> c2be9b040ee544f2fa775e00d565899102dc9eb9
    );
};

export default Order;