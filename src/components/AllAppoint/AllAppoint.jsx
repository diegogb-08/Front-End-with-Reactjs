import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {port, appoint} from '../../api/api';
import moment from 'moment'

import './AllAppoint.css'


function AllAppoint() {

    //HOOKS

    const [appointments, setAppointments] = useState({
        appointCollection : []
    })
    console.log(appointments.appointCollection)
    // HANDLER

    useEffect(()=>{
        getAllAppoint()
    },[])

    // FUNCTIONS

    const getAllAppoint= async () => {

        let result = await axios.get(port+appoint)
        setAppointments({...appointments, appointCollection: result.data});
    }

    return (
        <div className="allAppointComponent">
            <div className="appointmentGrid">
                {  appointments.appointCollection.map(item =>{
                    return(
                        <div key={item.id}>
                            <h6>Treatment: {item.treatment}</h6>
                            <p>Name: {item.userId}</p>
                            <p>Appointment date {moment(item.appointDate).format('Do MMMM YYYY, h:mm:ss a')}</p>
                        </div>
                    )                
                })          
                }
            
            </div>
        </div>
    )
}

export default AllAppoint
