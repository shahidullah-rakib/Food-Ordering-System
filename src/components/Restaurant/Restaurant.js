import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';
import './Restaurant.css';

const Restaurant = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='restaurant-container'>
            <div>
                <h2>Food Menu</h2>
                <div className='menu-container'>
                    {
                        foods.map(food => <Food food={food} key={food.id}></Food>)
                    }
                </div>
            </div>
            <div className='order-container'>
                <Order></Order>
            </div>
        </div>
    );
};

export default Restaurant;