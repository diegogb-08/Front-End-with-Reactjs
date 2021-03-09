import React from 'react';
import Header from '../../components/Header/Header';
import './Home.css';
import Photo from '../../img/mainPhotoGirls.png'



const Home = (props) => {

   

    return (
        <div className="homeContainer">
            <Header/>
            <div className="mainPhoto">
            <img className="homePhoto" alt="working" src={Photo}/> 
            </div>
            <div className="mainDescription">¿QUIENES SOMOS?</div>
            
        </div>
        
    )
}

export default Home;