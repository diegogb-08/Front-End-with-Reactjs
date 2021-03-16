import React, {useState} from 'react'
import Input from '../Input/Input'
import Submit from '../Submit/Submit'
import checkError from '../../components/Tools/Tools';
import axios from 'axios';
import {port, client} from '../../api/api';
import './UpdateUser.css'

function UpdateUser() {

    //HOOKS
    const [user, setUser] = useState({
        fullName: '',
        userName: '',
        email: '',
        birthDate: '',
        phoneNumber: '',
        address: ''
    })

    const [message, setMessage] = useState('')

    const [active, setActive] = useState(false);
    const toggle = () => {
        setActive(!active)
    } 

    // HANDLERS
    const handleState = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    // FUNCTIONS

    const submitUpdate = async () => {

        //Error handling
        setMessage('');

        let error = checkError(user)
        setMessage(error);

        if(error){
            return;
        }

       
        let body = {

            fullName: user.fullName,
            userName: user.userName,
            email: user.email,
            birthDate: user.birthDate,
            phoneNumber: user.phoneNumber,
            address: user.address
        }


        //REST API 
        try{
            let data = await axios.post(port+client,body)

            // Here we need to add Redux
            
            if(data) return toggle()
        }catch(error){
            setMessage('The user name, email or phone number already exist!') 
        }

    }

    return (
        <div className="udpateUserComponent">
            <div className="header">
                <h2>Update profile</h2>
            </div>
            <div className="lineForm"></div>
            <div className="formModal">
                <Input type='text' name='fullName' title='Full Name' lenght='30' onChange={handleState} />
                <Input type='text' name='userName' title='User Name' lenght='30' onChange={handleState}/>
                <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                <Input type='number' name='phoneNumber' title='Phone Number' lenght='12' onChange={handleState}/>
                <Input type='date' name='birthDate' title='Date of Birth' lenght='30' onChange={handleState}/>
                <Input type='text' name='address' title='Full Address' lenght='250' onChange={handleState}/>
            </div>
            <div className="messageUpdate">{message}</div>
            <div className="submitUpdate">
                <Submit type='submit' name='submit' onClick={()=>submitUpdate()} title='Update Profile'/>
            </div>
        </div>
    )
}

export default UpdateUser
