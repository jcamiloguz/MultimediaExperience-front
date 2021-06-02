import React, { useState } from 'react'
import './index.scss'

const UserForm = ({ videoState, setVideoState, setMoment }) => {
  const [state, setState] = useState({
    user_name: '',
    user_last_name: '',
    email: '',
    phone: '',
    created_at: '2321',
    born_date: '2000-09-06',
    id_school: 1,
  })
  const userHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const clickHandler = async (e) => {
    e.preventDefault()
    try {
      const rawResponse = await fetch(
        'https://multimedia-api.herokuapp.com/user',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(state),
        }
      )
      const content = await rawResponse.json()
      console.log(content)
      setVideoState({
        ...videoState,
        idUser: content.insertId,
      })
      setMoment('ESC2')
    } catch (err) {
      throw err
    }
  }
  return (
    <>
      <div className="form-container nes-container">
        <h3>Para nosotros es importante mantener en contacto</h3>
        <form className="form" action="">
          <div className="nes-field">
            <label htmlFor="name_field">Nombre: </label>
            <input
              onChange={userHandler}
              value={state.name}
              type="text"
              name="user_name"
              className="nes-input"
            />
          </div>

          <br />
          <label htmlFor="">Apellido: </label>
          <input
            onChange={userHandler}
            value={state.last_name}
            type="text"
            name="user_last_name"
            className="nes-input"
          />
          <br />
          <label htmlFor="">Email: </label>
          <input
            onChange={userHandler}
            value={state.email}
            type="text"
            name="email"
            className="nes-input"
          />
          <br />
          <label htmlFor="">Telefono: </label>
          <input
            onChange={userHandler}
            value={state.phone}
            type="tel"
            name="phone"
            className="nes-input"
          />
          <br />
          <label htmlFor="">Fecha de nacimiento: </label>
          <input
            onChange={userHandler}
            value={state.born_date}
            type="date"
            name="born_date"
            className="nes-input"
          />
          <br />
          <br />
          <button className=" nes-btn is-error" onClick={clickHandler}>
            {' '}
            Enviar y continuar
          </button>
        </form>
      </div>
    </>
  )
}

export default UserForm
