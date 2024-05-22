import React from 'react';
import { Link } from 'react-router-dom';
import './navHeader.css';
import { IoMdCart } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import Categorias from '../Categorias/categorias';

export default function NavHeader() {
  const [menuAberto, setMenuAberto] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="container">
      <div className="section-nav">
        <ul>
          <li>
            <button className="categorias" onClick={handleMenuToggle}>
              Categorias<IoIosArrowDown color="white" />
            </button>
          </li>
          {menuAberto && <Categorias />}
          <li>
            <Link to="/offers">Ofertas</Link>
          </li>
          <li>
            <Link to="/news">Novidades</Link>
          </li>
          <li>
            <Link to="/clothing">Roupas</Link>
          </li>
          <li>
            <Link to="/informatics">Informática</Link>
          </li>
          <li>
            <Link to="/sell">Vender</Link>
          </li>
        </ul>
      </div>
      <div className="section-nav">
        <ul>
          <li>
            <Link to="/register">Cadastre-se</Link>
          </li>
          <li>
            <Link to="/login">Entre</Link>
          </li>
          <li>
            <Link to="/purchases">Compras</Link>
          </li>
          <li>
            <Link to="/cart">
              <IoMdCart className="icon-nav" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}