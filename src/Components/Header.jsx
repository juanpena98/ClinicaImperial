import React from 'react'
import Logo from '../imagesClinica/logo.png'

export const Header = () => {
  return (
    <>
    <header style={{color:"white"}}>
        <nav className="navbar navbar-expand-lg navbar-ligth bg-green">
            <a href="">
                <img src={Logo} height="100" alt="No Encontrada"/>
            </a>
            <h1>
                Clinica Integral Imperial
            </h1>

            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Inicio</a></h4>
                    <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Citas</a></h4>
                    <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Mis Datos</a></h4>
                    <h4><a className="nav-item nav-link" style={{color:"white"}} href=" ">Mi Afiliación</a></h4>

                </div>

            </div>
        </nav>

    </header>
    
    
    </>
  )
}
