import React from 'react'
import Logo from '../imagesClinica/logopequeño.PNG'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <header style={{color:"black"}}>
        <nav className="navbar navbar-expand-lg navbar-ligth bg-green">
            <NavLink to ="/home">
                <img src={Logo}  height="100" alt="No Encontrada"/>
            </NavLink>
            <h1>
                Clinica Integral Imperial
            </h1>

            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <h4><NavLink to ="/home" className="nav-item nav-link text-center" style={{color:"black"}}> Inicio </NavLink></h4>
                    <h4><NavLink to ="/CitasMedicas" className="nav-item nav-link text-center" style={{color:"black"}} > Citas </NavLink></h4>
                    <h4><NavLink to = "/Certificados" className="nav-item nav-link text-center" style={{color:"black"}} > Mis Datos </NavLink></h4>
                    <h4><NavLink to ="/Mensajes" className="nav-item nav-link text-center" style={{color:"black"}} >Mi Afiliación</NavLink></h4>

                 </div>


            </div>
        </nav>

    </header>
    
    
    </>
  )
}
