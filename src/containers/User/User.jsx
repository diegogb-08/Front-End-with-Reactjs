import React, {useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Tab from '../../components/Tab/Tab'
import TabNav from '../../components/Tab/TabNav'

import './User.css'



const User = () => {

    
    const [tab, setTab] = useState({
        selected: 'Profile'
    })

    const setSelected = (tab) => {
        setTab({selected: tab});
    }

    useEffect(()=> {
        
        // componentDidMount() User info and Token will be mounted here 
        
        const result = JSON.parse(localStorage.getItem('result'))
        console.log(result)
    },[]);
    
    return (
        <div className="userContainer">
            <Navbar/>
            <div className="dataContainer">
                <div className="profileLeft"></div>
                <div className="profileCenter">
                    <div className="spacer"></div>
                    <div className="profileCard">
                        <div className="spacer"></div>
                        <div className="cardTab">
                            <TabNav tabs={['Profile', 'Appointments']} selected={tab.selected} setSelected={setSelected}>
                                <Tab isSelected={tab.selected === 'Profile'}>
                                    <div className="cardInfo card">

                                    
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

