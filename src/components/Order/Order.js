import React from 'react';
import './Order.css'

const Order = (props) => {
    //console.log(props.order)
    const { order } = props;
    console.log(order)
    return (
        <div className='order'>
            <h2>Your Order</h2>
            <p>{order}</p>
            <button>CHOOSE 1 FOR ME</button><br />
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Order;