import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm: '',
    username: '',
    phone: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Datos de registro:", form);
    alert("Cuenta creada exitosamente (simulado)");
  };

  return (
    <div className="uk-container uk-flex uk-flex-center uk-flex-middle" style={{ height: "100vh", background: "#f7f7f7" }}>
      <div className="uk-card uk-card-default uk-card-body uk-border-rounded" style={{ width: 400 }}>
        <div className="uk-text-center">
          <img src="/logo.png" alt="Logo" width="100" />
          <h3>Crear Cuenta</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="uk-margin">
            <input className="uk-input" type="email" name="email" placeholder="Correo electrónico" required onChange={handleChange} />
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="password" name="password" placeholder="Contraseña" required onChange={handleChange} />
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="password" name="confirm" placeholder="Repetir contraseña" required onChange={handleChange} />
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="text" name="username" placeholder="Nombre de usuario" required onChange={handleChange} />
          </div>
          <div className="uk-margin">
            <input className="uk-input" type="tel" name="phone" placeholder="Teléfono" required onChange={handleChange} />
          </div>
          <div className="uk-margin">
            <label>
              <input className="uk-checkbox" type="checkbox" required /> Acepto los <a href="#">términos y condiciones</a>
            </label>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-primary uk-width-1-1">Crear Cuenta</button>
          </div>
          <p className="uk-text-small uk-text-center">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
