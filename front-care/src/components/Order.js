import React from 'react';

const Order = (props) => {
    
    // Put this method in App.js and pass it down
    const remove =(thing) => {
        
    }
    const onOrderSubmit = () => {
        
    }
    console.log(props)
    const displayItems = props.cart.map(med =>{
        return (
        <div>< li key={med.uniqueID}>{med.drugName}</li>
            <button onClick={remove}>Remove from Cart</button>
        </div>
        )    
    })

    return (
        <div>
            <form>
                <ul>{displayItems}</ul>
                <button onClick={onOrderSubmit}>Place Order</button>
            </form>
        </div>
    );
};

export default Order;