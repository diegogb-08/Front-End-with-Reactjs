import React from 'react'
import './Profile.css';
import moment from 'moment';

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
                <p>Birth Date: {moment(props.birthDate).format('Do-MMMM-YYYY')}</p>
                <p>Email: {props.email}</p>
                <p>Phone Number: {props.phoneNumber}</p>
                <p>Client since: {moment(props.clientSince).format('Do-MMMM-YYYY')}</p>
                <p>Profile last update: {moment(props.updatedAt).format('Do-MMMM-YYYY')}</p>
                </div>
                <div className="detailsUser"></div>
            </div>
        </div>
    )
}

export default Profile
