import React, { useState } from 'react'
import './index.scss'

import img1 from '../../assets/ac1.png'
import img2 from '../../assets/ac2.png'
import img3 from '../../assets/ac3.png'
import img4 from '../../assets/ac4.png'
import img5 from '../../assets/ac5.png'
import img6 from '../../assets/ac6.png'
import img7 from '../../assets/ac7.png'
import img8 from '../../assets/ac8.png'

import Decision from '../Decision/index'
import Question from '../Question/index'
import UserForm from '../UserForm'
import OpinionForm from '../OpinionForm'
import ListOpinion from '../ListOpinion'

const Video = () => {
  const [videoState, setVideoState] = useState({
    idUser: null,
    moment: 0,
  })
  const contentSwitch = (moment) => {
    switch (moment) {
      case 0:
        return (
          <UserForm videoState={videoState} setVideoState={setVideoState} />
        )
        break
      case 1:
        return (
          <div className="scene">
            <img src={img1} className="bg-scene" alt="" />
            <Question content="Si debes redactar un documento formal que fuente usarias?" />
            <Decision
              question={1}
              option={1}
              title={'Comic Sans'}
              correct={false}
              videoState={videoState}
              setVideoState={setVideoState}
            />
            <Decision
              classname="option"
              question={1}
              option={2}
              title={'Roboto'}
              correct={true}
              videoState={videoState}
              setVideoState={setVideoState}
              second={true}
            />
          </div>
        )
      case 2:
        return (
          <div className="scene">
            <img src={img3} className="bg-scene" alt="" />
            <Question content="Cual de las dos lineas imprime un  -HOLA MUNDO-?" />
            <Decision
              classname="option"
              question={2}
              option={3}
              title={'print("HOLA MUNDO")'}
              correct={true}
              videoState={videoState}
              setVideoState={setVideoState}
            />
            <Decision
              classname="option"
              question={2}
              option={4}
              title={'math.random("HOLA MUNDO")'}
              correct={false}
              videoState={videoState}
              setVideoState={setVideoState}
              second={true}
            />
          </div>
        )
        break
      case 3:
        return (
          <div className="scene">
            <img src={img5} className="bg-scene" alt="" />
            <Question content="Que debes hacer para encender el led y acabar con arduibot?" />
            <Decision
              classname="option"
              question={3}
              option={5}
              title={'Desconectar el cable negro'}
              correct={false}
              videoState={videoState}
              setVideoState={setVideoState}
            />
            <Decision
              classname="option"
              question={3}
              option={6}
              title={'Conectar el cable rojo'}
              correct={true}
              videoState={videoState}
              setVideoState={setVideoState}
              second={true}
            />
          </div>
        )
        break
      case 4:
        return (
          <div className="scene">
            <img src={img7} className="bg-scene" alt="" />
            <Question content="A cuantos metro puedes usar tu bluetooth para pedir una bomba que destruya al super pez?" />
            <Decision
              classname="option"
              question={4}
              option={7}
              title={'Maximo 5KM'}
              correct={false}
              videoState={videoState}
              setVideoState={setVideoState}
            />
            <Decision
              classname="option"
              question={4}
              option={8}
              title={'Maximo 5M'}
              correct={true}
              videoState={videoState}
              setVideoState={setVideoState}
              second={true}
            />
          </div>
        )
        break
      case 5:
        return (
          <div className="scene">
            <img src={img5} className="bg-scene" alt="" />
            <OpinionForm
              videoState={videoState}
              setVideoState={setVideoState}
            />
          </div>
        )
        break
      case 6:
        return (
          <div className="scene">
            <img src={img5} className="bg-scene" alt="" />
            <ListOpinion
              videoState={videoState}
              setVideoState={setVideoState}
            />
          </div>
        )
        break
      case 'incorrect1':
        return (
          <div className="scene">
            <img src={img2} className="bg-scene" alt="" />
            <button
              className=" option left"
              onClick={() => setVideoState({ ...videoState, moment: 1 })}
            >
              Back
            </button>
          </div>
        )
        break
      case 'incorrect2':
        return (
          <div className="scene">
            <img src={img4} className="bg-scene" alt="" />
            <button
              className=" option left"
              onClick={() => setVideoState({ ...videoState, moment: 2 })}
            >
              Back
            </button>
          </div>
        )
        break
      case 'incorrect3':
        return (
          <div className="scene">
            <img src={img6} className="bg-scene" alt="" />
            <button
              className=" option left"
              onClick={() => setVideoState({ ...videoState, moment: 3 })}
            >
              Back
            </button>
          </div>
        )
        break
      case 'incorrect4':
        return (
          <div className="scene">
            <img src={img8} className="bg-scene" alt="" />
            <button
              className=" option left"
              onClick={() => setVideoState({ ...videoState, moment: 4 })}
            >
              Back
            </button>
          </div>
        )
        break
      default:
        return <></>
        break
    }
  }

  return (
    <div className="video-container">
      <div className="background">{contentSwitch(videoState.moment)}</div>
      <div className="slider">
        <button
          className="nes-btn  slide "
          onClick={() => setVideoState({ ...videoState, moment: 1 })}
        >
          Primera Eleccion
        </button>
        <button
          className="nes-btn  slide"
          onClick={() => setVideoState({ ...videoState, moment: 2 })}
        >
          Segunda Eleccion
        </button>
        <button
          className="nes-btn  slide"
          onClick={() => setVideoState({ ...videoState, moment: 3 })}
        >
          Tercera Eleccion
        </button>
        <button
          className="nes-btn  slide"
          onClick={() => setVideoState({ ...videoState, moment: 4 })}
        >
          Cuarta Eleccion
        </button>
      </div>
    </div>
  )
}
export default Video
