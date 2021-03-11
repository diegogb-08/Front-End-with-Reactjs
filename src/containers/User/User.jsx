import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './User.css'



const User = () => {

    // const user = localStorage.getItem('user')
    // const name = 'Diego'

    return (
        <div className="userContainer">
            <Navbar/>
            <div className="dataContainer">
                <div className="profileLeft"></div>
                <div className="profileCenter">
                    

                </div>
            </div>

        </div>
    )
}

export default User

