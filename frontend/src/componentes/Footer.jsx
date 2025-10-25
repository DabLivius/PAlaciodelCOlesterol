// src/components/Footer.js
import React from 'react';
import logo from '../img/Logopropio.jpg';
import ClimaFooter from './ClimaFooter';


const Footer = () => {
  return (
    <footer className="uk-section uk-section-small uk-background-muted">
      <div className="uk-container">
        <div 
          className="uk-flex uk-flex-between uk-flex-middle uk-flex-wrap" 
          style={{ gap: "30px", borderTop: "1px solid #ccc", paddingTop: "20px" }}
        >
          {/* COLUMNA IZQUIERDA: Logo + Sobre nosotros */}
          <div className="uk-flex uk-flex-middle" style={{ gap: "20px" }}>
            <img src={logo} alt="Logo Footer" height="80" />
            <div>
              <h3 className="uk-margin-small">Sobre nosotros</h3>
              <p className="uk-margin-small">
                contacto: 3100000000 - (608) 8600000<br />
                3250000000 - (608) 8300000<br />
                dirección: Carrera 2 No 00 - 00 Centro<br />
                Calle 10 No 000 Zona Industrial<br />
                correo: contacto@palaciodelcolesterol.com<br />
                pqrs@palaciodelcolesterol.com
              </p>
            </div>
          </div>
            <div className="uk-text-center">
            <div style={{ marginBottom: "10px" }}>
              <ClimaFooter />
            </div>
            <p className="uk-text-small uk-margin-remove">
              © 2025 Palacio Del Colesterol, LLC
            </p>
          </div>
        </div>
      </div>
     


    </footer>
  );
};

export default Footer;
