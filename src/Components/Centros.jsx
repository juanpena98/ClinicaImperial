import React from 'react'
import Hospital from "../imagesClinica/Hospital.jpg"
import HospitalGrace from "../imagesClinica/HospitalGrace.jpg"
import HospitalGraceWest from "../imagesClinica/HospitalGraceWest.jpg"
import { Footer } from './Footer'
import { Header } from './Header'

export const Centros = () => {

    return (
        <>
        <Header/>
            <center>
                <div className="container" style={{marginTop:60}}>
    
            <div className = "row">
            <div className = "col-lg-4">
            <img className = "rounded-cicle" width="170" height="170" src ={Hospital} alt ="..."/>
            <h2 className = "fw-normal"> HOSPITAL DEL NORTE </h2>
            <br>
                </br>
            
            </div>
            <div className = "col-lg-4">
                <img className = "rounded-circle" width="170" height="170" src = {HospitalGrace} alt ="..."/>
                <h2 className = "fw-normal">HOSPITAL DEL CENTRO</h2>
                <br>
                </br>
            </div>
            <div className = "col-lg-4">
                <img className="rounded-circle" width="170" height="170" src ={HospitalGraceWest} alt ="..."/>
                <h2 className = "fw-normal">HOSPITAL DEL SUR</h2>
               <br>
               </br>
            </div>
            </div>
                </div>
                <Footer/>
            </center>
        </>
      )
    
}
