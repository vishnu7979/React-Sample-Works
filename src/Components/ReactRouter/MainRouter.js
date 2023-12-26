import React from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import { Routes,Route,Link } from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='contact'>Contact</Link></li>
        <li><Link to='services'>Services</Link></li>
        
      </ul>
<Routes>
    <Route path='/' element = {<Home />} />
    <Route path='about' element = {<About />} />
    <Route path='contact' element = {<Contact />} />
    <Route path='services' element = {<Services />} />
    <Route path='*' element = {<NotFound />} />
</Routes>
    </div>
  )
}

export default MainRouter