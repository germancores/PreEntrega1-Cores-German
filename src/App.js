import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting = {'Bienvenido a nuestra tienda de videojuegos'}/>
      <p className="App">Descubre las últimas novedades y ofertas en juegos</p>
      <Counter />
    </div>
  );
};

export default App;
