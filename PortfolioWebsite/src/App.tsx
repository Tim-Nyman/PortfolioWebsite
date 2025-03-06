import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from "./Components/Footer"
import Section from "./Components/Section"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header />    
      <Section />
      <Footer />     
      </div>      
    </>
  )
}

export default App
