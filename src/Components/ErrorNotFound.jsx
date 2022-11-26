import React from 'react'
import error404 from '../imagesClinica/error404.png'
import { Footer } from './Footer'

export const ErrorNotFound = () => {
  return (
    <div className="container">
        <center>
            <br/>
            <h1> PAGINA NO ENCONTRADA </h1>
            <img src = {error404} width="45%" alt="..."/>
        </center>
        <Footer/>
    </div>
  )
  
}

