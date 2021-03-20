import React from 'react';

import Header from '../../components/Header/Header';
import Slideshow from '../../components/Slideshow/Slideshow'
import './Home.css';

import Ortodoncia from '../../img/ortodoncia.png'
import Caries from '../../img/caries.png'
import Implantologia from '../../img/implantologia.png'
import Blanqueamiento from '../../img/blanqueamiento.png'
// import Geo from '../../img/geo.png'
// import Equipo from '../../img/equipoHumano.jpg'
// import Caries from '../../img/caries.png'


const Home = (props) => {

   
    return (
        <div className="homeContainer">
            <Header/>
            <Slideshow/>
            <div className='designDiv'></div>
            <div className='designDiv'></div>

            <div className="container">
              <h3>OUR TREATMENTS</h3>
            <hr/>

            <div className="row row-cols-2">

                <div className="col">
                <div className="card">
                  <div className="imgContainer">
                  <img className="card-img-top" src={Ortodoncia} alt="Card image cap"/>
                  </div>
                  <div className="card-body">
                    <h5>Orthodontics</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                </div>
                
                </div>

                <div className="col">
                  <div className="card bg-info mb-3">
                    <div className="imgContainer">
                    <img className="card-img-top" src={Caries} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                      <h5>Cavities</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                  </div>

                <div className="col">
                    <div className="card bg-info mb-3">
                      <div className="imgContainer">
                      <img className="card-img-top" src={Blanqueamiento} alt="Card image cap"/>
                      </div>
                      <div className="card-body">
                        <h5>Teeth Whitening</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card">
                    <div className="imgContainer">
                    <img class="card-img-top w-50" src={Implantologia} alt="Card image cap"/>
                    </div>
                    <div class="card-body">
                      <h5>Dental Implantology</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             
           {/*  <div className='navbarContainer'>
                  <nav id="navbar-example3" className="navbar-light">
                      <nav className=" nav-pills flex-column">
                        <a className="nav-link text-info" href="#item-1">Nuestros Tratamientos</a>
                        <a className="nav-link text-info" href="#item-2">Nuestros Fundamentos</a>
                        <a className="nav-link text-info" href="#item-3">Nuestro equipo Humano</a>
                        <a className="nav-link text-info" href="#item-4">¿Dónde estamos?</a>
                        
                      </nav>
                    </nav>
                    <div className="infoContainer">
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
                      <h3 id="item-1">Nuestros Tratamientos</h3>
                      <div className="container">
                        <div className="row row-cols-2">
                          <div className="col">
                            <h5>Implantología</h5>
                            <p>Realizamos la colocación de implantes mediante cirugía tradicional para que tú recuperes la belleza de tu sonrisa.</p>
                          </div>
                          <div className="col">
                            <h5>Prótesis dentales</h5>
                            <p>Recuperamos las piezas perdidas y reparamos tus dientes dañados a través de tratamientos fijos o removibles.</p>
                          </div>
                          <div className="col">
                            <h5>Ortodoncia</h5>
                            <p>Corregimos y realizamos tratamientos para pacientes de cualquier edad. Colocamos tus dientes.</p>
                          </div>
                          <div className="col">
                            <h5>Caries{/* <img className="caries" alt="caries" src={Caries}/> </h5>
                            <p>Antes de que te duela, realiza una visita periódica al odontólogo y te ayudará a prevenir la caries.</p>
                          </div>
                        </div>
                        </div>
                      
                      <h3 id="item-2"><br/>Nuestro color favorito es el blanco</h3>
                      <p>En los centros odontológicos JessDieg nos gusta el blanco de tus dientes.<br/>
                      Por eso, te ofrecemos el mejor servicio en alta estética dental e implantología, utilizando las últimas tecnologías y manteniéndonos a la vanguardia desde el año 2004.<br/>
                      Ofrecemos una atención personalizada, con facilidades de pago y revisiones completas.</p>
                      <h3 id="item-3"><br/>Nuestro equipo Humano</h3>
                      <p>La clínica JessDieg, cuenta con un equipo multidisplinar de profesionales que nos ha permitido consolidarnos como empresa en los útlimos años.<br/>
                       Apostamos por personas</p>
                      <img className="humanTeam" alt="humanTeam" src={Equipo}/>
                      
                      <h3 id="item-4"><br/>¿Dónde estamos?<img className="GeoImg" alt="localitation" src={Geo}/></h3>
                      <p>C/Almirante Cadarso,26<br/>46021, Valencia.<br/>Teléfono de contacto: 96345555</p>
                     
                    </div>       
                    </div>
            </div>  */}
        </div>
        
    )
}

export default Home;