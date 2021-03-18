import React, { useState } from 'react'
import './NavBtn.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

function NavBtn(props) {

    const [open, setOpen] = useState(false);



    return (
        <div className="loggedUser" onClick={()=> setOpen(!open)}>
            <FontAwesomeIcon className="logoUser" icon={faSortDown} />
            <p>{props.name}</p>
            {open && props.children}
        </div>
    )
}

export default NavBtn;
