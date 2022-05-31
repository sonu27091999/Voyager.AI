import React, { Fragment } from 'react'
import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import { useState } from 'react';
import Modal from '../../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import {addItemHandler,removeItemHandler} from '../../../actions'

const ListItem = (props) => {
    const [showModal, setShowModal] = useState(false);
    let item = useSelector(state => state.cart.items.find(item => item.id === props.data.id));
    let dispatch=useDispatch();

    const increaseCounterByOne = (e) => {
        e.stopPropagation();
        dispatch(addItemHandler(props.data));
    }
    const decreaseCounteByOne = (e) => {
        e.stopPropagation();
        dispatch(removeItemHandler(props.data.id));
    }
    const handleModal = () => {
        setShowModal(previousState => !previousState);
    }
    
    return (
        <Fragment>
            <div onClick={handleModal} className='item-card'>
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
                    {
                        !item||item?.quantity < 1 ?
                            <button className='cart-add' onClick={increaseCounterByOne}>
                                <span>Add to Cart</span>
                                <img src={AddToCartIcon} alt="Cart Icon" />
                            </button>
                            :
                            <div className='cart-addon'>
                                <button onClick={decreaseCounteByOne}><span>-</span></button>
                                <span className="counter">{item.quantity}</span>
                                <button onClick={increaseCounterByOne}><span>+</span></button>
                            </div>
                    }
                </div>
            </div>
            {showModal &&
                <Modal onClose={handleModal}>
                    <div className="item-card__modal">
                        <div className="img-wrap">
                            <img className='img-fluid' src={`./assets/${props.data.thumbnail}`} alt="Some title" />
                        </div>
                        <div className="meta">
                            <h3>{props.data.title}</h3>
                            <div className='pricing'>
                                <span>₹{props.data.discountedPrice}</span>
                                <small>
                                    <strike>₹{props.data.price}</strike>
                                </small>
                            </div>
                            <p>{props.data.description}</p>
                            {
                                !item||item?.quantity < 1 ?
                                    <button className='cart-add' onClick={increaseCounterByOne}>
                                        <span>Add to Cart</span>
                                        <img src={AddToCartIcon} alt="Cart Icon" />
                                    </button>
                                    :
                                    <div className='cart-addon'>
                                        <button onClick={decreaseCounteByOne}><span>-</span></button>
                                        <span className="counter">{item.quantity}</span>
                                        <button onClick={increaseCounterByOne}><span>+</span></button>
                                    </div>
                            }
                        </div>
                    </div>
                </Modal>}
        </Fragment>
    )
}

export default ListItem