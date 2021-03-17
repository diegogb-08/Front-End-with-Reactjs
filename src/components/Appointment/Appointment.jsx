import React, {useState/* , useEffect */} from 'react';
import axios from 'axios';
/* import {useHistory} from 'react-router-dom';  */

import './Appointment.css';




const Appointment = (props) => {

    /* let history = useHistory(); */

    const [userAppointment, setAppoint] = useState({
       
        appoint: {}
        
       
    });

    const handleState = (event) => {
        setAppoint({...userAppointment, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    const findAppointment = async () => {
        const userId = props.userId;
        const userToken = props.userToken;
         axios.get(`http://localhost:3001/appointment/user/${userId}`, {
            headers: {
              'Authorization': `token ${userToken}`
            }
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((error) => {
            console.error(error)
          })
          
       /*  console.log(props.userId)
         setAppoint({...userAppointment, appoint : res.data}); 
       */

    }
    return(
        <div>
            <div /* onChange={handleState} */ onClick={() => findAppointment()}>FIND</div>
            
        </div>

    )


}

export default Appointment;