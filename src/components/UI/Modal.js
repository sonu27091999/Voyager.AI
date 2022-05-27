import React, { Fragment } from 'react'
import { Backdrop } from './Loader'
import ReactDom from 'react-dom'

const Modal = ({ onClose ,children }) => {
    return (
        // https://reactjs.org/docs/fragments.html
        <Fragment>
            {
                ReactDom.createPortal(
                    <Fragment>
                        <Backdrop onClose={onClose}/>
                        <div className="modal">
                            <button type='close' onClick={onClose}>X</button>
                            <div className="content">{children}</div>
                        </div>
                    </Fragment>,
                    document.getElementById('modal-root')
                )
            }
        </Fragment>
    )
}

export default Modal