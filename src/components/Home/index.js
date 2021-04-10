import React from "react";
import "./index.scss";
function Home() {
  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/home_background.png"
          })`,
          backgroundSize: "cover",
          position: "relative",
          height: 900,
        }}
      >
        <div className="home__gradient"></div>
        <div className="home__body">
        <i className="far fa-play-circle"></i>
        </div>
      </div>
    </>
  );
}

export default Home;
