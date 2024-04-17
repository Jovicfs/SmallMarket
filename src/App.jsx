import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Adds from './components/Adds/Adds'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return ( 
   <div className="Appcontainer"> 
     <Header/>
     <Adds/>
     <div className="products-section">
      <h1>Novidades da Semana 📅</h1>
      <Products/>
    </div>
     <div className="products-section">
      <h1> Em Oferta 💸</h1>
      <Products/>
    </div>
     <div className="products-section">
      <h1> Para Você 🫵</h1>
      <Products/>
      <Footer/>
    </div>
   </div>
  )
}

export default App
