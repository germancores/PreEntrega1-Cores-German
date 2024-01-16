import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbar />
      <Counter />
      <h1 className="App">Bienvenido a nuestra tienda de videojuegos</h1>
      <p className="App">Descubre las últimas novedades y ofertas en juegos</p>
    </div>
  );
};

export default App;
