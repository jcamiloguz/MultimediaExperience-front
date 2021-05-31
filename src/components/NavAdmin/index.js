import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
function NavAdmin() {
  return (
    <Link to="/admin" className="nav__admin">
      <button className="exit nes-btn">Salir</button>
    </Link>
  )
}

export default NavAdmin
