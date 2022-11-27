import React from 'react'
import { Footer } from './Footer'
import citas from "../imagesClinica/MedicinaG.PNG"
import Odonto from "../imagesClinica/odontologiaG.PNG"
import cardio from "../imagesClinica/CardiologiaG.PNG"
import { Header } from './Header'

export const CitasMedicas = () => {
  return (
    <>
    <Header/>
        <center>
            <div className="container" style={{marginTop:60}}>

        <div className = "row">
        <div className = "col-lg-4">
        <img className = "rounded-cicle" width="170" height="170" src ={citas} alt ="..."/>
        <h2 className = "fw-normal"> MEDICINA GENERAL </h2>
        <br>
            </br>
        <p><a className = "btn btn-secondary" href="/Formulario">Agendar &raquo;</a></p>
        
        
        
        </div>
        <div className = "col-lg-4">
            <img className = "rounded-circle" width="170" height="170" src = {Odonto} alt ="..."/>
            <h2 className = "fw-normal">ODONTOLOGIA</h2>
            <br>
            </br>
            <p><a className = "btn btn-secondary" href="/FormularioOdonto">Agendar &raquo;</a></p>
        </div>
        <div className = "col-lg-4">
            <img className="rounded-circle" width="170" height="170" src ={cardio} alt ="..."/>
            <h2 className = "fw-normal">CARDIOLOGIA</h2>
           <br>
           </br>
            <p><a className = "btn btn-secondary" href="/FormularioCardio">Agendar &raquo;</a></p>
        </div>
        </div>
            </div>
            <Footer/>
        </center>
    </>
  )
}
