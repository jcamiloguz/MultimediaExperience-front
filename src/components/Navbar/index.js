import React from "react";
import './index.scss'
function Navbar() {
  return (
    <>
      <div className="nav__content nes-container is-rounded">
          <div className="activity">
              <div className="tooltip nes-balloon">Primera Actividad</div>
              <button className="nav__btn"><i className="fas fa-circle nav__circle"></i></button>
          </div>
          <div className="activity">
              <div className="tooltip nes-balloon">Segunda Actividad</div>
              <button className="nav__btn"><i className="fas fa-circle nav__circle"></i></button>
          </div>
          <div className="activity">
              <div className="tooltip nes-balloon">Tercera Actividad</div>
              <button className="nav__btn"><i className="fas fa-circle nav__circle"></i></button>
          </div>
          <div className="activity">
              <div className="tooltip nes-balloon">Cuarta Actividad</div>
              <button className="nav__btn"><i className="fas fa-circle nav__circle"></i></button>
          </div>
          
    
      </div>
    </>
  );
}

export default Navbar;
