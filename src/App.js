import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import {Header} from './Components/Header';
import { ErrorNotFound } from './Components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CitasMedicas } from './Components/CitasMedicas';
import { Certificados } from './Components/Certificados';
import { Mensajes } from './Components/Mensajes';
import { Formulario } from './Components/Formulario';
import { Centros } from './Components/Centros';
import { FormularioOdonto } from './Components/FormularioOdonto';
import { FormularioCardio } from './Components/FormularioCardio';
import { AcercaDe} from './Components/AcercaDe'
import { FormularioCertificados } from './Components/FormularioCertificados';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
      <Header/>
      
      <Routes>
      <Route exact path ="/" element = {<Home/>}/>
      <Route exact path="*"element = {<ErrorNotFound/>}/>
      <Route exact path="/home"element = {<Home/>}/>
      <Route exact path="/Certificados" element = {<Certificados/>}/>
      <Route exact path="/CitasMedicas"element = {<CitasMedicas/>}/>
      <Route exact path="/Mensajes" element = {<Mensajes/>}/>
      <Route exact path="/Centros" element = {<Centros/>}/>
      <Route exact path="/Formulario" element = {<Formulario/>}/>
      <Route exact path="/FormularioOdonto" element = {<FormularioOdonto/>}/>
      <Route exact path="/FormularioCardio" element = {<FormularioCardio/>}/>
      <Route exact path="/FormularioCertificado" element = {<FormularioCertificados/>}/>
      <Route exact path="/AcercaDe" element = {<AcercaDe/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;