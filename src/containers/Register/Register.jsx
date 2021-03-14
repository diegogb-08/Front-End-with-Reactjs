import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './Register.css';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Submit from '../../components/Submit/Submit';
import checkError from '../../components/Tools/Tools';
import {port, client} from '../../api/api';
import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

const Register = () => {

    const eyeElement = <FontAwesomeIcon icon={faEye} />
    const eyeSlashElement = <FontAwesomeIcon icon={faEyeSlash} />

    let history = useHistory();

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


    
    const [password, setPassword] = useState({
        hideShow: 'password',
        eye: eyeSlashElement
    })

    const [password2, setPassword2] = useState({
        hideShow: 'password',
        eye: eyeSlashElement
    })

    // HANDLERS
    const handleState = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    const showPassord = () => {

        if(password.hideShow === "password"){
            return setPassword({...password, hideShow: 'text', eye: eyeElement});
        }else{
            return setPassword({...password, hideShow: 'password', eye: eyeSlashElement});
        }
    }

    const showPassord2 = () => {

        if(password2.hideShow === "password"){
            return setPassword2({...password2, hideShow: 'text', eye: eyeElement});
        }else{
            return setPassword2({...password2, hideShow: 'password', eye: eyeSlashElement});
        }
    }
   
    useEffect(()=> {
        console.log('This is password 1 ', password.hideShow)
        console.log('This is Password 2 ', password2.hideShow )
    });

   
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


        //REST API 
        try{
            let data = await axios.post(port+client,body)
            if(data) return history.push(`/login`)
        }catch(error){
            setMessage('The user name, email or phone number already exist!') 
        }

    }

    return (
        <div className="registerContainer">
            <Header/>
            <div className="content">
                <h1>Register</h1>
                <div className="line"></div>
                <p>Create your account.<br/>
                It's free and only takes a minute.</p>
            </div>
            <div className="columnCardRegister">
                <div className='cardContainer'>
                    <div className="cardRegister">
                        <Input type='text' name='fullName' title='Full Name' lenght='30' onChange={handleState} />
                        <Input type='text' name='userName' title='User Name' lenght='30' onChange={handleState}/>
                        <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                        <Input type='number' name='phoneNumber' title='Phone Number' lenght='12' onChange={handleState}/>
                        <Input type={password.hideShow.toString()} eye={password.eye} onClick={() => showPassord()} name='password' title='Password' lenght='16' onChange={handleState}/>
                        <Input type={password2.hideShow.toString()} eye={password2.eye} onClick={() => showPassord2()} name='password2' title='Repeat Password' lenght='16' onChange={handleState} />
                        <Input type='date' name='birthDate' title='Date of Birth' lenght='30' onChange={handleState}/>
                        <Input type='text' name='address' title='Full Address' lenght='250' onChange={handleState}/>
                    </div>
                    <div className="messageSubmit">
                        <div className="message">{message}</div>
                        <Submit type='submit' name='submit' onClick={()=>submit()} title='Click to register' />
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Register
