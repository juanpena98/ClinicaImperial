import React , {useState, useEffect } from 'react'
import { Footer } from './Footer';
import { Header } from './Header';

export const FormularioCertificados = () => {
    const obtenerRegistros = () => {
        var datos = localStorage.getItem("registrosls");
        if(datos){
            return JSON.parse(datos);
        }else{
            return [];
        }
    }


    const [registrosls, setRegistrosLS] = useState(obtenerRegistros());

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [sexo, setSexo] = useState("");
    const [Horario, setHorario] = useState("");
    const [estudios, setEstudios] = useState("");
    const [terminos, setTerminos] = useState("");
  

    const botonGuardar = (e) => {
        e.preventDefault();
        var miObjeto = { nombre, edad, sexo, Horario,  estudios, terminos }
        setRegistrosLS([...registrosls, miObjeto]);
        limpiarFormulario();
    }


    useEffect(() => {
        localStorage.setItem("registrosls", JSON.stringify(registrosls));
    }, [registrosls]);


    const limpiarFormulario = () => {
        setNombre("");
        setEdad("");
        setSexo("");
        setHorario("");
        setEstudios("");
        setTerminos("");
        document.getElementById("miFormulario").reset();
    }


    const botonEliminar = (miIndex) => {
        if(window.confirm("¿Está Seguro De Querer Eliminar El Registro?")){
            var registrosFiltrados = registrosls.filter((e, index) => {
                return miIndex !== index
            });
            setRegistrosLS(registrosFiltrados);
        }
    }


    return (
<><Header/>
    
    <div className="container">
            <div className="row"><div className="col"><h1>Formulario Certificados</h1></div></div>
            <form id="miFormulario" onSubmit={ botonGuardar }>
                <div className="row">
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="txtnom" placeholder=" "  onChange={(e)=>setNombre(e.target.value)}  required/>
                            <label htmlFor="txtnom">Digite El Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" min={1} max={150} className="form-control" id="txteda" placeholder=" "  onChange={(e)=>setEdad(e.target.value)}  required/>
                            <label htmlFor="txteda">A quien va Dirigido</label>
                        </div>
                        
                        
                        <div className="form-floating mb-3">
                            <input type="number" min={1} max={150} className="form-control" id="txteda" placeholder=" "  onChange={(e)=>setHorario(e.target.value)}  required/>
                            <label htmlFor="txteda">Que Certificado Solicita</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="chk1" name="chk1"  onChange={(e)=>setTerminos(e.target.checked)}  required/>
                            <label className="form-check-label" htmlFor="chk1">Acepto Los Términos y Condiciones</label>
                        </div>
                    
                        <br/>
                        <input type="submit" id="btnsave" value="Guardar" className="btn btn-primary"/>
                        &nbsp;
                        <input type="reset" id="btnclean" value="Limpiar Campos" className="btn btn-primary" onClick={ ()=>(limpiarFormulario()) }/>
                    
                    </div>
                </div>
            </form>

            <br/>

            <div className="table-responsive col-8">
            
            { registrosls.length > 0 &&

            <>
                <table className="table table-bordered table-hover">
                    <thead className="table-primary text-center">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Estudios</th>
                            <th>Terminos</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody className="text-center align-baseline">
                        {
                            registrosls.map((miObjeto, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{miObjeto.nombre}</td>
                                    <td>{miObjeto.edad}</td>
                                    <td>{miObjeto.sexo}</td>
                                    <td>{miObjeto.estudios}</td>
                                    <td>{miObjeto.terminos ? "Aceptados" : "Rechazados"}</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-outline-danger" onClick={ ()=>botonEliminar(index) }>
                                            <i className="bi bi-trash3-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <button type="button" className="btn btn-danger btn-md col-12" onClick={ ()=>setRegistrosLS([]) }>
                    <h5>Borrar Todos Los Elementos!!</h5>
                </button>
            </> 

            }


            { registrosls.length < 1 && <><h2>No Hay Registros Para Listar!!</h2></> }
                            
        </div>
        <Footer/>
    </div></>

  )
}
