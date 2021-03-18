import React from 'react'
import './Profile.css';
import moment from 'moment';
import {connect} from 'react-redux'

const Profile = (props) => {


    return (
        <div className="profileComponent">
            <div className="profileDivisionLeft">
                <div className="spacer"></div>
                {
                    !props.name
                    ?
                    <>
                        <h3>
                            Welcome, Admin!
                        </h3>
                    </>
                    :
                    <>
                        <h3>
                            Welcome, {props.name}!
                        </h3>
                    </>

                }
                <div className="spacer"></div>
                <div className="avatar">{props.initialName}</div>
                {
                    !props.userName
                    ?
                    <>
                        <p>@admin01</p>
                    </>
                    :
                    <>
                         <p>@{props.userName}</p>
                    </>
                }
            </div>
            <div className="profileDivisionRight">
                <div className="detailsUser">
                    <p><b>Full Name:</b> {props.fullName}</p>
                    <p><b>Birth Date:</b> {moment(props.birthDate).format('Do-MMMM-YYYY')}</p>
                    <p><b>Email:</b> {props.email}</p>
                    <p><b>Phone Number:</b> {props.phoneNumber}</p>
                    <p><b>Client since:</b> {moment(props.clientSince).format('Do-MMMM-YYYY')}</p>
                    <p><b>Profile last update:</b> {moment(props.updatedAt).format('Do-MMMM-YYYY')}</p>
                </div>
                <div className="appointCounter">
                    <div className="counter">
                        <div className="pendinTitle">
                            <h6>Pending <br/>
                            Appointments</h6>
                        </div>
                        <div className="pendingAppoint">
                        {/* {
                            props.appointment.lengh
                            ?
                            <>
                                <p>{props.appointment.lengh}</p>
                            </>
                            :
                            <> */}
                                <p>0</p>
                            {/* </>
                        } */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        appointment : state.userReducer.appointment,
    }
}

export default connect(mapStateToProps)(Profile);
