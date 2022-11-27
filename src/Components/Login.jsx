import React, { useState } from 'react'
import { Header } from './Header'
import { Home } from './Home'
import Logo from '../imagesClinica/logo.png'

export const Login = () => {
  const [miLogin, setLogin] = useState ("False");
  const [usu, setUsu] = useState ("");
  const [pas, setPas] = useState ("");

  function iniciarSesion (e) {
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;

    if (txtusu.length === 0 || txtpas.length === 0 ){
      alert("Por favor complete los Datos Faltantes!!");
    }else{
      if(usu === "admin" && pas === "123"){
        setLogin ("true");
        document.getElementById("form_Login").style.display = "none"; <Home/>

      }else{
        setLogin("False");
        alert ("Error De Usuario y/o Contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }


  return (

    <div className="container" style={{background:"#DDFED7", marginTop:20, padding:20}}>
        
    <form id="form_login">
        <div>
        <img className="rounded-lg-3" src={Logo} alt=""/>
        <br>
        </br>
            <h1 style={{color:"black", textalign:"center"}}>Bienvenido A la Clinica Imperial</h1>
            <label htmlFor="txtusu"><strong>Usuario</strong></label>
            <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control" onChange={ (e) => setUsu(e.target.value)} required/>
        </div>
        <div>
            <label htmlFor="txtpas"><strong>Password</strong></label>
            <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control" onChange={ (e) => setPas(e.target.value)} required/>
        </div><br/>
        <input type="submit" className="btn btn-primary" value="Iniciar Sesion" onClick={ iniciarSesion }/>
    </form>
{miLogin === "true" && <Home/> }
</div>
  )
}
