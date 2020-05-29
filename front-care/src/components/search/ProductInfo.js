import React, {useEffect} from 'react';
import { Card } from 'antd';
import { faCapsules } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProductInfo = (props) =>{
    // Remove non-alphanumeric
    let editedReview
    props.currentProduct.review === undefined ? editedReview = ' ' : editedReview = props.currentProduct.review.replace(/[^0-9a-z]/gi, ' ')

    return (
        <div>
            <Card id="product-card" style={{ width: 300 }}>
                <FontAwesomeIcon icon={faCapsules} size="4x" />
                <h2>{props.currentProduct.drugName}</h2>
                <p><strong>Rating:</strong> {props.currentProduct.rating}</p>
                <p><strong>For:</strong> {props.currentProduct.condition}</p>
                <p><strong>Review:</strong> {editedReview}</p>
                <button onClick={() => props.addToCart(props.currentProduct)}>Add To Cart</button>
            </Card> 
        </div>
        );
    }
export default ProductInfo;