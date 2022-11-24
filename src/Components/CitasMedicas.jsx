import React from 'react'
import citas from "../imagesClinica/Medicina.PNG"
import Odonto from "../imagesClinica/odontologia.PNG"
import cardio from "../imagesClinica/Cardiologia.PNG"

export const CitasMedicas = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:60}}>

        <div class="row">
        <div class="col-lg-4">
        <img className="rounded-cicle" src ={citas} alt ="..."/>
        <h2 class="fw-normal">MEDICINA GENERAL</h2>
        <br>
            </br>
        <p><a class="btn btn-secondary" href="#">Agendar &raquo;</a></p>
        
        
        </div>
        <div class="col-lg-4">
            <img className="rounded-circle" src = {Odonto} alt ="..."/>
            <h2 class="fw-normal">ODONTOLOGIA</h2>
            <br>
            </br>
            <p><a class="btn btn-secondary" href="#">Agendar &raquo;</a></p>
        </div>
        <div class="col-lg-4">
            <img className="rounded-circle" src ={cardio} alt ="..."/>
            <h2 class="fw-normal">CARDIOLOGIA</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        </div>
            </div>
        </center>
    </>
  )
}
