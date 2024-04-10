import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { MdCreate } from "react-icons/md";
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
        <li>
        <MdCreate className='menu-icons'/> 
          <a href='./'>Alterar Pedido</a></li>
        <li>
        <IoMdHelpCircle className='menu-icons'/> 
          <a href='./'>Ajuda</a></li>
        <li>
        <IoPersonCircle className='menu-icons'/> 
          <a href='./'>Configurações de conta</a></li>
      </ul>
    </div>
  );
}

