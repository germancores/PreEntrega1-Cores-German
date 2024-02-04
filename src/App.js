import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <div className="item-list">
            <ItemListContainer greeting={'Bienvenido a nuestra tienda de videojuegos'} />
            <p className="App">Descubre las últimas novedades y ofertas en juegos</p>
          </div>
        } />
       <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<div> ERROR: 404, La página no existe</div>} />
      </Routes>
    </>
  );
}

export default App;
