import React, {useState} from 'react';
import { Card } from 'antd';
import { faCapsules } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  MDBAlert, MDBBtn } from 'mdbreact';

const ProductInfo = (props) =>{
    const [show, setShow] = useState(false)
    
    function onAdd () {
        props.addToCart(props.currentProduct)
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 2000);
        console.log(props.currentProduct)
    }
    // Remove non-alphanumeric
    let editedReview
    props.currentProduct.review === undefined ? editedReview = ' ' : editedReview = props.currentProduct.review.replace(/[^0-9a-z]/gi, ' ')
    console.log(show)
    return (
        <div>
            {show ? <div style={{ width: '300px', position: 'relative', textAlign: 'center', margin: '0 40%', zIndex: '3' }}>
                <MDBAlert  color="success">Added to cart</MDBAlert></div> : ''}
            <Card id="product-card" style={{ width: 300 }}>
                <FontAwesomeIcon icon={faCapsules} size="4x" />
                <h2>{props.currentProduct.drugName}</h2>
                <p><strong>Rating:</strong> {props.currentProduct.rating}</p>
                <p><strong>For:</strong> {props.currentProduct.condition}</p>
                <p><strong>Review:</strong> {editedReview}</p>
                <MDBBtn className="success" onClick={() => onAdd()}>Add To Cart</MDBBtn>
            </Card> 
        </div>
        );
    }
export default ProductInfo;