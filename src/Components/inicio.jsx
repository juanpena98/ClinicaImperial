import logotipo from "./assets/logotipo.png";
import constrasea from "./assets/constrasea.svg";
const inicio = () => {
  return (
    <div className="desktop-1">
      <div className="banner">
        <img className="logotipo" src={logotipo} />
        <span className="titulo">CLINICA IMPERIAL INTEGRAL</span>
      </div>
      <div className="imagen-de-fondo">
        <div className="cuadro-iniciar-sesin">
          <span className="texto-inicio-de-sesi">INICIAR SESIÓN</span>
          <input className="inicio-de-sesin" type="text" />
          <img className="constrasea" src={constrasea} />
        </div>
      </div>
    </div>
  );
};
export default inicio;