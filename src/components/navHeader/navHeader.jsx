import React,{useState} from "react";
import './navHeader.css'

 export default function NavHeader(){
    return(
        <div className="container">
            <div className="section-nav">
                <ul>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="@">Ofertas</a></li>
                    <li><a href="#">Novidades</a></li>
                    <li><a href="#">Roupas</a></li>
                    <li><a href="#">Informática</a></li>
                    <li><a href="#">Vender</a></li>
                </ul>
            </div>
        </div>
    )
 }