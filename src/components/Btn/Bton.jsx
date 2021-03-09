import React from 'react';
import './Bton.css';

import {useHistory} from 'react-router-dom';

const Btn = (props) => {

    let history = useHistory();

    const direccioname = () => {
        history.push(`/${props.destino}`)
    }

    return(
        <div onClick={()=> direccioname()} className="buttonRedirect">
            {props.nombre}
        </div>
    )
}

export default Btn;