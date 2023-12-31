import React from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Header from './Components/Header'
import Home from "./Components/Home"
import Resturaunts from './Components/Resturaunts'
import Shopping from './Components/Shopping'
import NewAttractions from './Components/NewAttractions'
import ArtistsPage from './Components/ArtistsPage'

function App() {
 

  return (
    <>
    <Header/>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/resturaunts" element={<Resturaunts />} />
    <Route path="/shopping" element={<Shopping/>}/>
    <Route path="/NewAttractions" element={<NewAttractions/>}/>
    <Route path="/artist" element={<ArtistsPage/>}/>
  </Routes>
    </>
  )
}

export default App
