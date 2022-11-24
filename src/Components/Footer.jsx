import React from 'react'

export const Footer = () => {
  return (
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Horarios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Medicamentos</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Servicios</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Configuracion</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            </ul>
            <p className="text-center text-muted">&copy; 2022 Clinica Imperial.</p>
        </footer>
    </div>
  )
}
