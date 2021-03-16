import React, {useState/* , useEffect */} from 'react';
import axios from 'axios';
/* import {useHistory} from 'react-router-dom';  */

import './Appointment.css';
import Input from '../Input/Input';



const Appointment = (props) => {

    /* let history = useHistory(); */

    const [userAppointment, setAppoint] = useState({
       
        appoint: {}
       
    });

    const handleState = (event) => {
        setAppoint({...userAppointment, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    const findAppointment = async () => {
        let res = await axios.get(`http://localhost:3001/appointment`);
        console.log(res);
        setAppoint({...userAppointment, appoint : res.data});

    }
    return(
        <div>
            <div onClick={() => findAppointment()}>FIND</div>
            <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
        </div>

    )


}

export default Appointment;