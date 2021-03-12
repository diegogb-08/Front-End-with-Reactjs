import React from 'react';

import Header from '../../components/Header/Header';
import Slideshow from '../../components/Slideshow/Slideshow'
import './Home.css';

import Geo from '../../img/geo.png'



const Home = (props) => {

   
    return (
        <div className="homeContainer">
            <Header/>
            <Slideshow/>
             <div className="spaceHeader"></div>

            <div className="mainDescription">
                <h2>Bienvenidos a la clínica dental JessDieg</h2>
                <h3>¿Quiénes Somos?</h3>
                <p>Somos un equipo de profesionales cuidando su salud bucal.<br/><br/>
                JessDieg es tu sitio de confianza donde ofrecemos la más alta calidad en servicios integrales de odontología.<br/><br/>
                Contamos con todas las especialidades en el ámbito dental, utilizando las últimas tecnologías.
                </p>
                <h3>¿Dónde estamos?<img className="GeoImg" alt="localitation" src={Geo}/></h3>
                <p>C/Almirante Cadarso,26<br/><br/>46021, Valencia.</p>  
            </div>

        </div>
        
    )
}

export default Home;