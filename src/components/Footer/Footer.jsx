import React from "react";
import './Footer.css'
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
export default function Footer(){
   return(
    <div className="container-footer">
         <div className="section">
         <BsFillCreditCard2FrontFill  className="footer-image"/>
            <h1 className="Footer-Title">Escolha como Pagar</h1>
            <div className="h1">
                <p>você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x.</p>
            </div>
         </div>
         <div className="section">
         <TbTruckDelivery  className="footer-image"/>
            <h1 className="Footer-Title">Entregamos em todo o brasil</h1>
            <div className="h1">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi exercitationem maxime debitis pariatur! Eaque fugiat ratione natus voluptas consectetur. 
                Et magnam odit asperiores quisquam voluptatem iste ipsa totam. Ipsa, molestias.</p>
            </div>
         </div>
         <div className="section">
         <IoShieldCheckmarkSharp className="footer-image"/>
            <h1 className="Footer-Title">Segurança, do ínicio ao fim</h1>
            <div className="h1">
                <p>Você não gostou do que comprou? Devolva! No SmallMarket2Me não há nada que você não possa fazer, porque você está sempre protegido..</p>
            </div>
         </div>
           
    </div>
   )

}