import React from "react";
import './header.css'
import SearchBar from "../SearchBar/searchbar";
import NaveMenu from "../Menu/menu";

export default function Header(){
    return(
        <div className="header-container">
            <div className="header-main">
                <div className="logo">
                    <h1 className="small">Small </h1>
                    <h1 className="market">Market</h1>
                    <h1 className="two">2</h1>
                    <h1 className="me">Me</h1>
                    </div>
            </div>
            <SearchBar/>
            <NaveMenu/>
        </div>
    )
}