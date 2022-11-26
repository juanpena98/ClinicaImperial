import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import {Header} from './Components/Header';
import { ErrorNotFound } from './Components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CitasMedicas } from './Components/CitasMedicas';
import { Certificados } from './Components/Certificados';
import { Mensajes } from './Components/Mensajes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Header/>

      <Routes>
      <Route exact path ="/" element = {<Home/>}/>
      <Route exact path="*"element = {<ErrorNotFound/>}/>
      <Route exact path="/CitasMedicas"element = {<CitasMedicas/>}/>
      <Route exact path="/home"element = {<Home/>}/>
      <Route exact path="/Certificados" element = {<Certificados/>}/>
      <Route exact path="/Mensajes" element = {<Mensajes/>}/>
      
      
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
