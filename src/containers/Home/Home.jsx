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
            <div className='navbarContainer'>
                  <nav id="navbar-example3" class="navbar navbar-light bg-light">
                      <nav class="nav nav-pills flex-column">
                        <a class="nav-link" href="#item-1">Nuestros Tratamientos</a>
                        <a class="nav-link" href="#item-2">Nuestro color es el blanco</a>
                        <a class="nav-link" href="#item-3">Opiniones de nuestros pacientes</a>
                        <a class="nav-link" href="#item-4">¿Dónde estamos?</a>
                        
                      </nav>
                    </nav>

                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabindex="0">
                      <h4 id="item-1">Nuestros Tratamientos</h4>
                      <div class="container">
                        <div class="row row-cols-2">
                          <div class="col">Implantología</div>
                          <div class="col">Prótesis dentales</div>
                          <div class="col">Ortodoncia</div>
                          <div class="col">Caries</div>
                        </div>
                        </div>
                      
                      <h4 id="item-2">Nuestro color favorito es el blanco</h4>
                      <p>En los centros odontológicos JessDieg nos gusta el blanco de tus dientes.<br/>
                      Por eso, te ofrecemos el mejor servicio en alta estética dental e implantología, utilizando las últimas tecnologías y manteniéndonos a la vanguardia desde el año 2004.<br/>
                      Ofrecemos una atención personalizada, con facilidades de pago y revisiones completas.</p>
                      <h4 id="item-3">Opiniones de nuestros pacientes</h4>
                      <p>...</p>
                      <h4 id="item-4">¿Dónde estamos?<img className="GeoImg" alt="localitation" src={Geo}/></h4>
                      <p>C/Almirante Cadarso,26<br/><br/>46021, Valencia.</p>
                     
                    </div>

                        {/* 
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
                        */}
                                </div>
        </div>
        
    )
}

export default Home;