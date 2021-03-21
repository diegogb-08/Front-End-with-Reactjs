import React, {useEffect} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import { CREATE } from '../../redux/types/appointType';
import moment from 'moment';

import {port, client, appoint} from '../../api/api'; 
import './Profile.css';

const Profile = (props) => {

    //AUTHORIZATION
    
    let token = props.token
    let auth = {
        headers: {
          'Authorization': `Bearer ${token}` 
        }};


    useEffect(()=>{
        getAppointments()
    },[])

    const getAppointments = async () => {
        let result = await axios.get(`${port}${appoint}${client}/${props.user.id}`, auth)
        props.dispatch({type: CREATE, payload: result.data})
    }


    return (
        <div className="profileComponent">
            <div className="profileDivisionLeft">
                <div className="spacer"></div>
                <div className="spacer"></div>
                <div className="spacer"></div>
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
                {
                    !props.initialName
                        ?
                        <>
                            <div className="avatar">C</div>
                        </>
                        :
                        <>
                            <div className="avatar">{props.initialName}</div>
                        </>
                }
                
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
                    <p><b>Client since:</b> {moment(props.createdAt).format('Do-MMMM-YYYY')}</p>
                    <p><b>Profile last update:</b> {moment(props.updatedAt).format('Do-MMMM-YYYY')}</p>
                </div>
                {
                    props.user.id
                    ?
                    <>
                        <div className="appointCounter">
                            <div className="counter">
                                <div className="pendinTitle">
                                    <h6>Pending <br/>
                                    Appointments</h6>
                                </div>
                                <div className="pendingAppoint">
                                    <p>{props.appointment?.length}</p>                             
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>

                    </>
                
                }             
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        admin : state.adminReducer.admin,
        user : state.userReducer.user,
        token : state.userReducer.token,
        appointment: state.appointReducer.appointment
    }
}

export default connect(mapStateToProps)(Profile);
