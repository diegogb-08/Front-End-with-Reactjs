import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {port, client} from '../../api/api';
import moment from 'moment'

import './AllAppoint.css'

function AllUsers() {

    const [users, setUsers] = useState({
        arrayUsers : []
    })

     // HANDLER

     useEffect(()=>{
        getAllUsers()
        // eslint-disable-next-line
    },[])

    //FUNCTIONS

    const getAllUsers = async () => {

        let result = await axios.get(port+client)
        setUsers({...users, arrayUsers: result.data})
    }


    return (
        <div className="allAppointComponent">
                {  users.arrayUsers.map(client =>{
                    return(
                        <div key={client.id} className="appointmentGrid">
                            <h6>Client #{client.id}</h6>
                            Patient Name: {client.fullName}<br/>
                            User Name: @{client.userName}<br/>
                            Birth Date: {moment(client.birthDate).format('Do-MMMM-YYYY')}<br/>
                            Email: {client.email}<br/>
                            Phone Number: {client.phoneNumber}<br/>
                            Client since: {moment(client.createdAt).format('Do-MMMM-YYYY')}<br/>
                            Profile last update: {moment(client.updatedAt).format('Do-MMMM-YYYY')}<br/>
                        </div> 
                    )                
                })          
                }
        </div>
    )
}

export default AllUsers
