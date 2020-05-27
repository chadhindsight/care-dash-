import React from 'react';

const Order = (props) => {
    const remove =(thing) => {
        
    }
    const onOrderSubmit = () => {
        
    }
    const displayItems = (items) => {
        return items.map(med=>{
            return (
            <>
                <li>{med.drugName}</li>
                <button onClick={remove}>Remove from Cart</button>
            </>
            )
        })
    }
    return (
        <div>
            <form>
                {displayItems(props.cart)}
                <button onClick={onOrderSubmit}>Place Order</button>
            </form>
        </div>
    );
};

export default Order;