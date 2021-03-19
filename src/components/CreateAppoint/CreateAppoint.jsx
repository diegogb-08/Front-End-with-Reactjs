import React, {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';

import Input from '../Input/Input'
import Submit from '../Submit/Submit'
// HOla
import {CREATE,FIND,DELETE} from '../../redux/types/appointType'
import './CreateAppoint.css';

function CreateAppoint(props) {

        const [appointOn, setAppoint] = useState({
        appointDate: '',
        treatment: '',
        covid: false,
        payMethod: '',
    });

    const [message, setMessage] = useState('')

    const [appointmentList, setAppointmentList] = useState([])
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
              
            let resultFind = props.dispatch({type: FIND, payload: resultAppoint.data});
            console.log(resultFind)
            /* 
            const allResult = resultFind.payload
            allResult.forEach(element =>  
            setAppointmentList([...prevItems, {
                id: element.id,
                treatment: element.treatment
              }]));
            console.log(appointmentList) */
           
        }   catch(error){
            setMessage('rellena todos los campos') 
        }
    }
    // FUNCTION DELTE AN APPOINTMENT BY USER ID

      const deleteAppoint = async () => {

        setMessage('');

        let body = {

            appointDate: appointOn.appointDate,
            treatment: appointOn.treatment,
            covid: appointOn.covid,
            payMethod: appointOn.payMethod,
            userId: props.user.id,  
            clinicId: 1            
        }

        try{
            console.log(body)
            let resultDeleteAppoint = await axios.delete(`http://localhost:3001/appointment/user/${props.user.id}`, auth);
            console.log(resultDeleteAppoint)
    
           
           /*  props.dispatch({ type: DELETE, payload : }); */
          
        
            
        }catch(error){
            setMessage('rellena todos los campos') 
        }
       /*  try {
            let id = props.user.id
            let appointmentId = props.appointmentId;
            let resultDeleteAppoint = await axios.delete(`http://localhost:3001/appointment/user/${id}`, auth, appointmentId);
            console.log(resultDeleteAppoint)
               

            let resultDeleteFind = props.dispatch({type: DELETE, payload: resultDeleteAppoint.data});
            console.log(resultDeleteFind)  
        }   catch(error){
            setMessage('rellena todos los campos') 
        } */
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
          
        
            
        }catch(error){
            setMessage('rellena todos los campos') 
        }

    }

/*     const appointGrid  = () => {
          return  <ul>
            <li>{appointmentList.id}</li>    
            <li>{appointmentList.treatment}</li> 
            <li>{appointmentList.appointDate}</li> 
            </ul>
    } */

    return (
       
        <div className="findAppointmentComponent">
             <div>
      
            </div> 
            <div className="header">
                <h2>CREATE APPOINTMENT</h2>
                <h2>AppointDate:{props.appointDate}</h2>
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
                <Submit type='submit' name='submit' onClick={()=>find()} title='Find appoint'/>
                <Submit type='submit' name='submit' onClick={()=>deleteAppoint()} title='Delte appoint'/>
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
