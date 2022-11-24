import React from 'react'
import card1 from '../imagesClinica/card1.jpg'
import card20 from '../imagesClinica/card20.jpg'
import card3 from '../imagesClinica/card3.png'
import card4 from '../imagesClinica/card4.jpg'
import card5 from '../imagesClinica/card5.jpg'


export const ContentHome = () => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
        
            <div className="col">
                <div className="card">
                <img src={card20} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Servicios de la Clinica</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>Clínica Imperial cuenta igualmente con servicios de laboratorio
                     clínico, servicio de imágenes diagnósticas (rayos x, ecografía, tomografía, etc.) 
                     y unidad de patología, Clínica Imperial se encuentra ubicada en la ciudad de Bogotá, 
                     pero recibe pacientes de cualquier parte del país.
                     </p>
                </div>
                </div>
            </div>
        
            <div className="col">
                <div className="card">
                <img src={card3} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Sedes Clìnica Imperial</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>
                        Clínica Imperial tiene tres sedes, una para consulta externa y otras dos sedes para
                        servicios de emergencia, cirugía y hospitalización. En la segunda sede cuenta con
                        250 camas, incluidas 90 para servicio de cuidados intensivos y otras 200 de
                        hospitalización de otras patologías en la tercer sede.
                        </p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card">
                <img src={card1} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title" >Clinica Imperial</h5>
                    <p className="card-text"style={{textAlign:"justify"}}>
                        Clínica Imperial es una clínica privada dedicada a la consulta externa, 
                        cirugías,tratamiento de enfermedades crónicas y servicio de urgencias 
                        para todo tipo de pacientes y edades.
                    </p>
                </div>
                </div>
            </div>



            <div className="col">
                <div className="card">
                <img src={card4} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Situacion Actual</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>
                    Está construyendo desde hace 3 años un centro de tratamiento de cáncer en Medellín, 
                    cuya inversión asciende a $390.000k millones de pesos y se pondrá en funcionamiento 
                    en 2025.
                    </p>
                </div>
                </div>
            </div>


            <div className="col">
                <div className="card">
                <img src={card5} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Situacion Actual</h5>
                    <p className="card-text"style={{textAlign:"justify"}}>
                    La clínica adelanta proyectos de investigación de lucha contra el cáncer por $17.500k 
                    millones de pesos al año. 
                    </p>
                </div>
                </div>
                </div>
            
            
            </div>
    </div>    
  )
}
