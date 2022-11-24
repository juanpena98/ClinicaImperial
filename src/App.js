//import { useAuth0 } from '@auth0/auth0-react';
//import { Profile } from './Profile';
//import { LoginButton } from './Login';
//import { LogoutButton } from './Logout';
import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import {Header} from './Components/Header';
import { ErrorNotFound } from './Components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CitasMedicas } from './Components/CitasMedicas';


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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
