import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import './menu.css';

export default function NaveMenu() {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleMenuToggle = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="nave-menu">
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <FaBars/>
      </button>
      <ul className={menuAberto ? 'menu-aberto' : 'menu-fechado'}>
        <li><a href='./'>Home</a></li>
        <li><a href='./'>Sobre</a></li>
        <li><a href='./'>Contato</a></li>
      </ul>
    </div>
  );
}

