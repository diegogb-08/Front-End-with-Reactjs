import React from 'react';
import {connect} from 'react-redux'

import Logo from '../../img/logoclinic.png'
import Btn from '../Btn/Bton';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import NavBtn from '../NavBtn/NavBtn';
import './Header.css';

const Header = (props) => {

    const getFirstName = (fullName) => {
        const firstName = fullName.split(' ')
        const name = firstName[0]
        return name;
    }
    
    return (
        <div className="headerComponent">
            <div className="headerLogo">
                <img className="headerLogoImg" alt="logo" src={Logo}/> 
            </div>
            <div className="designDiv"></div>
            <div className="freeCall"></div>
            {
                !props.user.id
                ?
                <>
                    <div>
                        <Btn name='Home' path=''/>
                    </div>
                    <div>
                        <Btn name='Sign Up!' path='register'/>
                    </div>
                    <div>
                        <Btn name='Login' path='login'/>
                    </div>
                </>
                :
                <>
                    <div>
                        <NavBtn name={getFirstName(props.user.fullName)}>
                            <DropDownMenu/>
                        </NavBtn>
                    </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
        admin : state.adminReducer.admin
    }
}
export default connect(mapStateToProps)(Header);