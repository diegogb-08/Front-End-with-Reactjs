import React, {useState} from 'react';
import axios from 'axios';
import './Register.css';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Submit from '../../components/Submit/Submit';
import checkError from '../../components/Tools/Tools';
import {port, client} from '../../api/api';




const Register = () => {

    //HOOKS
    
    const [user, setUser] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        password2: '',
        birthDate: '',
        phoneNumber: '',
        address: ''
    })
    

    
    const [message, setMessage] = useState('')

    // HANDLERS

    const handleState = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    
    // FUNCTIONS

    const submit = async () => {

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
            password: user.password,
            birthDate: user.birthDate,
            phoneNumber: user.phoneNumber,
            address: user.address

        }

        console.log('el body es.....', body)

        //REST API 

        let data = await axios.post(port+client,body)
        console.log(data)
    }


    return (
        <div className="registerContainer">
            <Header/>
            <h1>Register</h1>
            <p>Create your account. It's free and only takes a minute.</p>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className='cardContainer'>
                <div className="cardRegister">
                    <Input type='text' name='fullName' title='Full Name' lenght='30' onChange={handleState} />
                    <Input type='text' name='userName' title='User Name' lenght='30' onChange={handleState}/>
                    <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                    <Input type='number' name='phoneNumber' title='Phone Number' lenght='12' onChange={handleState}/>
                    <Input type='password' name='password' title='Password' lenght='16' onChange={handleState}/>
                    <Input type='password' name='password2' title='Repeat Password' lenght='16' onChange={handleState} />
                    <Input type='date' name='birthDate' title='Date of Birth' lenght='30' onChange={handleState}/>
                    <Input type='text' name='address' title='Full Address' lenght='250' onChange={handleState}/>
                </div>
                <div className="messageSubmit">
                    <div className="message">{message}</div>
                    <Submit type='submit' name='submit' onClick={()=>submit()} title='Click to register' />
                </div>
            </div>
            <div className="spacer"></div>
        </div>
    )
}

export default Register
