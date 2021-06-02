import React, { useState } from 'react'
import ReactStars from 'react-stars'
import './index.scss'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
export default function OpinionForm({ videoState, setMoment }) {
  const [opinion, setOpinion] = useState({
    content_opinion: '',
    score: 0,
  })
  const opinionHandler = (e) => {
    setOpinion({ ...opinion, [e.target.name]: e.target.value })
    console.log(opinion)
  }
  const starHandler = (starRate) => {
    setOpinion({ ...opinion, score: Math.round(starRate) })
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
      setMoment('OPINIONS')
    } catch (err) {
      throw err
    }
  }
  return (
    <div className="opinion-form">
      <div className="form-container  nes-container">
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
        <br />
        <p>Tambien puedes calificarnos</p>
        <ReactStars
          onChange={starHandler}
          value={opinion.score}
          size={70}
          count={5}
        ></ReactStars>
        <button className=" nes-btn is-error" onClick={clickHandler}>
          {' '}
          Enviar y continuar
        </button>
        <h2>Comparte la experiencia!!</h2>
        <div className="social-media">
          <FacebookShareButton className="nes-btn" url={'http://google.com'}>
            <i class="nes-icon facebook is-large"></i>
          </FacebookShareButton>
          <TwitterShareButton className="nes-btn" url={'http://google.com'}>
            <i class="nes-icon twitter is-large"></i>
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}
