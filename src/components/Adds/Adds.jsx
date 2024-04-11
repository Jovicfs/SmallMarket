import react,{useState} from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import './Adds.css'

export default function Adds(){
    return(
        <div className="publish">
         <button type="button" className='button-left'>
         <FaChevronLeft/>
         </button>
             <img src='' alt="add"  />
         <button type="button" className='button-right'>
         <FaChevronRight/>
         </button>
         <div className="count">
            <ul>
                <li><a href="#"></a>0</li>
                <li><a href="#"></a>0</li>
                <li><a href="#"></a>0</li>
            </ul>
         </div>
        </div>
    )
}