import React from 'react';
import LocalI from "./Fotos/sushi-local2.jpg"
import Mapa from "./Fotos/mapa-local.png"
import { Button } from 'reactstrap';


export const Local = () => {
    return (
        <div className="row mt-8" id='locales'>
            <div className="col-6" id=''>
                <img src={LocalI} alt="" className="img-thumbnail animate__animated animate__fadeInLeft" id='img-local'/>
                <li className="list-group-item" id='cajas-img'> <b id='tit-local'> FUKUSUKE SUSHI</b>  </li>
            </div>

            <div className="col-8 animate__animated animate__fadeIn" id='grupo-mapa'>
                <ul className="list-group list-group-flush" id='caja-mapa'>
                    <li className="list-group-item" id='cajas-img'> <b id='tit-mapa'> ENCUENTRANOS EN LA SIGUIENTE UBICACION:</b>  </li>
                    <li className="list-group-item" id='cajas-img' > <b> <Button id= 'bt-llegar' target='_blank' href="https://www.google.com/maps/dir/-33.4577548,-70.6573692/Av.+Los+Pajaritos+564,+Maip%C3%BA,+Regi%C3%B3n+Metropolitana/@-33.4937673,-70.7761022,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9662dcdbc10314a5:0x2675813b656a3108!2m2!1d-70.7571816!2d-33.5216098">Como Llegar</Button>
                    </b> AVENIDA PAJARITOS #564 </li>
                    <li className="list-group-item" id='cajas-img'> <img src={Mapa} alt="" className="img-thumbnail animate__animated animate__fadeInLeft" id='img-Mapa' /></li>

                </ul>

            </div>

        </div>
    )
}
