import React, {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';

import Input from '../Input/Input'
import Submit from '../Submit/Submit'
// HOla
import {CREATE,FIND} from '../../redux/types/appointType'
import './CreateAppoint.css';

function CreateAppoint(props) {

        const [appointOn, setAppoint] = useState({
        appointDate: '',
        treatment: '',
        covid: false,
        payMethod: '',
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

    // FUNCTION FIND ALL APPOINTMENTS BY ID

    const find = async () => {
        try {
            let id = props.user.id
        let resultAppoint = await axios.get(`http://localhost:3001/appointment/user/${id}`, auth);
            console.log(resultAppoint)
               

            let resultFind = props.dispatch({type: FIND, payload: resultAppoint.data});
            console.log(resultFind)  
        }   catch(error){
            setMessage('rellena todos los campos') 
        }
    }
    
            

    // FUNCTION CREATE AN APPOINTMENT

    const create = async () => {
        setMessage('');

        let body = {

            appointDate: appointOn.appointDate,
            treatment: appointOn.treatment,
            covid: appointOn.covid,
            payMethod: appointOn.payMethod,
            userId: props.user.id,  
            clinicId: 1            
        }

        //REST API 
        try{
                        
            let createAppointment = await axios.post(`http://localhost:3001/appointment`, body, auth)
            const result = createAppointment.data
            console.log(result)
           
            props.dispatch({ type: CREATE, payload : result});
            find()
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
                    <option name='false'>false</option>
                    <option name='true'>true</option>
                </select>
                <select type='select' name='payMethod' onChange={handleState}>
                    <option></option>
                    <option>Visa</option>
                    <option>Paypal</option>
                </select>
               
            </div>
            <div className="messageUpdate">{message}</div>
            <div className="submitUpdate">
                <Submit type='submit' name='submit' onClick={()=>create()} title='Create appoint'/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        appointment : state.appointReducer.appointment,
        user: state.userReducer.user,
        token: state.userReducer.token
        
    }
}
export default connect(mapStateToProps)(CreateAppoint);
