import React, {useState/* , useEffect */} from 'react';
import Input from '../../components/Input/Input'
import Submit from '../../components/Submit/Submit';
import axios from 'axios';
import {port, client, login} from '../../api/api'; 
import Header from '../../components/Header/Header';
import './Login.css';
import {useHistory} from 'react-router-dom';  
import Logo from '../../img/logoclinic.png'
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/usertype'





const Login = (props) => {

    let history = useHistory();


    const [dataLogin, setLogin] = useState({
        
        email: '',
        password: '',
        userType: ''
       
    });

    const [message, setMessage] = useState('')

    const handleState = (event) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    const loginMe = async () => {

        console.log('Estamos dentro de la función logeame');
    

        try {

        let result = await axios.post(port+client+login, dataLogin)
            if(result) {
               let propiedades = props.dispatch({type: LOGIN, payload: result});
                console.log(propiedades);
                /* localStorage.setItem("result", JSON.stringify(result.data)); */
                return setTimeout(() => {
                    if (dataLogin.userType === 'Client') {
                        history.push('/user')
                    } else if (dataLogin.userType === 'Admin') {
                        history.push('/admin')
                    } else {
                        alert('Define your role!')
                    }
                }, 2000);
                
            }

        } catch(error) {
            setMessage('Email or password not found');
        }
    };

    return(
        <div className='loginContainer'>
            <Header/> 
            <h1>Log In!</h1>
            <div className='cardLoginContainer'>
                <div className='cardLogin'>
                    
                    <img className="loginLogoImg" alt="logo" src={Logo}/> 
                    
                    <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
                    <Input type='password' name='password' title='Password' lenght='16' onChange={handleState}/>
                    <select type='select' name='userType' onChange={handleState}>
                        <option></option>
                        <option>Client</option>
                        <option>Admin</option>
                    </select>


                </div>

                <div className="messageLogin">
                     <div className="messageErrorLogin">{message}</div>
                     <Submit type='submit' name='submit' title='login' onClick={() => loginMe()}/>
                </div>

            </div>
        </div>
    )

}


export default connect()(Login);