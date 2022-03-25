import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Food.css'

const Food = (props) => {
    const { picture, name, price } = props.food;
    const { handleAddToOrder } = props;
    // handleAddToOrder
    //console.log(props)

    //console.log(props)
    return (
        <div className='food'>
            <img src={picture} alt="" />
            <div className='food-info'>
                <p><b>Name:</b> {name}</p>
                <p><b>Price:</b> ${price}</p>
            </div>

            <button className='button-order' onClick={() => handleAddToOrder(props.food)}>
                <p className='button-text'>
                    Add For Order
                </p>
                <FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon>

            </button>
        </div>
    );
};

export default Food;