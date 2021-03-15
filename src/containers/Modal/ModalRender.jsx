import React from 'react'
import Modal from './Modal';
import {useState} from 'react';

function ModalRender(props) {

    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.name}</div>
            <Modal active={active} toggle={toggle}>
                <h1>MODAL WORKS!</h1>
            </Modal>
        </div>
    )
}

export default ModalRender
