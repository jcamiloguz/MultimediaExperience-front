import React, { useState } from 'react'
import Footer from '../Footer'
import { useHistory } from 'react-router-dom'
import './index.scss'
const gallegoEmail = 'afgallego@uao.edu.co'
const gallegoPass = '123'
function Admin() {
  const [user, setUser] = useState({ email: '', pass: '' })
  const [incor, setincor] = useState(false)
  const history = useHistory()
  const handlerInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const handlerClick = (e) => {
    e.preventDefault()
    user.email === gallegoEmail && user.pass === gallegoPass
      ? history.push('/dashboard')
      : setincor(true)
  }
  return (
    <>
      <main>
        <div className="container-form-admin">
          <div className="form_container nes-container ">
            <h2 className="form-U">Inicio de Sesión</h2>
            {incor ? <p>Tu datos son incorrectos</p> : <></>}
            <form className="form">
              <input
                type="text"
                className="nes-input input"
                placeholder="@ usuario"
                name="email"
                onChange={handlerInput}
                value={user.email}
              />
              <input
                type="password"
                className="nes-input input"
                placeholder="Contraseña"
                name="pass"
                onChange={handlerInput}
                value={user.pass}
              />
              <button onClick={handlerClick} className="nes-btn is-error btn">
                Iniciar sesión
              </button>
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
