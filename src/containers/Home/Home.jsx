import React from 'react';

import Header from '../../components/Header/Header';
import Slideshow from '../../components/Slideshow/Slideshow'
import './Home.css';

import Ortodoncia from '../../img/ortodoncia.png'
import Caries from '../../img/cavities.png'
import Implantologia from '../../img/implantology.jpg'
import Blanqueamiento from '../../img/whitening.png'
import Geo from '../../img/geo.png'
import Mail from '../../img/mail.png'
import Call from '../../img/call.png'


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
                <div className="card bg-light text-dark">
                  <div className="imgContainer">
                  <img className="card-img-top" src={Ortodoncia} alt="Card image cap"/>
                  </div>
                  <div className="card-body">
                    <h5>Orthodontics</h5>
                    <p className="card-text">we are specialists in the placement of Invisalign orthodontics in Valencia.</p>
                  </div>
                </div>
                
                </div>

                <div className="col">
                  <div className="card">
                    <div className="imgContainer">
                    <img className="card-img-top" src={Caries} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                      <h5>Cavities</h5>
                      <p className="card-text">The best defense against cavities is good oral hygiene, including brushing, flossing and rinsing.</p>
                    </div>
                  </div>
                  </div>

                <div className="col">
                    <div className="card mt-3">
                      <div className="imgContainer">
                      <img className="card-img-top" src={Blanqueamiento} alt="Card image cap"/>
                      </div>
                      <div className="card-body">
                        <h5>Teeth Whitening</h5>
                        <p className="card-text">Tooth whitening is an aesthetic procedure to lighten the tone of the teeth and give more luminosity to the smile.</p>
                      </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card bg-light text-dark mt-3">
                    <div className="imgContainer">
                    <img className="card-img-top" src={Implantologia} alt="Card image cap"/>
                    </div>
                    <div className="card-body">
                      <h5>Dental Implantology</h5>
                      <p className="card-text">Therefore, it is not the implant itself that is visible in the mouth, but rather the prosthesis or crown.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='designDiv'></div>
            <div className="contactContainer">
              <h3>CONTACT</h3>
              <hr/>
              <div className='div-contact-column'>
              <div className='address'>
              <h6>Where we are?<img className="GeoImg" alt="localitation" src={Geo}/></h6>
              <p>C/Almirante Cadarso,26<br/>46021, Valencia.</p>
              </div>  
              <div className='email'>
                <h6>Email:&nbsp;&nbsp;<img className="email" alt="localitation" src={Mail}/></h6>
                <p>jessDiegDental@clinic.com<br/>hi@clinic.com</p>
              </div>
              <div className='telephone'>
                <h6>Phone &amp; whatsApp:&nbsp;&nbsp;<img className="telephone" alt="localitation" src={Call}/></h6>
                <p>612312312<br/>612312313</p>
              </div>    
              </div>
            </div>
            </div>
           

           
        </div>
        
    )
}

export default Home;