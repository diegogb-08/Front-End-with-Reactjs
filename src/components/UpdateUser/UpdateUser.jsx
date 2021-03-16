import React from 'react'
import Input from '../Input/Input'

function UpdateUser() {
    return (
        <div className="udpateUserComponent">
            <div className="titleForm">
                <h2>Update profile</h2>
            </div>
            <div className="lineForm"></div>
            <div className="formModal">
                <Input />
                <Input />
                <Input />
                <Input />
            </div>
        </div>
    )
}

export default UpdateUser
