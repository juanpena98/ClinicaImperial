import React from 'react'
import { Footer } from './Footer'
import Afiliacion from "../imagesClinica/Afiliacion.PNG"
import Condicion from "../imagesClinica/Condicion medica.PNG"
import PazySalvo from "../imagesClinica/pazysalvo.PNG"

export const Certificados = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:60}}>

        <div className = "row">
        <div className = "col-lg-4">
        <img className width="170" height="170" src ={Afiliacion} alt ="..."/>
        <h2 className = "fw-normal"> CERTIFICADO DE AFILIACION </h2>
        <br>
            </br>
            <br>
            </br>
        <p><a className = "btn btn-secondary" href="/FormularioCertificado">Solicitar &raquo;</a></p>
        
        
        </div>
        <div className = "col-lg-4">
            <img className width="170" height="170" src = {PazySalvo} alt ="..."/>
            <h2 className = "fw-normal">CERTIFICADO DE APORTES O PAZ Y SALVO</h2>
            <br>
            </br>
            <p><a className = "btn btn-secondary" href="/FormularioCertificado">Solicitar &raquo;</a></p>
        </div>
        <div className = "col-lg-4">
            <img className width="170" height="170" src ={Condicion} alt ="..."/>
            <h2 className = "fw-normal">CERTIFICADO DE CONDICIÒN MÈDICA DE RIESGO</h2>
           <br>
           </br>
            <p><a className = "btn btn-secondary" href="/FormularioCertificado">Solicitar &raquo;</a></p>

        </div>
        </div>
            </div>
        </center>
        <Footer/>
    </>
  )
}