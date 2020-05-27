import React from 'react';

const Order = (props) => {

    const displayItems = (items) => {
        return items.map(med=>{
            return (
            <>
                <li>{med.drugName}</li>
                <button>Place Order</button>
                <button>Remove from Cart</button>
            </>
            )
        })
    }
    return (
        <div>
            {displayItems(props.cart)} 
        </div>
    );
};

export default Order;