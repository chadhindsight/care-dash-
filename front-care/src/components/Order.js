import React from 'react';
import { Modal, Button } from 'antd';
import actions from '../services/index';

const Order = (props) => {
    // Put this method in App.js and pass it down
    const remove = (thing) => {

    }
    //CONDITIONAL RENDER: Only display when user places order. 
    // const Mode = () => {
    //     return (
    //         <div>
    //             <Button type="primary" onClick={this.showModal}>
    //                 Open Modal with async logic
    //             </Button>
    //             <Modal
    //                 title="Title"
    //                 visible={props.show}
    //                 onOk={this.handleOk}
    //                 confirmLoading={confirmLoading}
    //             >
    //                 <p>{ModalText}</p>
    //             </Modal>
    //         </div>
    //     );
    // }

    // console.log(props)
    const displayItems = props.cart.map(med => {
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
                <button onClick={() => props.onOrderSubmit(props.cart)}>Place Order</button>
            </form>
        </div>
    );
};

export default Order;