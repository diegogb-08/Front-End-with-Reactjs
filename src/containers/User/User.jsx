import React, {useState,useEffect} from 'react'
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

    useEffect(()=> {
        
        if(user.profile?.fullName)
        console.log(user.profile)
    });
   
     // FUNCTIONS
     const setSelected = (tab) => {
        setTab({selected: tab});
    }


    return (
        <div className="userContainer">
            <Navbar/>
            <div className="dataContainer">
                <div className="profileLeft">
                    <Tab isSelected={tab.selected === 'Profile'}>
                        <div >
                        Aqui van los controladores del usuario. Update. Log out, Home
                        
                        </div>
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
                                    <Profile initialName="D"></Profile>
                                    
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

export default User

