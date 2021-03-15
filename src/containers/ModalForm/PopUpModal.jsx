import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Input from '../../components/Input/Input';
import Submit from '../../components/Submit/Submit';
import './ModalForm.css'

function PopUpModal(props) {
    const submit = async () => {

    }

    return (
      <Modal
        {...props}
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Update your profile!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="formModal">
                <Input type='text' name='fullName' title='Full Name' lenght='30'/>
                <Input type='text' name='userName' title='User Name' lenght='30' />
                <Input type='email' name='email' title='Email' lenght='30' />
                <Input type='number' name='phoneNumber' title='Phone Number' lenght='12' />
                <Input type='text' name='address' title='Full Address' lenght='250'/>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <div className="onHide" onClick={props.onHide}>
                <Submit type='submit' name='update' onClick={()=>submit()} title='Update Profile' />
            </div>
       
        </Modal.Footer>
      </Modal>
    );
}

export default PopUpModal
