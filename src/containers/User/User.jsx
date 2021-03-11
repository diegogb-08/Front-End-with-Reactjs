import React, {useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Tab from '../../components/Tab/Tab'
import './User.css'



const User = () => {

    const [index, setIndex] = useState([
        {zIndex: '0'},
        {zIndex: ''}
    ])


    const changeZIndex = (index) => {
        console.log(index)
        if(index === ""){
            setIndex({...index, zIndex: '0'})
        }else{
            setIndex({...index, zIndex: '0'})
        }
        // setIndex(...index, index.move(0,1))
        
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
                    <div className="card">
                        <div className="tabCollection">
                            <Tab tabs="Profile" style={index[0]} onClick={()=>changeZIndex(index[0])} />
                            <Tab tabs="Appointments" style={index[1]} onClick={()=>changeZIndex(index[1])}/>
                        </div>
                        <div className="infoCard">

                        </div>
                    </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default User

