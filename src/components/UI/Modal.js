import React, { Fragment } from 'react'
import { Backdrop } from './Loader'
import ReactDom from 'react-dom'

const Modal = ({ onClose }) => {
    return (
        // https://reactjs.org/docs/fragments.html
        <Fragment>
            {
                ReactDom.createPortal(
                    <Fragment>
                        <Backdrop onClose={onClose}/>
                        <div className="modal">Modal
                            <button onClick={onClose}>X</button>
                        </div>
                    </Fragment>,
                    document.getElementById('modal-root')
                )
            }
        </Fragment>
    )
}

export default Modal