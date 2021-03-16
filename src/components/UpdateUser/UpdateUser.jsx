import React, {useState} from 'react'
import Input from '../Input/Input'
import Submit from '../Submit/Submit'
import checkError from '../../components/Tools/Tools';
import axios from 'axios';
import {port, client} from '../../api/api';
import './UpdateUser.css';
import {connect} from 'react-redux';
import {UPDATE} from '../../redux/types/usertype'

function UpdateUser(props) {

    //HOOKS
    const [userUpdate, setUser] = useState({
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
    const handleStateUpdate = (event) => {
        setUser({...userUpdate, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    };

    //AUTHORIZATION

    let token = props.user.data.token
    let auth = {
        headers: {
          'Authorization': `Bearer ${token}` 
        }};

    // FUNCTIONS

    const submitUpdate = async () => {

        //Error handling
        setMessage('');

        let error = checkError(userUpdate)
        setMessage(error);

        if(error){
            return;
        }

       
        let body = {

            fullName: userUpdate.fullName,
            userName: userUpdate.userName,
            email: userUpdate.email,
            birthDate: userUpdate.birthDate,
            phoneNumber: userUpdate.phoneNumber,
            address: userUpdate.address
        }

        //REST API 
        try{
            const id = props.user.data.user.id;

            let updatedUser = await axios.put(port+client+'/'+id, body, auth)
            // Updating Redux data
            let dispatch = props.dispatch({ type: UPDATE, payload : {updatedUser}});
            console.log(dispatch)
            if(updatedUser) return toggle()
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
                <Input type='text' name='fullName' title='Full Name' lenght='30' onChange={handleStateUpdate} />
                <Input type='text' name='userName' title='User Name' lenght='30' onChange={handleStateUpdate}/>
                <Input type='email' name='email' title='Email' lenght='30' onChange={handleStateUpdate}/>
                <Input type='number' name='phoneNumber' title='Phone Number' lenght='12' onChange={handleStateUpdate}/>
                <Input type='date' name='birthDate' title='Date of Birth' lenght='30' onChange={handleStateUpdate}/>
                <Input type='text' name='address' title='Full Address' lenght='250' onChange={handleStateUpdate}/>
            </div>
            <div className="messageUpdate">{message}</div>
            <div className="submitUpdate">
                <Submit type='submit' name='submit' onClick={()=>submitUpdate()} title='Update Profile'/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
    }
}
export default connect(mapStateToProps)(UpdateUser);
