import React from 'react'
import PopUpModal from './PopUpModal';

function ModalForm() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <div className="configComponent" variant="primary" onClick={() => setModalShow(true)}>
          Update User
        </div>
        
        <PopUpModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
}

export default ModalForm
