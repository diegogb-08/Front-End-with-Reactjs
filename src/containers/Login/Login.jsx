import React, {useState, useEffect} from 'react';
import Input from '../../components/Input/Input'
import Submit from '../../components/Submit/Submit';
import axios from 'axios';
import {port, client, login} from '../../api/api';




const Login = () => {

    const [dataLogin, setLogin] = useState({
        
        email: '',
        password: ''
       
    })

    const handleState = (event) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    useEffect(() => {

    },[]);

    const logeame = async () => {
        let result = await axios.post(port+client+login, dataLogin)
        console.log(result);
    }

    return(
        <div>
            <Input type='email' name='email' title='Email' lenght='30' onChange={handleState}/>
             <Input type='password' name='password' title='Password' lenght='16' onChange={handleState}/>
            <Submit type='submit' name='submit'title='logeame' onClick={() => logeame()}/>
        </div>
    )

}


export default Login;