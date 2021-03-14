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
                          <div class="col">Implantología
                            <p>Realizamos la colocación de implantes mediante cirugía tradicional para que tú recuperes la belleza de tu sonrisa.</p>
                          </div>
                          <div class="col">Prótesis dentales
                            <p>Recuperamos las piezas perdidas y reparamos tus dientes dañados a través de tratamientos fijos o removibles.</p>
                          </div>
                          <div class="col">Ortodoncia
                            <p>Corregimos y realizamos tratamientos para pacientes de cualquier edad. Colocamos tus dientes.</p>
                          </div>
                          <div class="col">Caries
                            <p>Antes de que te duela, realiza una visita periódica al odontólogo y te ayudará a prevenir la caries.</p>
                          </div>
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
            </div>
        </div>
        
    )
}

export default Home;