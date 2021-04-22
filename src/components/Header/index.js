import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";
function Header() {
  const [menu, setMenu] = useState(false);
  const [sound, setSound] = useState(false);
  const showMenu = () => setMenu(!menu);
  const showSound = () => setSound(!sound);
  return (
    <>
      <div className="header">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          alt=""
          className="header__logo"
        />
        <Link to="#">
          <i className="fas fa-bars header__menu nes-pointer" onClick={showMenu}></i>
        </Link>
      </div>
      {/*-- inicio-- boton para cerrar menu de inicio de sesion */}
      <nav className={menu ? "dropdown active" : "dropdown"}>
        <Link to="#">
          <i className="fas fa-times dropdown__close" onClick={showMenu}></i>
        </Link>
        {/*--fin-- boton para cerrar menu de inicio de sesion */}
        {/* --inicio-- menu con opciones de reiniciar e iniciar sesion */}
        <div className="dropdown__content">
          <h2 className="dropdown__title">Ajustes</h2>
          <p>Sonido</p>
          <i
            onClick={showSound}
            className={
              sound
                ? "fas fa-volume-up dropdown__sound"
                : "fas fa-volume-up  s_active"
            }
          ></i>
          <div className="dropdown__actions">
            <Link to="#" className="dropdown__btn">
              Reiniciar
            </Link>
            <Link to="#" className="dropdown__btn">
              Iniciar Sesión
            </Link>
          </div>
        </div>
        {/* --fin-- menu con opciones de reiniciar e iniciar sesion */}
      </nav>
    </>
  );
}

export default Header;
