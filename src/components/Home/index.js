import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-typewriting-effect";
import { animated as a, useSpring } from "react-spring";
import "./index.scss";
function Home() {
  const anim = useSpring({
    from: {opacity: 0},
    to:{opacity:1},
    config: { 
      duration: 500
    },
  });
  return (
    <>
      <div className="home">
        <div
          className=""
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/introdccion.png"
            })`,
            backgroundSize: "cover",
            position: "relative",
            height: "max-height",
            zIndex: 1,
          }}
        >
          <div className="message-list home__position">
            <div className="message-left">
              <div className="nes-balloon from-left">
                <Typewriter
                  string="te graduaste y buscas un sitio donde convertirte en un experto
                en multiples areas de la tecnología?"
                  delay={80}
                  stopBlinkinOnComplete
                />
              </div>
            </div>
          </div>

          <div className="home__width"></div>

          {/* <Link className="home__body">
          <i className="far fa-play-circle  nes-pointer"></i>
          </Link> */}
        </div>
        <a.div style={anim} className="home__start">
          <img src={process.env.PUBLIC_URL + "/cosmos.png"} alt="" />
          <div className="home__gradient"></div>
          <Link to="#" className="home__body nes-pointer">
            <h1 className="nes-text home__position">press start</h1>
          </Link>

          <div className="message-list home__position_start">
            <div className="message-left">
              <div className="nes-balloon from">
                <p>
                  presiona start y conoce lo que ingenieria multimedia tiene
                  para ti.
                </p>
              </div>
            </div>
          </div>
        </a.div>
      </div>
    </>
  );
}

export default Home;
