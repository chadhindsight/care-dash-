import React from 'react';

const ProductInfo = (props) => {
    return (
        <div>
            <h2>{props.currentProduct.drugName}</h2>
            <p>Rating: {props.currentProduct.rating}</p>
            <p>This treats: {props.currentProduct.condition}</p>
            <button onClick={props.addToCart}>Add To Cart</button>
        </div>
    );
};
export default ProductInfo;