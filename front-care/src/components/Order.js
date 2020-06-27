import React from 'react';
// import actions from '../services/index';
import { MDBBtn } from "mdbreact";
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

    return (
        <section className="order-section">
            <DeliveryPic style={{ position: 'relative', zIndex: '-1', marginBottom: '-8%', width: '50%', height: '50%' }} 
                className="background-pic" />
            <form>
                <ul>{displayItems}</ul>
                <MDBBtn color="indigo" style={{ position: 'relative'}}
                onClick={() => props.onOrderSubmit(props.cart) }>Place Order</MDBBtn>
            </form>
        </section>
    );
};

export default Order;