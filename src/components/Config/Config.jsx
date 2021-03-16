import React from 'react'
import './Config.css'

function Config(props) {
    return (
        <div className="configComponent" onClick={props.onClick}>
            <p>{props.name}  </p>
        </div>
    )
}

export default Config
