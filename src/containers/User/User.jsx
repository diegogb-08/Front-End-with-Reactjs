import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './User.css'
import 'antd/dist/antd.css';
import {Avatar} from 'antd';


const User = () => {

    // const user = localStorage.getItem('user')
    // const name = 'Diego'

    return (
        <div className="userContainer">
            <Navbar/>
            <div className="dataContainer">
                <div className="profileLeft"></div>
                <div className="profileCenter">
                    
                <Avatar size={100} style={avatar}>D</Avatar>
                </div>
            </div>

        </div>
    )
}

export default User

const avatar = {
    color: 'white',
    backgroundColor: 'rgb(65,187,236)',
    fontSize: '4rem'
}
