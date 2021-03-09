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
            <div className="freeCall">
            </div>
            <div>
            <Btn nombre='Home' destino=''/>
            </div>
            <div>
            <Btn nombre='¡Regístrate!' destino='register'/>
            </div>
            <div>
            <Btn nombre='Mi Perfil' destino='profile'/>
            </div>
            
            
        </div>
    )
}

export default Header;