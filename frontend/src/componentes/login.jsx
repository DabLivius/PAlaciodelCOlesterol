import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "../componentes/Footer";
import { loginRequest } from "../api/Auth"; // función centralizada de login

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginRequest(form);

      if (res.data && res.data.email) {
        // ✅ Guardamos el token y el rol en localStorage
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        if (res.data.rol) {
          localStorage.setItem("rol", res.data.rol);
        }

        alert("✅ Inicio de sesión exitoso");
        console.log("Usuario logueado:", res.data);

        // ✅ Redirección según el rol
        if (res.data.rol === "admin") {
          navigate("/productos"); // ruta para administrador
        } else {
          navigate("/perfil"); // ruta para usuario normal
        }
      } else {
        alert("⚠️ Error al iniciar sesión. Verifica tus datos.");
      }
    } catch (error) {
      console.error("Error en el login:", error);
      if (error.response) {
        alert("❌ " + error.response.data.message);
      } else {
        alert("❌ No se pudo conectar con el servidor");
      }
    }
  };

  return (
    <>
      <Header />
      <div
        className="uk-container uk-flex uk-flex-center uk-flex-middle"
        style={{ height: "100vh", background: "#f7f7f7" }}
      >
        <div
          className="uk-card uk-card-default uk-card-body uk-border-rounded"
          style={{ width: 350 }}
        >
          <div className="uk-text-center">
            <Link to="/">
              <img src="/logo.png" alt="Logo" width="100" />
            </Link>
            <h3>Iniciar Sesión</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="uk-margin">
              <input
                className="uk-input"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="uk-margin">
              <button className="uk-button uk-button-primary uk-width-1-1">
                Iniciar Sesión
              </button>
            </div>
            <p className="uk-text-small uk-text-center">
              ¿No tienes cuenta? <Link to="/register">Crea una</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
