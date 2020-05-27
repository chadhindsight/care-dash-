import React, {useEffect} from 'react';

const ProductInfo = (props) =>{
    // Remove non-alphanumeric
    let editedReview
    props.currentProduct.review === undefined ? editedReview = ' ' : editedReview = props.currentProduct.review.replace(/[^0-9a-z]/gi, ' ')

    return (
        <div>
            <h2>{props.currentProduct.drugName}</h2>
            <p>Rating: {props.currentProduct.rating}</p>
            <p>For: {props.currentProduct.condition}</p>
            <p>Review: {editedReview}</p>
            <button onClick={props.addToCart}>Add To Cart</button>
        </div>
        );
    }
export default ProductInfo;