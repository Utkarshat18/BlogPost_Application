import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <Router>
    <Navbar/>
      <p>This is a react application</p>
    </Router>
  )
}

export default App
