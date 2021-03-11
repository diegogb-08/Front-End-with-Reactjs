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

    // useEffect(()=> {
    //     console.log(index)
    //     //Se ejecuta tras la primera actualización (montado), equivale a componentDidMount()
    //     console.log("HOLA, COMPONENTE MONTADO POR PRIMERA VEZ");
    //     // const user = localStorage.getItem('user')
        
    // },[]);
    
    // const name = 'Diego'

    // const changeZIndex = () => {
    //     setIndex('1')
    // }



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

