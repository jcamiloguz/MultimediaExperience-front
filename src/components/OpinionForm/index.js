import React, { useState } from 'react'

export default function OpinionForm(videoState, setVideoState) {
  const [opinion, setOpinion] = useState({
    content_opinion: '',
    score: 0,
  })
  const opinionHandler = (e) => {
    setOpinion({ ...opinion, [e.target.name]: e.target.value })
  }
  const clickHandler = async (e) => {
    e.preventDefault()
    const data = { ...opinion, id_user: videoState.idUser }
    try {
      const rawResponse = await fetch('http://localhost:9000/opinion', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const content = await rawResponse.json()
      console.log(content)
      setVideoState({
        ...videoState,
        moment: videoState.moment + 1,
      })
    } catch (err) {
      throw err
    }
  }
  return (
    <div>
      <div className="form-container nes-container">
        <h2>Danos tu opinion de la experiencia!!</h2>
        <div className="nes-field">
          <label htmlFor="name_field">Comentario: </label>
          <input
            onChange={opinionHandler}
            value={opinion.content_opinion}
            type="text"
            name="content_opinion"
            className="nes-input"
          />
        </div>
        <p>Tambien puedes calificarnos</p>
        <input
          onChange={opinionHandler}
          value={opinion.score}
          type="text"
          name="score"
          className="nes-input"
          min="0"
          max="5"
        />
        <button className=" nes-btn is-error" onClick={clickHandler}>
          {' '}
          Enviar y continuar
        </button>
      </div>
    </div>
  )
}
