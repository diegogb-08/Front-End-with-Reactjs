import React from 'react'
import Modal from './Modal';
import {useState} from 'react';
import UpdateUser from '../../components/UpdateUser/UpdateUser';

function ModalRender(props) {

    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 

    return (
        <div>
            <div className="configComponent" onClick={toggle}>{props.name}</div>
            <Modal active={active} toggle={toggle}>
                <UpdateUser></UpdateUser>
            </Modal>
        </div>
    )
}

export default ModalRender
