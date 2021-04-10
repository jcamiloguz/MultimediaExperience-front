import React from "react";
import "./index.scss";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer_content">
          <div className="footer_logo">
            <img
              src={process.env.PUBLIC_URL + "/uao_logo.png"}
              alt=""
              className=""
            />
          </div>
          <div className="footer__developers">
            <h1>realizado por</h1>
            <ul className="developers">
              <li>Juan Camilo Juzman Sandoval</li>
              <li>Sebastián Amilkar Murillo Hurtado</li>
              <li>Juan Camilo Renza Potes</li>
              <li>Juan Camilo Riascos Riascos</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
