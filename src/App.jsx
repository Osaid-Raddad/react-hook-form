import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import Users from './components/user/User.jsx'
import Home from './components/home/Home.jsx'
import Create from './components/user/Create.jsx'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
    
     <Navbar />
     <div className="container">
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<Users />} />
          <Route path='/create' element={<Create />} />
          <Route path='*' element={<h2>Page not Found</h2>} />
        </Routes>
     <Footer/>
     </div>
      
    
    </>
  )
}
