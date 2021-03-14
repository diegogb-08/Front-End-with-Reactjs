import React from 'react'
import './Profile.css'

const Profile = (props) => {


    return (
        <div className="profileComponent">
            <div className="profileDivisionLeft">
                <div className="spacer"></div>
                <h4>Welcome, {props.name}!</h4>
                <div className="spacer"></div>
                <div className="avatar">{props.initialName}</div>
            </div>
            <div className="profileDivisionRight">
                <div className="detailsUser"></div>
                <div className="detailsUser">
                <p>Full Name: {props.fullName}</p>
                <p>User Name: {props.userName}</p>
                <p>Birth Date: {props.birthDate}</p>
                <p>Email: {props.email}</p>
                <p>Phone Number: {props.phoneNumber}</p>
                <p>Client since: {props.createdAt}</p>
                <p>Profile last update: {props.updatedAt}</p>
                </div>
                <div className="detailsUser"></div>
            </div>
        </div>
    )
}

export default Profile
