import React from 'react';
import './Bton.css';

import {useHistory} from 'react-router-dom';

const Btn = (props) => {

    let history = useHistory();

    const direccioname = () => {
        history.push(`/${props.path}`)
    }

    return(
        <div onClick={()=> direccioname()} className="buttonRedirect">
            {props.name}
        </div>
    )
}

export default Btn;