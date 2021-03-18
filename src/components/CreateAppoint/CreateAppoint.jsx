import React, {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';


import Input from '../Input/Input'
import Submit from '../Submit/Submit'


import {CREATE} from '../../redux/types/appointtype'
import './CreateAppoint.css';

function CreateAppoint(props) {

    const [appointOn, setAppoint] = useState({
        appointDate: '',
        treatment: '',
        covid: false,
        payMethod: '',
        userId: ''
        
    });

    const [message, setMessage] = useState('')

    // HANDLERS
    const handleState = (event) => {
        setAppoint({...appointOn, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});

    };

    //AUTHORIZATION
    
    let token = props.token
    let auth = {
        headers: {
          'Authorization': `Bearer ${token}` 
        }};

    // FUNCTION CREATE AN APPOINTMENT

    const create = async () => {
    setAppoint({...appointOn, userId:props.userId})
        //Error handling
        setMessage('');

    

        let body = {

            appointDate: appointOn.appointDate,
            treatment: appointOn.treatment,
            covid: appointOn.covid,
            payMethod: appointOn.payMethod,
            userId: appointOn.userId
               
        }

        //REST API 
        try{
            
            
            let createAppointment = await axios.post(`http://localhost:3001/appointment`, body, auth)
            const result = createAppointment.data
            console.log(result)
           
            props.dispatch({ type: CREATE, payload : result});
            /* if(createAppointment?.data) 
                return props.toggle() */
        }catch(error){
            setMessage('rellena todos los campos') 
        }

    }

    return (
        <div className="udpateUserComponent">
            <div className="header">
                <h2>CREATE APPOINTMENT</h2>
            </div>
           
            <div className="createContainer">
                <Input type='date' name='appointDate' title='appointDate' lenght='30' onChange={handleState}/>
                
                <select type='select' name='treatment' onChange={handleState}>
                        <option></option>
                        <option>Blanqueamiento dental</option>
                        <option>Limpieza bucal</option>
                </select>
                <select type='select' name='covid' onChange={handleState}>
                    <option></option>
                    <option>false</option>
                    <option>true</option>
                </select>
                <select type='select' name='payMethod' onChange={handleState}>
                    <option></option>
                    <option>Visa</option>
                    <option>Paypal</option>
                </select>
               
            </div>
            <div className="messageUpdate">{message}</div>
            <div className="submitUpdate">
                <Submit type='submit' name='submit' onClick={()=>create()} title='Update Profile'/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        appointment : state.appointReducer.appointment
        
    }
}
export default connect(mapStateToProps)(CreateAppoint);
