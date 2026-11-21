import "./App.css";
import AppRouter from "./routers/AppRouter";
import escudo from "./img/escudo-cucei.png";

function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎬 Películas</h1>
      </header>
      <AppRouter />
      <footer>
        <p>Integrantes: Juan Manuel Ramos Reynaga</p>
        <p>Profesor: ZEUS EMANUEL GUTIERREZ COBIAN</p>
        <p>Materia: DESARROLLO DE APLICACIONES WEB EN LA NUBE Y MÓVILES. </p>
        <p>Calendario escolar: 2026B</p>
        <p>Fecha:  20/11/2026 </p>
        <p>Institución: CUCEI  Universidad de Guadalajara</p>
        <img src={escudo} alt="Escudo de CUCEI" />
      </footer>
    </div>
  );
}

export default App;