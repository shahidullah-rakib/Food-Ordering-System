import React from 'react';
import './Order.css'

const Order = (props) => {
    //console.log(props.order)
    const { order } = props;
    return (
        <div className='order'>
            <h2>Your Order</h2>
            <h1>{order}</h1>
            <button>CHOOSE 1 FOR ME</button><br />
            <button>CHOOSE AGAIN</button>
        </div>
    );
};

export default Order;