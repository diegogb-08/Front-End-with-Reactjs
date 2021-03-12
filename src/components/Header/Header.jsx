import React from 'react';
import Logo from '../../img/logoclinic.png'

import Btn from '../Btn/Bton';


import './Header.css';



const Header = (props) => {

   

    return (
        <div className="headerComponent">
            <div className="headerLogo">
                <img className="headerLogoImg" alt="logo" src={Logo}/> 
            </div>
            <div className="designDiv"></div>
            <div className="freeCall"></div>
            <div>
                <Btn name='Home' path=''/>
            </div>
            <div>
                <Btn name='Sign Up!' path='register'/>
            </div>
            <div>
                <Btn name='Login' path='login'/>
            </div>
        </div>
    )
}

export default Header;