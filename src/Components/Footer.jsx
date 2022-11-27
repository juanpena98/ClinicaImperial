import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li><NavLink to ="/FormularioCertificado" className="nav-item nav-link text-center" style={{color:"black"}}> Solicita tu Certificado </NavLink></li>
            <li><NavLink to ="/Centros" className="nav-item nav-link text-center" style={{color:"black"}}> Centros de Atencion </NavLink></li>
            <li><NavLink to ="/Mensajes" className="nav-item nav-link text-center" style={{color:"black"}}> PQRs </NavLink></li>    
            <li><NavLink to ="/AcercaDe" className="nav-item nav-link text-center" style={{color:"black"}}> AcercaDe </NavLink></li>    
                
            </ul>
            <p className="text-center text-muted">&copy; 2022 Clinica Imperial.</p>
        </footer>
    </div>
  )
}
