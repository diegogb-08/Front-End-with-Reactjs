import React, {useState/* , useEffect */} from 'react';
import Input from '../../components/Input/Input'
import Submit from '../../components/Submit/Submit';
import axios from 'axios';
import {port, client, admin, login} from '../../api/api'; 
import Header from '../../components/Header/Header';
import './Login.css';
import {useHistory} from 'react-router-dom';  
import Logo from '../../img/logoclinic.png'
import {connect} from 'react-redux';

import {LOGIN} from '../../redux/types/userType'
import {LOGINADMIN} from '../../redux/types/adminType'

const Login = (props) => {

    let history = useHistory();


    const [dataLogin, setLogin] = useState({

         
        email: '',
        password: '', 
        userType: 'Client'
       
    });  

    const [userAppointment, setAppoint] = useState({
       
        appointment: [] 
    });

    const [message, setMessage] = useState('')

    const handleState = (event) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
        setAppoint({...userAppointment, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }; 

    const loginMe = async () => {

        try {

            if (dataLogin.userType === 'Client') {

                let result = await axios.post(port+client+login, dataLogin);
                if(result) {

                    props.dispatch({type: LOGIN, payload: result.data});
                    history.push('/user')
                }
            } else {
                let resultAdmin = await axios.post(port+admin+login,dataLogin)
                props.dispatch({type: LOGINADMIN, payload: resultAdmin.data});
                history.push('/admin')
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
                        
                        <option>Client</option>
                        <option>Admin</option>
                    </select>


                </div>

                <div className="messageLogin">
                     <div className="messageErrorLogin">{message}</div>
                     <Submit type='submit' name='submit' title='Login' onClick={() => loginMe()}/>
                </div>

            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        token : state.userReducer.token,
        appointment: state.appointReducer.appointment
    }
}

export default connect(mapStateToProps)(Login);