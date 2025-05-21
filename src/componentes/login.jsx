import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="uk-container uk-flex uk-flex-center uk-flex-middle" style={{ height: "100vh", background: "#f7f7f7" }}>
      <div className="uk-card uk-card-default uk-card-body uk-border-rounded" style={{ width: 350 }}>
        <div className="uk-text-center">
          <Link to="/"><img src="/logo.png" alt="Logo" width="100" /></Link>
          <h3>Iniciar Sesión</h3>
        </div>
        <form>
          <div className="uk-margin">
            <input className="uk-input" type="email" placeholder="Correo electrónico" required />
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="password" placeholder="Contraseña" required />
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary uk-width-1-1">Iniciar Sesión</button>
          </div>
          <p className="uk-text-small uk-text-center">
            ¿No tienes cuenta? <Link to="/register">Crea una</Link>
            </p>
        </form>
      </div>
    </div>
  );
}

export default Login;