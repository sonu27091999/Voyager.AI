import React from 'react'
import AddToCartIcon from "../../../assets/icons/add_cart.svg"

const ListItem = (props) => {
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
                <button className='cart-add'>
                    <span>Add to Cart</span>
                    <img src={AddToCartIcon} alt="Cart Icon" />
                </button>
            </div>
        </div>
    )
}

export default ListItem