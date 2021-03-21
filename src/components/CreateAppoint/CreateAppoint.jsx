import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import moment from 'moment';

import Input from '../Input/Input'


import {port, client, appoint, key} from '../../api/api';
import {CREATE,DELETE} from '../../redux/types/appointType'
import './CreateAppoint.css';



function CreateAppoint(props) {

    const [showModal, setShowModal] =  useState(false)
    
    const [showDeleteModal, setShowDeleteModal] =  useState(false)

    const [itemId, setItemId] = useState('')

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
  
    })
    
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
            props.dispatch({ type: DELETE, payload : result}); 
            find() 
            toggleDeleteModal()
            setItemId('')

        }catch(error){
            setMessage("Can't delete this appointment") 
        }   
       
    }   
    //FUNCTION TOOGLE MODAL
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const toggleDeleteModal = id => {
        setItemId(id)
        setShowDeleteModal(!showDeleteModal)
        
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
            if(!body.treatment || !body.covid || !body.payMethod){
                setMessage('fill in all the fields')
                return;
            }
        
        try{
                        
            let createAppointment = await axios.post(`http://localhost:3001/appointment`, body, auth)

            const result = createAppointment.data

            props.dispatch({ type: CREATE, payload : result});
            find()
            toggleModal()
            setAppoint({appointDate:'',
            treatment: '',
            covid:false,
            payMethod: '',})
           
          
        }catch(error){
            setMessage(error) 
        }
    }
    }
    return (
        <div className="findAppointmentComponent">
            
            <button type="button" className="btn btn-primary" id="new--apoint-button" title='Create appoint' onClick={()=>toggleModal()}>New Appointment</button>
            <div className="header">
               
            </div> 
            {showModal &&
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>CREATE APPOINTMENT</h2>
                    </div>
                    <div className="modal-body">
                    <label name='appointDate'>Date</label>
                    <Input className="calendar-input" type='datetime-local' name='appointDate' title='' lenght='30' onChange={handleState}/>

                    <div className="createOptions">
                    <label name='treatment'>Treatment</label>
                    <select className="select-input" type='select' name='treatment' onChange={handleState}>
                    <option></option>
                    <option>Dental Implantology</option>
                    <option>Teeth Whitening</option>
                    <option>Orthodontics</option>
                    <option>Cavities</option>
                    </select>
                    </div>
                <div className="createOptions">
                <label name='covid'>Covid</label>
                <select type='select' name='covid' onChange={handleState}>
                    <option></option>
                    <option name='false'>false</option>
                    <option name='true'>true</option>
                </select>
                </div>

                <div className="createOptions">
                <label name='payMethod'>PayMethod</label>
                <select type='select' name='payMethod' onChange={handleState}>
                    <option></option>
                    <option>Visa</option>
                    <option>Mastercard</option>
                    <option>Paypal</option>
                    <option>I will pay on dental Clinic</option>
                    </select> 
                    </div>
                    </div>
                    <div className="modal-footer">
                    <div className="messageUpdate">{message}</div>
                    <button onClick={() =>toggleModal()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button onClick={() =>create()} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>}
            {showDeleteModal && <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>ARE YOU SURE YOU WANT TO DELETE IT?</h2>
                    </div>
                    <div className="modal-footer">
                    <div className="messageUpdate">{message}</div>
                        <button onClick={() =>toggleDeleteModal()} type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button onClick={()=>deleteAppoint(itemId)} type="button" className="btn btn-primary">Delete appoint</button>
                       
                    </div>
                </div>
            </div>}
            
            <div className="submitUpdate">
                
            </div>
            <div>   
        </div>

        <div className="allAppointUserComponent">
        {appointmentList.appointCollection.map(item =>{
            return(
                <div key={item.id} className="appointmentUserGrid">
                    <div className="align-close-button">
                    <h6>Order number #{item.id}</h6>
                    <button className="close-button" onClick={()=>toggleDeleteModal(item.id)}>&#x2715;</button>
                    </div>
                    Treatment: {item.treatment}<br/>  
                    Date: {item.appointDate}<br/>
                    Price: {item.price + '€'}

                </div>
            )                
        })}
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
