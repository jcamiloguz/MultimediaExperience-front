import React from 'react'
import './index.scss'

function Slider({ setMoment }) {
  const sliderClick = (momentChange) => {
    setMoment(momentChange)
  }
  return (
    <div className="nav__content nes-container is-rounded slider">
      <div className="activity">
        <div className="tooltip nes-balloon">Primera Actividad</div>
        <button onClick={() => sliderClick('ESC2')} className="nav__btn">
          <i className="fas fa-circle nav__circle"></i>
        </button>
      </div>
      <div className="activity">
        <div className="tooltip nes-balloon">Segunda Actividad</div>
        <button onClick={() => sliderClick('ESC3')} className="nav__btn">
          <i className="fas fa-circle nav__circle"></i>
        </button>
      </div>
      <div className="activity">
        <div className="tooltip nes-balloon">Tercera Actividad</div>
        <button onClick={() => sliderClick('ESC4')} className="nav__btn">
          <i className="fas fa-circle nav__circle"></i>
        </button>
      </div>
    </div>
  )
}

export default Slider
