import "./App.css";
import {useState} from 'react';
import iconCertificate from "../Imagenes/iconCertificate.svg";
import iconPerson from "../Imagenes/iconPerson.svg";
import group from "../Imagenes/group.svg";
import ellipse1 from "../Imagenes/ellipse1.png";
import iconIconCalendar from "../Imagenes/iconIconCalendar.svg";
import iconIconFileNew from "../Imagenes/iconIconFileNew.svg";
import shape from "../Imagenes/shape.svg";
import iconClinicalRecord from "../Imagenes/iconClinicalRecord.svg";
import iconHospital from "../Imagenes/iconHospital.svg";
import iconHome from "../Imagenes/iconHome.svg";    
import NatBarPri from "./NatBarPri";
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <NatBarPri/>
      <div className="flex-container">

        <button className="User">
          <span className="wilson-calvo">Wilson Calvo</span>
          <img className="ellipse-1" src={ellipse1} />
        </button>

      </div>
          <div className="contenedor">
              <button className="citasMenu">
                  <span className="subtituloMenu">Citas</span>
                  <img className="shape" src={shape} />
              </button>

              <button className="orden">
                  <span className="orden-medica">Orden Medica</span>
                  <img className="icon-icon-file-new" src={iconIconFileNew} />
              </button>

              <button className="resultados">
                  <span className="resultados-medicos">Resultados Médicos</span>
                  <img className="icon-clinical-record" src={iconClinicalRecord} />
              </button>

              <button className="certificados">
                  <span className="certificadostext">Certificados</span>
                  <img className="icon-certificate" src={iconCertificate} />
              </button>

              <button className="red">
                  <span className="red-atencion">Red de Atención</span>
                  <img className="icon-hospital" src={iconHospital} />
              </button>
          </div>

      <div className="rectangle-15">

        <button className="Inicio">
          <img className="icon-home" src={iconHome} />
          <span className="inicio">Inicio</span>
        </button>

        <button className="Citas">
          <img className="icon-icon-calendar" src={iconIconCalendar} />
          <span className="citas-1">Citas</span>
        </button>

        <button className="Datos">
          <img className="icon-person" src={iconPerson} />
          <span>Mis Datos</span>
        </button>
          
          <button className="Afiliacion">
          <img className="group" src={group} />
          <span>Mi Afiliación</span>
          </button>
          
      </div>
    </>
  );
};

export default Menu;