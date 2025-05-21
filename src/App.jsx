import { Routes, Route, Navigate } from 'react-router-dom';
import Tienda from './componentes/Tienda';
import Empanadas from './pages/Empanadas';
import Hamburguesa from './pages/Hamburguesa';
import Papas from './pages/Papas';
import Pasteles from './pages/Pasteles';
import Caliente from './pages/Caliente';
import Picada  from './pages/Picada';
import Pollo  from './pages/Pollo';
import Relleno  from './pages/Relleno';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tienda />} />
        <Route path="/empanadas" element={<Empanadas />} />
        <Route path="/hamburguesa" element={<Hamburguesa />} />
        <Route path="/papas" element={<Papas />} />
        <Route path="/pasteles" element={<Pasteles />} />
        <Route path="/caliente" element={<Caliente />} />
        <Route path="/picada" element={<Picada />} />
        <Route path="/pollo" element={<Pollo />} />
        <Route path="/relleno" element={<Relleno />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </Router>
  );
}

export default App;
