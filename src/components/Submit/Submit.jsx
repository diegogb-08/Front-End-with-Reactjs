import React from 'react'
import './Submit.css'

const Submit = (props) => {

    return (
        <div>
            <button className='submitBtn' type={props.type} name={props.name} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default Submit
