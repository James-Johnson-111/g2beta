import React from 'react';
import BackDark from './BackDark/BackDark';

import './Modal.css';

const Modal = (props) => {

    return(
        <>
            <BackDark closing={props.mClose} showing={props.mShow} />
            <div className="Modal" style={{ 'transform' : props.mShow ? 'translateY(0)' : 'translateY(-100vh)' }}>
                {props.children}
            </div>
        </>
    )

}

export default Modal;