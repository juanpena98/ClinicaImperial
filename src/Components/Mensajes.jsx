import React from 'react'

export const Mensajes = () => {
  return (
    <center>
        <div className="container" style={{width:"70%", marginTop:20, background:"#E5FFE0", padding:20}}>
            <form id="MensajesYsugerencias">
            <h1 className='h1'>Mensajes y Sugerencias</h1>
            <input style = {{marginBottom:20}} className="form-control form-control-lg" type="text" placeholder="Digite su Nombre"/>
            <input style = {{marginBottom:20}} className="form-control form-control-lg" type="email" placeholder="Digite su Email"/>
            <textarea className="form-control form-control-lg" placeholder="Digite su mensaje">
            </textarea>
                <button className='btn btn-primary btn-lg'>
                Enviar mensaje
            </button>
    
    
            </form>
        </div>  
    </center>
  )
}
