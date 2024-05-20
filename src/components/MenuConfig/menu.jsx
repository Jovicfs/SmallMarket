



import { useState } from 'react'; 
import { IoPersonCircle } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { MdCreate } from "react-icons/md"; 
import { FaUserGear } from "react-icons/fa6"; 
import { BsSignTurnLeftFill } from "react-icons/bs"; 
import './menu.css'; 


export default function NaveMenu(){ 
  const [menuAberto, setMenuAberto] = useState(false); 
  const handleMenuToggle = () => { setMenuAberto((prevMenuAberto) => !prevMenuAberto); }
  return (
          <div className="nave-menu">
            <button className="menu-toggle" onClick={handleMenuToggle}>
              <FaUserGear className='cfg-icon'/>
            </button>
            <ul className={menuAberto ? 'menu-aberto' : 'menu-fechado'}>
              <li>
                
              <MdCreate className='menu-icons'/> 
                <a href='./'>Alterar Pedido e cancelar compras</a></li>
              <li>
              <IoMdHelpCircle className='menu-icons'/> 
                <a href='./'>Ajuda</a></li>
              <li>
              <IoPersonCircle className='menu-icons'/> 
                <a href='./'>Configurações de conta</a></li>
              <li>
              <BsSignTurnLeftFill className='menu-icons'/> 
                <a href='./'>Devoluções e Reebolso</a></li>
            </ul>
          </div>
        )};











// import { useState } from 'react';
// import { IoPersonCircle } from "react-icons/io5";
// import { IoMdHelpCircle } from "react-icons/io";
// import { MdCreate } from "react-icons/md";
// import { FaUserGear } from "react-icons/fa6";
// import { BsSignTurnLeftFill } from "react-icons/bs";
// import './menu.css';

// export default function NaveMenu() {
//   const [menuAberto, setMenuAberto] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuAberto(!menuAberto);
//   };

//   return (
//     <div className="nave-menu">
//       <button className="menu-toggle" onClick={handleMenuToggle}>
//         <FaUserGear className='cfg-icon'/>
//       </button>
//       <ul className={menuAberto ? 'menu-aberto' : 'menu-fechado'}>
//         <li>
          
//         <MdCreate className='menu-icons'/> 
//           <a href='./'>Alterar Pedido e cancelar compras</a></li>
//         <li>
//         <IoMdHelpCircle className='menu-icons'/> 
//           <a href='./'>Ajuda</a></li>
//         <li>
//         <IoPersonCircle className='menu-icons'/> 
//           <a href='./'>Configurações de conta</a></li>
//         <li>
//         <BsSignTurnLeftFill className='menu-icons'/> 
//           <a href='./'>Devoluções e Reebolso</a></li>
//       </ul>
//     </div>
//   );
