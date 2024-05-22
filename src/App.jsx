// frontend/src/App.js (ou App.jsx)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Adds from './components/Adds/Adds';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/login';

function App() {
  return (
    <Router>
      <div className="Appcontainer">
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <>
              <Adds />
              <div className="products-section">
                <h1>Novidades</h1>
                <Products />
              </div>
              <div className="products-section">
                <h1>Em Oferta</h1>
                <Products />
              </div>
              <div className="products-section">
                <h1>Para Você</h1>
                <Products />
              </div>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
