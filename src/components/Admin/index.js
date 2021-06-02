import React from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import './index.scss'

function Admin() {
  return (
    <>
      <main>
        <div className="container-form-admin">
          <div className="form_container nes-container ">
            <h2 className="form-U">Inicio de Sesión</h2>
            <form className="form">
              <input
                type="text"
                className="nes-input input"
                placeholder="@ usuario"
              />
              <input
                type="password"
                className="nes-input input"
                placeholder="Contraseña"
              />
              <Link to="/dashboard" className="nes-btn is-error btn">
                Iniciar sesión
              </Link>
              <div className="circle">
                <i class="nes-icon close is-large "></i>
              </div>

              <small>
                Este espacio es uso exclusivo para personal de la{' '}
                <span className="form-U">
                  Universidad Autónoma de Occidente
                </span>
              </small>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Admin
