import React from 'react'
import './Tab.css'

function Tab(props) {

    

    return (
        <div className="tab" style={props.style} onClick={props.onClick} >
            {props.tabs}
        </div>
    )
}

export default Tab
