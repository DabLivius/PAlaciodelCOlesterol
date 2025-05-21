// src/componentes/Tienda.jsx
import { Link } from 'react-router-dom'
import '../estilos/Tienda.css'
import coldImg from '../img/cold.jpg'
import empanadaImg from '../img/empandacarne.jpg'
import rellenoImg from '../img/relleno.jpg'
import pastelImg from '../img/pastelfrito.jpg'
import hamburguesaImg from '../img/hamburguesa.jpg'
import papaImg from '../img/papasrellenas.jpg'
import CalienteImg from '../img/Caliente.jpg'
import polloImg from '../img/pollo.jpg'
import picadaImg from '../img/MG_1606.jpg.webp'


export default function Tienda() {
  return (
    <>
      <header>  
        Paco <Link to="/"><img className='uk-margin-left' src={coldImg} height="50px" width="50px" alt="Logo"/></Link>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><Link to="/Tienda">Tienda</Link></li>
            <li><a href="/login">Iniciar sesión</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Bienvenido a nuestra tienda de palacio de colesterol</h1>
      </main>

      <section className="menu">
        <div className="item">
          <img src={empanadaImg} alt="Empanadas de carne" />
          <h3>Empanadas</h3>
          <p className="price">$3.000</p>
          <Link to="/Empanadas"><button className="buy-button">Comprar</button></Link>
        </div>

        <div className="item">
          <img src={pastelImg} alt="Pasteles fritos" />
          <h3>Pasteles fritos</h3>
          <p className="price">$3.000</p>
          <Link to="/Pasteles"><button className="buy-button">Comprar</button></Link>
        </div>

        <div className="item">
          <img src={hamburguesaImg} alt="Hamburguesas" />
          <h3>Hamburguesas</h3>
          <p className="price">$12.000</p>
          <Link to="/Hamburguesa"><button className="buy-button">Comprar</button></Link>
        </div>

        <div className="item">
          <img src={papaImg} alt="Papas rellenas" />
          <h3>Papas rellenas</h3>
          <p className="price">$3.000</p>
          <Link to="/Papas"><button className="buy-button">Comprar</button></Link>
        </div>

        <div className="item">
          <img src={CalienteImg} alt="Perro-Caliente" />
          <h3>Perro Caliente</h3>
          <p className="price">$14.000</p>
          <Link to="/Caliente"><button className="buy-button">Comprar</button></Link>
        </div>

        <div className="item">
          < img src={polloImg} alt="Pollo a la Broster" />
          <h3>Pollo a la Broster</h3>
          <p className="price">$10.000</p>
          <Link to="/pollo"><button className="buy-button">Comprar</button></Link>
        </div>

        <div className="item">
          <img src={picadaImg} alt="Picada del palacio" />
          <h3>Picada del palacio</h3>
          <p className="price">$25.000</p>
          <Link to="/Picada"><button className="buy-button">Comprar</button></Link>
        </div>

        <div className="item">
          <img src={rellenoImg} alt="Relleno" />
          <h3>Relleno</h3>
          <p className="price">$16.000</p>
          <Link to="/Relleno"><button className="buy-button">Comprar</button></Link>
        </div>
      </section>
      
      <footer className="uk-section uk-section-small uk-background-muted">
        {/* Contenedor para texto + logo alineados horizontalmente */}
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
            <img src={coldImg} alt="Logo Footer" height="80" />
          </div>
        </div>
        <hr className="uk-divider-icon" />
        <p className="uk-text-center uk-text-small uk-margin-remove-bottom">
          © 2025 Palacio Del Colesterol, LLC
        </p>
      </footer>
    </>
  );
}
