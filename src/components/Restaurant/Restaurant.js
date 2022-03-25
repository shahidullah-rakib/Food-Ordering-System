import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Order from '../Order/Order';
import './Restaurant.css';

const Restaurant = () => {
    const [foods, setFoods] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])



    const handleAddToOrder = (food) => {
        console.log(food.name);
        // setOrder(food);
        // console.log(order);
        const newOrder = food.name;
        setOrder(newOrder);
    }

    return (
        <div className='restaurant-container'>
            <div>
                <h2>Food Menu</h2>
                <div className='menu-container'>
                    {
                        foods.map(food => <Food food={food} key={food.id} handleAddToOrder={handleAddToOrder}></Food>)
                    }
                </div>
            </div>
            <div className='order-container'>
                <Order order={order}></Order>
            </div>
        </div>
    );
};

export default Restaurant;