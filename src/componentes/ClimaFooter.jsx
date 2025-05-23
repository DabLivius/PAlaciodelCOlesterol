// src/componentes/ClimaFooter.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ClimaFooter() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    const fetchClima = async () => {
      try {
        // Coordenadas de Neiva, Huila (puedes cambiar esto)
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=2.93&longitude=-75.28&current_weather=true"
        );
        setClima(response.data.current_weather);
      } catch (error) {
        console.error("Error al obtener el clima:", error);
      }
    };

    fetchClima();
  }, []);

  return (
    <div className="uk-text-small uk-text-center uk-margin-top">
      {clima ? (
        <p>
          🌤️ {clima.temperature}°C en Neiva | Viento: {clima.windspeed} km/h
        </p>
      ) : (
        <p>Cargando clima...</p>
      )}
    </div>
  );
}
