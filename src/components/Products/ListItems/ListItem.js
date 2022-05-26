import React from 'react'
import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import { useState } from 'react';

const ListItem = (props) => {
    const [counter, setCounter] = useState(0);
    const increaseCounterByOne = (e) => {
        setCounter(counter + 1);
    }
    const decreaseCounteByOne = (e) => {
        if (counter === 0) {
            return;
        }
        setCounter(counter - 1);
    }
    return (
        <div className='item-card'>
            <img className='img-fluid' src={`./assets/${props.data.thumbnail}`} alt="Some title" />
            <div className='item-card__information'>
                <div className='pricing'>
                    <span>₹{props.data.discountedPrice}</span>
                    <small>
                        <strike>₹{props.data.price}</strike>
                    </small>
                </div>
                <div className='title'>
                    <h3>{props.data.title}</h3>
                </div>
                <button onClick={()=>props.updateIemTitle(props.data.id)}>Update the title</button>
                {
                    counter < 1 ?
                        <button className='cart-add' onClick={increaseCounterByOne}>
                            <span>Add to Cart</span>
                            <img src={AddToCartIcon} alt="Cart Icon" />
                        </button>
                        :
                        <div className='cart-addon'>
                            <button onClick={decreaseCounteByOne}><span>-</span></button>
                            <span className="counter">{counter}</span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                }
            </div>
        </div>
    )
}

export default ListItem