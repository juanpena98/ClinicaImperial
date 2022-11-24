import React from 'react'
import img_banner1 from '../imagesClinica/Banner 10.PNG'
import img_banner2 from '../imagesClinica/Banner 20.PNG'
import img_banner3 from '../imagesClinica/Banner 30.PNG'
import img_banner4 from '../imagesClinica/Banner 40.PNG'


export const Banner = () => {
  return (
    <div className="container" style={{marginTop:20, marginBottom:20}}>
        
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
             <img src={img_banner1} className="d-block w-100" alt="Comunicacion no disponible, intentelo mas tarde"/>
    </div>
    
    <div className="carousel-item">
      <img src={img_banner2} className="d-block w-100" alt="Comunicacion no disponible, intentelo mas tarde"/>
    </div>
    
    <div className="carousel-item">
      <img src={img_banner3} className="d-block w-100" alt="Comunicacion no disponible, intentelo mas tarde"/>
    </div>
    

    <div className="carousel-item">
      <img src={img_banner4} className="d-block w-100" alt="Comunicacion no disponible, intentelo mas tarde"/>
    </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
    </button>
    </div>

       
       </div>
  )
}
