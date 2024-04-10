import React from "react";
import './searchbar.css'
import { FaSearch } from "react-icons/fa";
import {useState} from "react";


export default function SearchBar(){
    const [termoPesquisa, setTermoPesquisa] = useState('');


    const handleChange = (e) => {
        setTermoPesquisa(e.target.value);
      };

    return(
        <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={termoPesquisa}
          onChange={handleChange}
        />
        <button type="submit">
          <FaSearch/>
        </button>
      </div>
    );
}