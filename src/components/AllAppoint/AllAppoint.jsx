import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {port, appoint, client} from '../../api/api';
import moment from 'moment'

import './AllAppoint.css'


function AllAppoint() {

    //HOOKS

    const [appointments, setAppointments] = useState({
        appointCollection : []
    })

    const [users, setUsers] = useState({
        arrayUsers : []
    })
    
    // HANDLER

    useEffect(()=>{
        getAllAppoint()
        getAllUsers()
        // eslint-disable-next-line
    },[])

    // FUNCTIONS

    const getAllAppoint= async () => {

        let result = await axios.get(port+appoint)
        setAppointments({...appointments, appointCollection: result.data});
    }

    const getAllUsers = async () => {

        let result = await axios.get(port+client)
        setUsers({...users, arrayUsers: result.data})
    }


    return (
        <div className="allAppointComponent">
                {  appointments.appointCollection.map(item =>{
                    return(
                        <div key={item.id} className="appointmentGrid">
                            <h6>Appointment #{item.id}</h6>
                            Treatment: {item.treatment}<br/>
                            Patient Name: {
                                // eslint-disable-next-line
                                users.arrayUsers.map(user => {
                                    if (user.id === item.userId)
                                        return user.fullName
                                })
                            }<br/>
                            Date: {moment(item.appointDate).format('Do MMMM YYYY')}<br/>
                            Time: {moment(item.appointDate).format('h:mm:ss a')}
                        </div>
                    )                
                })          
                }
        </div>
    )
}

export default AllAppoint
