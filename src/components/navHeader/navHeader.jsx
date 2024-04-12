import React,{useState} from "react";
import './navHeader.css'
import { IoMdCart } from "react-icons/io";
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
            <div className="section-nav">
                <ul>
                    <li><a href="#">Cadastre-se</a></li>
                    <li><a href="@">Entre</a></li>
                    <li><a href="@">Compras</a></li>
                    <li><a href="@"><IoMdCart className="icon-nav"/></a></li>
                </ul>
            </div>
        </div>
    )
 }