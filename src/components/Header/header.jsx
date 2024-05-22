import './header.css'
import SearchBar from "../SearchBar/searchbar";
import NaveMenu from "../MenuConfig/menu";
import NavHeader from "../navHeader/navHeader";
import { Link } from 'react-router-dom';
export default function Header(){
    return(
        <div className="header-container">
            <div className="header-main">
                <Link to="/">
                <div className="logo">
                    <h1 className="small">Small </h1>
                    <h1 className="market">Market</h1>
                    <h1 className="two">2</h1>
                    <h1 className="me">Me</h1>
                    </div></Link>
            </div>
            <div className="serach-bar">
            <SearchBar/>
            </div>
            <div className="cfg-btn">
            <NaveMenu/>
            </div>
            <div className="separadores">
            <NavHeader/>
            </div>
        </div>
    )
}