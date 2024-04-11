import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Adds from './components/Adds/Adds'
function App() {
  const [count, setCount] = useState(0)

  return ( 
   <div className="container"> 
     <Header/>
     <Adds/>
   </div>
  )
}

export default App
