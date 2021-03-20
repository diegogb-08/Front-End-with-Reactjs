import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {port, client, appoint, key} from '../../api/api'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

import Input from '../Input/Input'
import Submit from '../Submit/Submit'
// HOla
import {CREATE,DELETE} from '../../redux/types/appointType'
import './CreateAppoint.css';

import moment from 'moment';

function CreateAppoint(props) {
    const [showModal, setShowModal] =  useState(false)

    const x = <FontAwesomeIcon icon={faTimes} />

    const [appointOn, setAppoint] = useState({
        appointDate: '',
        treatment: '',
        covid: false,
        payMethod: '',
    });

    const [message, setMessage] = useState('')

    const [appointmentList, setAppointmentList] = useState({
        appointCollection : []
    })


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

    useEffect(()=>{
        find()
  
    },[])
    
    // FUNCTION FIND ALL APPOINTMENTS BY ID

    const find = async () => {
            let id = props.user.id
            let resultAppoint = await axios.get(`${port}${appoint}${client}/${id}`, auth);
              
            setAppointmentList({...appointmentList, appointCollection: resultAppoint.data});
            
    }
    // FUNCTION DELTE AN APPOINTMENT BY USER ID

    const deleteAppoint = async (appointId) => {
        // setMessage('');
      
        try{
                        
            let deleteAppointment = await axios.delete(`${port}${appoint}${client}/${props.user.id}${key}${appointId}`, auth)
            const result = deleteAppointment.data
            console.log(result)
            props.dispatch({ type: DELETE, payload : result}); 
            find() 

        }catch(error){
            setMessage('rellena todos los campos') 
        }   
       
    }   
    //FUNCTION TOOGLE MODAL
    const toogleModal = () => {
        setShowModal(!showModal)
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
        // DATES 
        const now = moment().format('YYYY-MM-DD HH:mm:ss')
        let today = moment(body.appointDate).format('YYYY-MM-DD HH:mm:ss')
    
        if (now >= today){
            setMessage('The date is wrong')
        }else if (now < today){
        
        try{
                        
            let createAppointment = await axios.post(`http://localhost:3001/appointment`, body, auth)
            const result = createAppointment.data
            if (result){
                alert('You has been created a new appointment. See you soon!')
            }
            console.log(result)
            props.dispatch({ type: CREATE, payload : result});
            find()
            toogleModal()
            setAppoint({appointDate:'',
            treatment: '',
            covid:false,
            payMethod: '',})
           
            
        }catch(error){
            setMessage('fill in all the fields') 
        }
    }
    }

    
}


const mapStateToProps = state => {
    return {
        appointment : state.appointReducer.appointment,
        user: state.userReducer.user,
        token: state.userReducer.token
        
    }
}
export default connect(mapStateToProps)(CreateAppoint);
