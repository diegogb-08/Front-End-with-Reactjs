import React, {useState,useEffect} from 'react'
import Btn from '../../components/Btn/Bton'
import Config from '../../components/Config/Config'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Tab from '../../components/Tab/Tab'
import TabNav from '../../components/Tab/TabNav'

import './User.css'



const User = () => {

    // HOOKS
    
    const [tab, setTab] = useState({
        selected: 'Profile'
    })

    const [user, setUser] = useState({
        profile: []
    })


   
    useEffect(()=> {
        
        // componentDidMount() User info and Token will be mounted here 
        
        const result = JSON.parse(localStorage.getItem('result'))
        setUser({...user, profile: result.user})
    },[]);

  
   
     // FUNCTIONS
     const setSelected = (tab) => {
        setTab({selected: tab});
    }

    const updateUser = () => {
        
    }

    const logOut = () => {
        
    }

    const getFirstName = (fullName) => {
        const firstName = fullName.split(' ')
        const name = firstName[0]
        console.log(name)
        return name;
    }

    const getInitial = (fullName) => {
        const initial = getFirstName(fullName).charAt(0);
        console.log(initial)
        return initial;
    }

    if(!user.profile?.fullName){
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
                            <Config name="Update User" onClick={updateUser}/>
                            <Config name="Log Out!" onClick={logOut}/>
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
                                            name={getFirstName(user.profile.fullName)}
                                            initialName={getInitial(user.profile.fullName)}
                                            fullName={user.profile.fullName}
                                            userName={user.profile.userName}
                                            birthDate={user.profile.birthDate}
                                            email={user.profile.email}
                                            phoneNumber={user.profile.phoneNumber}
                                            clientSince={user.profile.createdAt}
                                            updatedAt={user.profile.updatedAt}
                                        ></Profile>
                                        </div>
                                    </Tab>
                                    <Tab isSelected={tab.selected === 'Appointments'}>
                                        <div className="cardInfo card">
                                            <p>PPPPPPPPPPPPPPPPPPPPPPPPPP</p>
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

export default User

