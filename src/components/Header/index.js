import React from "react";

import "./index.scss";
function Header() {
  return (
    <div className="header">
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt=""
        className="header__logo"
      />

      <i className="fas fa-bars header__menu"></i>
    </div>
  );
}

export default Header;
