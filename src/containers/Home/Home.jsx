import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';



const Home = (props) => {

   

    return (
        <div className="homeContainer">
            <Header/>
            <div className="mainPhoto">FOTO PEÑA SONRIENDO</div>
            <div className="mainDescription">¿QUIENES SOMOS?</div>
            
        </div>
        
    )
}

export default Home;