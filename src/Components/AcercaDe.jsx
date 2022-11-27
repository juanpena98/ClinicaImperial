import React from 'react'
import Hospital from '../imagesClinica/Hospital.jpg'
import { Footer } from './Footer'
import { Header } from './Header'

export const AcercaDe = () => {
  
    return (
   <>
   <Header/>
    <div className="container my-5">
    
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1">Clinica Imperial</h1>
            <p className="lead"></p>
            <p>
                <br>
                </br>
            Clínica Imperial es una clínica privada dedicada a la consulta externa, cirugías,
            tratamiento de enfermedades crónicas y servicio de urgencias para todo tipo de
            pacientes y edade</p>
            <p>Clínica Imperial cuenta igualmente con servicios de laboratorio clínico, servicio de
                imágenes diagnósticas (rayos x, ecografía, tomografía, etc.) y unidad de patología,
                Clínica Imperial se encuentra ubicada en la ciudad de Bogotá, pero recibe
                pacientes de cualquier parte del país
                </p>
            <p>
                Clínica Imperial cuenta igualmente con servicios de laboratorio clínico, servicio de
                imágenes diagnósticas (rayos x, ecografía, tomografía, etc.) y unidad de patología,
                Clínica Imperial se encuentra ubicada en la ciudad de Bogotá, pero recibe
                pacientes de cualquier parte del país
            </p>
            <p>
            Clínica Imperial cuenta igualmente con servicios de laboratorio clínico, servicio de
                imágenes diagnósticas (rayos x, ecografía, tomografía, etc.) y unidad de patología,
                Clínica Imperial se encuentra ubicada en la ciudad de Bogotá, pero recibe
                pacientes de cualquier parte del país
            </p>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src={Hospital} alt=""/>
          </div>
        </div>
      <Footer/>
      </div>
      </>
      )
    }
    