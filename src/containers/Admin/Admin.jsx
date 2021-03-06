import React, {useState} from 'react'
import {connect} from 'react-redux';
import { LOGOUT } from '../../redux/types/adminType';
import {useHistory} from 'react-router-dom';  

import Btn from '../../components/Btn/Bton'
import Config from '../../components/Config/Config'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Tab from '../../components/Tab/Tab'
import TabNav from '../../components/Tab/TabNav'
import ModalRender from '../Modal/ModalRender'

import gif from '../../img/giphy.gif'
import './Admin.css'
import AllAppoint from '../../components/AllAppoint/AllAppoint';
import AllUsers from '../../components/AllAppoint/AllUsers';



function Admin(props) {
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

 
    if(!props.admin.name){
        return(
            // eslint-disable-next-line
            <div className="gif" alt="gif"><img src={gif}/></div>
            )
    }else {
        return (
            <div className="adminContainer">
                <Navbar/>
                <div className="dataContainer">
                    <div className="profileLeft">
                        <Tab isSelected={tab.selected === 'Profile'}>
                            <div className='configSpacer'></div>
                            <Btn name='Home' path=''/>
                            <ModalRender name="Create Employee" />
                            <Config name="Log Out!" onClick={()=>logOut()}/>
                        </Tab>
                        <Tab isSelected={tab.selected === 'Appointments'}>
                            <div className='configSpacer'></div>
                                <Btn name='Home' path=''/>
                                <ModalRender name="Create Employee" />
                                <Config name="Log Out!" onClick={()=>logOut()}/>
                        </Tab>
                        <Tab isSelected={tab.selected === 'Users'}>
                            <div className='configSpacer'></div>
                                <Btn name='Home' path=''/>
                                <ModalRender name="Create Employee" />
                                <Config name="Log Out!" onClick={()=>logOut()}/>
                        </Tab>
                    </div>
                    <div className="profileCenter">
                        <div className="spacer"></div>
                        <div className="profileCard">
                            <div className="spacer"></div>
                            <div className="cardTab">
                                <TabNav tabs={['Profile', 'Appointments', 'Users']} selected={tab.selected} setSelected={setSelected}>
                                    <Tab isSelected={tab.selected === 'Profile'}>
                                        <div className="cardInfo card">
                                        <Profile
                                            fullName={props.admin.name}
                                            email={props.admin.email}
                                            phoneNumber={props.admin.phoneNumber}
                                            birthDate={props.admin.birthDate}
                                            clientSince={props.admin.createdAt}
                                            updatedAt={props.admin.updatedAt}
                                        />
                                        </div>
                                    </Tab>
                                    <Tab isSelected={tab.selected === 'Appointments'}>
                                        <div className="cardInfo card">
                                            <AllAppoint/>
                                        </div>
                                    </Tab>
                                    <Tab isSelected={tab.selected === 'Users'}>
                                        <div className="cardInfo card">
                                            <AllUsers/>
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
        admin : state.adminReducer.admin,
    }
}

export default connect(mapStateToProps)(Admin);
