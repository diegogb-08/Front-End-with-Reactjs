import React, {useState/* , useEffect */} from 'react';
import Input from '../../components/Input/Input'
import Submit from '../../components/Submit/Submit';
import axios from 'axios';
import {port, client, login} from '../../api/api'; 
import Header from '../../components/Header/Header';
import './Login.css';
import {useHistory} from 'react-router-dom';  
import Logo from '../../img/logoclinic.png'





const Login = () => {

    let history = useHistory();


    const [dataLogin, setLogin] = useState({
        
        email: '',
        password: ''
       
    });

    const [message, setMessage] = useState('')

    const handleState = (event) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };
/* 
    useEffect(() => {

    },[]); */

    const logeame = async () => {

        try {

        let result = await axios.post(port+client+login, dataLogin)
            if(result) {
                localStorage.setItem("result", JSON.stringify(result.data));
                return history.push(`/user`) 
            }
        } catch(error) {
            setMessage('Email or password not found');
        }
    }

    return(
        <div className='loginContainer'>
            <Header/> 
            <h1>Log In!</h1>
            <div className='cardLoginContainer'>
                <div className='cardLogin'>
                    
                        <img className="loginLogoImg" alt="logo" src={Logo}/> 
                    
                    <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                    <Input type='password' name='password' title='Password' lenght='16' onChange={handleState}/>

                </div>

                <div className="messageLogin">
                     <div className="messageErrorLogin">{message}</div>
                     <Submit type='submit' name='submit' title='logeame' onClick={() => logeame()}/>
                </div>

            </div>
        </div>
    )

}


export default Login;