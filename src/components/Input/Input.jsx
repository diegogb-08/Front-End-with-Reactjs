import React from 'react'
import './Input.css'

const Input = (props) => {

    return (
        <div className="inputComponent">
            <p>{props.title}</p>
            <input
                className="input"
                type={props.type}
                name={props.name}
                maxLength={props.lenght}
                onChange={props.onChange}
            ></input>
        </div>
    )
}

export default Input
