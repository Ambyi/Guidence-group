import React from 'react'
import { Link } from 'react-router-dom'
import { navItem } from './NavItem'
import './navigationbar.css'

const NavigationBar = () => {
 
  return (
    <div className='guidence-navbar-main'>
      <img className="guidence-logo"src="Assets/guidence-logo.png" alt="Guidence"/>
    <ul className='guidence-list-items'>
      {navItem.map((item)=>{
       return(
        <li key={item.id} className="list-queue"><Link to={item.path} className="list-links">{item.icon }{item.title}</Link></li>
       ) 
      })}
    </ul>
    </div>
  )
}

export default NavigationBar