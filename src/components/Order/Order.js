import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Order.css'

const Order = (props) => {
    //console.log(props)
    const { picture, price, name, id } = props.item
    return (
        <div className='order'>
            <img src={picture} width='50px' alt="" />
            <p><b>{name}</b>  <br /> Price: ${price} </p>
            <button type="button" className="btn-close mt-3" aria-label="Close"></button>
        </div>
    );
};

export default Order;