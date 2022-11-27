import React from 'react'

export const Listar = () => {
  return (
        
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado De Registro De Pinturas
    </div>

    <div className="table-responsive">
      


      <>
        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Estilo</th>
                    <th>Tecnica</th>
                    <th>Precio</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
                
            </tbody>
        </table>
      </> 
      
      

    </div>
 
  </div>

  )
}
