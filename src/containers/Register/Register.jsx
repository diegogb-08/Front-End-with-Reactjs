import React, {useState} from 'react';
// import axios from 'axios';
import './Register.css';
import Input from '../../components/Input/Input';




const Register = () => {

    //HOOKS

    const [user, setUser] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        birthDate: '',
        phoneNumber: '',
        address: ''
    })

    const [message, setMessage] = useState('')

    // HANDLERS

    const handleState = (event) => {
        console.log(event)
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    
    // FUNCTIONS

    const submit = async () => {

        //Error checking
        console.log(user.email)
        if(! /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/.test(user.email)){
            return setMessage('*The email does not have the expected format.');

        }

        if(user.name === ''){
            return setMessage('You must fill up the name field')
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

        // let data = await axios.post('http://localhost:3000/users',body)

    }


    return (
        <div className="registerContainer">
            <h1>Register</h1>
            <p>Create your account. It's free and only takes a minute.</p>
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className='cardContainer'>
                <div className="cardRegister">
                    <Input type='text' name='fullName' title='Full Name' lenght='30' onChange={handleState} />
                    <Input type='text' name='userName' title='User Name' lenght='30' onChange={handleState}/>
                    <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                    <Input type='number' name='phoneNumber' title='Phone Number' lenght='12' />
                    <Input type='password' name='password' title='Password' lenght='16' onChange={handleState}/>
                    <Input type='password' name='password2' title='Repeat Password' lenght='16' onChange={handleState} />
                    <Input type='date' name='birthDate' title='Date of Birth' lenght='30' onChange={handleState}/>
                    <Input type='text' name='address' title='Full Address' lenght='250' onChange={handleState}/>
                    </div>
                    <div className="spacer message">{message}</div>
                    <button className='submitBtn' type="submit" name='submit' onClick={()=>submit()}>Click to register</button>
                    <div className="spacer"></div>
            </div>
            <div className="spacer"></div>
        </div>
    )
}

export default Register
