import React from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Header from './Components/Header'
import Home from "./Components/Home"
import Resturaunts from './Components/Resturaunts'

function App() {
 

  return (
    <>
    <Header/>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/resturaunts" element={<Resturaunts />} />
  </Routes>
    </>
  )
}

export default App
