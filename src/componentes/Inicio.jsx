import '../estilos/Inicio.css';
import 'uikit/dist/css/uikit.min.css';
import ClimaFooter from './ClimaFooter';
import UIkit from 'uikit';
import { Link } from 'react-router-dom';
import "../estilos/Tienda.css";
import logo from '../img/Palaciodelcolesterollogogrande1Iniciarsesion.png';
import plato from '../img/Heroimage.jpg';
import ingredientes from '../img/Card1image.jpg';
import especias from '../img/Card2image.jpg';
import carnes from '../img/Card3.jpg';
import prod1 from '../img/Destacados1.jpg';
import prod2 from '../img/Destacados2.jpg';
import prod3 from '../img/Destacados3.jpg';
import prod4 from '../img/Destacados4.jpg';
import prod5 from '../img/Destacados5.jpg';
import prod6 from '../img/Destacados6.jpg';
import prod7 from '../img/Destacados7.jpg';
import prod8 from '../img/Destacados8.jpg';
import pagos from '../img/Card5Image.jpg';
import domicilio from '../img/Card4Image.jpg';
import servicio from '../img/Cards6Image.jpg';
import logoFooter from '../img/Palaciodelcolesterollogogrande1Iniciarsesion.png';

const productos = [
  { nombre: "Empanadas", imagen: prod1 },
  { nombre: "Calzone", imagen: prod2 },
  { nombre: "Buñuelos", imagen: prod3 },
  { nombre: "Pasteles", imagen: prod4 },
  { nombre: "Papa Rellena", imagen: prod5 },
  { nombre: "Arepa de huevo", imagen: prod6 },
  { nombre: "Dedos", imagen: prod7 },
  { nombre: "Pollo a la broaster", imagen: prod8 },
];

export default function Inicio() {
  return (
    <>
     <header>
        <span className='custom-font'>PaCo</span>
        <Link to="/"><img
          className="uk-margin-left"
          src={logo}
          height="50px"
          width="50px"
          alt="Logo"
        /></Link>
        <nav>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <Link to="/Tienda">Tienda</Link>
            </li>
            <li>
              <a href="/login">Iniciar sesión</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="uk-section uk-section-default">
        <div className="uk-container">
          <div
            className="uk-grid-large uk-child-width-1-2@m uk-flex-middle uk-flex-center"
            uk-grid=""
          >
            <div>
              <h1 className="uk-heading-medium">
                ¿Ya decidiste que te vas a{" "}
                <span className="uk-text-success">comer esta tarde?</span>
              </h1>
              <p>
                No esperes más, nosotros te podemos ayudar con ese antojito de
                la tarde, además domicilio incluido ;)
              </p>
              <a href="/Tienda">
                <button className="uk-button uk-button-primary uk-border-pill">
                  Compra Ahora
                </button>
              </a>
            </div>
            <div>
              <img
                className="uk-border-rounded"
                src={plato}
                alt="Plato de comida"
                width="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="uk-section uk-section-muted">
        <div className="uk-container">
          <h2 className="uk-text-center">
            Solo usamos lo <span style={{ color: "#5f259f" }}>mejor</span>!
          </h2>
          <div
            className="uk-grid-match uk-child-width-1-3@m uk-margin"
            uk-grid="true"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>Ingredientes orgánicos</h3>
                <img
                  src={ingredientes}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  alt="Ingredientes"
                  className="uk-border-rounded"
                />
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>Mejores especias</h3>
                <img
                  src={especias}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  alt="Especias"
                  className="uk-border-rounded"
                />
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>Carnes frescas</h3>
                <img
                  src={carnes}
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  alt="Carnes"
                  className="uk-border-rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="uk-section">
        <div className="uk-container">
          <h2 className="uk-text-center">Destacados</h2>
          <div className="uk-child-width-1-4@m uk-grid-small uk-flex-center" uk-grid="true">
            {productos.map((producto, idx) => (
              <div key={idx}>
                <Link to="/Tienda">
                  <div className="uk-card uk-card-default uk-card-body uk-text-center uk-border-rounded uk-transition-toggle">
                    <div
                      style={{
                        backgroundColor: "#5f259f",
                        padding: "8px",
                        borderRadius: "50%",
                        display: "inline-block",
                        marginBottom: "10px",
                      }}
                    >
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="uk-border-circle"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <h4 className="uk-text-bold" style={{ color: "#5f259f" }}>
                      {producto.nombre}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="uk-section uk-section-muted">
        <div className="uk-container">
          <h2 className="uk-text-center">
            Elegibilidad para domicilio,{" "}
            <span style={{ color: "#5f259f" }}>métodos de pago</span>, etc..
          </h2>
          <div
            className="uk-grid-match uk-child-width-1-3@m uk-margin-top"
            uk-grid="true"
          >
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>Domicilio</h3>
                <p>Elegibilidad domicilio para todo Neiva y el Huila</p>
                <img
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  src={domicilio}
                  alt="Domicilio"
                />
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>Métodos de pago</h3>
                <p>
                  Aceptamos todos los medios de pago. Tarjeta de credito,
                  debito, efectivo, etc.
                </p>
                <img
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  src={pagos}
                  alt="Pagos"
                />
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-card-body uk-text-center">
                <h3>Servicio al cliente</h3>
                <p>
                  Si necesitas ayuda sobre un pedido grande, con gusto te
                  ayudaremos.
                </p>
                <img
                  style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  src={servicio}
                  alt="Servicio"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="uk-section uk-section-small uk-background-muted">
        <div className="uk-container uk-flex uk-flex-middle uk-flex-center uk-flex-wrap" style={{ gap: "20px" }}>
          <div>
            <h3>Sobre nosotros</h3>
            <p className="uk-margin-small">
              contacto: 3100000000 - (608) 8600000 <br />
              3250000000 - (608) 8300000 <br />
              dirección: Carrera 2 No 00 - 00 Centro <br />
              Calle 10 No 000 Zona industrial <br />
              correo: contacto@palaciodelcolesterol.com <br />
              pqrs@palaciodelcolesterol.com
            </p>
          </div>
          <div className="uk-flex uk-flex-middle">
            <img src={logo} alt="Logo Footer" height="80" />
          </div>
        </div>
        <hr className="uk-divider-icon" />
        <ClimaFooter />
        <p className="uk-text-center uk-text-small uk-margin-remove-bottom">
          © 2025 Palacio Del Colesterol, LLC
        </p>
      </footer>
    </>
  );
}