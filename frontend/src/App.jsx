import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Adminpage from './pages/AdminPage/Adminpage'
import Userpage from './pages/UserPage/Userpage'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'

function App() {

  return (
    <Router>
    <Navbar/>
    <div style={{marginTop:"80px"}}>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<ProtectedRoute role="admin"><Adminpage/></ProtectedRoute>}/>
        <Route path='/user' element={<ProtectedRoute role="user"><Userpage/></ProtectedRoute>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
