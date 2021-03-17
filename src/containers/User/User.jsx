import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/types/usertype';
import {useHistory} from 'react-router-dom';  

import Btn from '../../components/Btn/Bton'
import Config from '../../components/Config/Config'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Tab from '../../components/Tab/Tab'
import TabNav from '../../components/Tab/TabNav'
import ModalRender from '../Modal/ModalRender'



import './User.css'
import Appointment from '../../components/Appointment/Appointment';



const User = (props) => {

    let history = useHistory();

    // HOOKS
    
    const [tab, setTab] = useState({
        selected: 'Profile'
    })
  
     // FUNCTIONS
     const setSelected = (tab) => {
        setTab({selected: tab});
    }


    const logOut = () => {
        props.dispatch({ type: LOGOUT, payload : {}});

        setTimeout(()=> {
            history.push('/');
        },500);
    }

    const getFirstName = (fullName) => {
        const firstName = fullName.split(' ')
        const name = firstName[0]
        return name;
    }

    const getInitial = (fullName) => {
        const initial = getFirstName(fullName).charAt(0);
        return initial;
    }

    if(!props.user.fullName){
        return(
            <div>CARGANDO</div>
            )
    }else {
            
        return (
            <div className="userContainer">
                <Navbar/>
                <div className="dataContainer">
                    <div className="profileLeft">
                        <Tab isSelected={tab.selected === 'Profile'}>
                            <div className='configSpacer'></div>
                            <Btn name='Home' path=''/>
                            <ModalRender name="Update User" />
                            <Config name="Log Out!" onClick={()=>logOut()}/>
                        </Tab>
                        <Tab isSelected={tab.selected === 'Appointments'}>
                            <div>
                                PPPPPPPPPPPPPPPPPPPPPPPPPP
                            </div>
                        </Tab>
                    </div>
                    <div className="profileCenter">
                        <div className="spacer"></div>
                        <div className="profileCard">
                            <div className="spacer"></div>
                            <div className="cardTab">
                                <TabNav tabs={['Profile', 'Appointments']} selected={tab.selected} setSelected={setSelected}>
                                    <Tab isSelected={tab.selected === 'Profile'}>
                                        <div className="cardInfo card">
                                        <Profile 
                                            name={getFirstName(props.user.fullName)}
                                            initialName={getInitial(props.user.fullName)}
                                            fullName={props.user.fullName}
                                            userName={props.user.userName}
                                            birthDate={props.user.birthDate}
                                            email={props.user.email}
                                            phoneNumber={props.user.phoneNumber}
                                            clientSince={props.user.createdAt}
                                            updatedAt={props.user.updatedAt}
                                        ></Profile>
                                        </div>
                                    </Tab>
                                    <Tab isSelected={tab.selected === 'Appointments'}>
                                        <div className="cardInfo card">
                                            <Appointment
                                            userId={user.profile.id}
                                            userToken={userToken.token}
                    
                                            ></Appointment>
                                            
                                        </div>
                                    </Tab>
                                </TabNav>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user : state.userReducer.user,
    }
}

export default connect(mapStateToProps)(User);

