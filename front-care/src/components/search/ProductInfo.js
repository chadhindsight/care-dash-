import React, {useEffect} from 'react';

const ProductInfo = (props) =>{
    // Remove non-alphanumeric
    let editedReview
    props.currentProduct.review === undefined ? editedReview = ' ' : editedReview = props.currentProduct.review.replace(/[^0-9a-z]/gi, ' ')

    return (
        <div>
            <h2>{props.currentProduct.drugName}</h2>
            <p><strong>Rating:</strong> {props.currentProduct.rating}</p>
            <p><strong>For:</strong> {props.currentProduct.condition}</p>
            <p><strong>Review:</strong> {editedReview}</p>
            <button onClick={() => props.addToCart(props.currentProduct)}>Add To Cart</button>
        </div>
        );
    }
export default ProductInfo;