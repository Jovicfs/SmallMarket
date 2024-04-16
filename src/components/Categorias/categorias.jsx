import React,{useState,useContext} from "react";
import './categorias.css';



export default function Categorias(){
    return(
        <div className="menuCategorias-active" >
            <ul className="listaCategorias">
                <li className="item-lista">
                    <div className="grid">    
                    <a
                    className="drop-menu-a"
                     href="@@">Esportes e Fitness</a>
                    </div>
               </li>
                <li className="item-lista">
                    <div className="grid">    
                    <a
                    className="drop-menu-a"
                     href="@@">Roupas</a>
                    </div>
               </li>
                <li className="item-lista">
                    <div className="grid">    
                    <a 
                    className="drop-menu-a"
                    href="@@">Veículos</a>
                    </div>
               </li>
                <li className="item-lista">
                    <div className="grid">    
                    <a className="drop-menu-a" href="@@">Tecnologia</a>
                    </div>
               </li>
                <li className="item-lista">
                    <div className="grid">    
                    <a className="drop-menu-a" href="@@">Máquinas de costura</a>
                    </div>
               </li>
              
            </ul>
        </div>
    )
}

