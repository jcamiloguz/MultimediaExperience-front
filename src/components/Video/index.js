import React, { useEffect, useState } from 'react'
import './index.scss'
import Decision from '../Decision/index'
import Question from '../Question/index'
import UserForm from '../UserForm'
import OpinionForm from '../OpinionForm'
import ListOpinion from '../ListOpinion'
import Slider from '../Slider'
import formBackground from '../../assets/fondo.png'

const INICIO =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/INICIO.mp4'
const ESC2 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/escena+Dos+(Loop).mp4'
const CORR2 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/CORRECTO.mp4'
const INCOR2 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/INCORRECTO.mp4'
const ESC3 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Tres+(Loop).mp4'
const CORR3 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Tres+(Correcto).mp4'
const INCOR3 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Tres+(Incorrecto).mp4'
const ESC4 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Cuatro+(Loop).mp4'
const CORR4 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Cuatro+(Correcto).mp4'
const INCOR4 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Cuatro+(Incorrecto).mp4'
const FINAL =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/EscenaF(Loop).mp4'

const Video = () => {
  const [videoState, setVideoState] = useState({
    idUser: null,
    muted: true,
    src: INICIO,
    slider: false,
    question: false,
    questionTitle: '',
    questionId: 0,
    opinion1: 0,
    next1: '',
    opinion1Title: '',
    opinion2: 0,
    opinion2Title: '',
    next2: '',
    back: '',
  })
  const [moment, setMoment] = useState('INICIO')
  const [currentTime, setCurrentTime] = useState(0)
  const states = {
    INICIO: () => {
      console.log('inicio')
      setCurrentTime(0)
    },
    FORM: () => {
      console.log('FORM')
      setCurrentTime(0)
      setVideoState({ ...videoState, src: '' })
      setCurrentTime(0)
    },
    ESC2: () => {
      console.log('ESC2')
      setVideoState({ ...videoState, slider: true, src: ESC2 })
      setCurrentTime(0)
    },
    QUE2: () => {
      setVideoState({
        ...videoState,
        question: true,
        questionTitle:
          'Si debes redactar un documento formal que fuente usarias?',
        questionId: 1,
        opinion1: 1,
        next1: 'INC2',
        opinion1Title: 'Comic Sans',
        opinion2: 2,
        opinion2Title: 'Roboto',
        next2: 'COR2',
        slider: false,
      })
      setCurrentTime(0)
    },
    INC2: () => {
      setVideoState({
        ...videoState,
        src: INCOR2,
        question: false,
        questionTitle: '',
        questionId: 0,
        opinion1: 0,
        next1: '',
        opinion1Title: '',
        opinion2: 0,
        opinion2Title: '',
        next2: '',
        slider: false,
      })
      setCurrentTime(0)
    },
    BACK2: () => {
      setCurrentTime(0)
    },
    COR2: () => {
      setVideoState({
        ...videoState,
        src: CORR2,
        question: false,
        questionTitle: '',
        questionId: 0,
        opinion1: 0,
        next1: '',
        opinion1Title: '',
        opinion2: 0,
        opinion2Title: '',
        next2: '',
        slider: false,
      })
      setCurrentTime(0)
    },
    ESC3: () => {
      setVideoState({ ...videoState, src: ESC3, slider: true })
      setCurrentTime(0)
    },
    QUE3: () => {
      setVideoState({
        ...videoState,
        question: true,
        questionTitle: 'Cual de las dos lineas imprime un  -HOLA MUNDO-?',
        questionId: 2,
        opinion1: 3,
        next1: 'COR3',
        opinion1Title: 'print("HOLA MUNDO")',
        opinion2: 4,
        opinion2Title: 'math.random("HOLA MUNDO")',
        next2: 'INC3',
        slider: false,
      })
    },
    INC3: () => {
      setVideoState({
        ...videoState,
        src: INCOR3,
        question: false,
        questionTitle: '',
        questionId: 0,
        opinion1: 0,
        next1: '',
        opinion1Title: '',
        opinion2: 0,
        opinion2Title: '',
        next2: '',
        slider: false,
      })
      setCurrentTime(0)
    },
    BACK3: () => {
      setCurrentTime(0)
    },
    COR3: () => {
      setVideoState({
        ...videoState,
        src: CORR3,
        question: false,
        questionTitle: '',
        questionId: 0,
        opinion1: 0,
        next1: '',
        opinion1Title: '',
        opinion2: 0,
        opinion2Title: '',
        next2: '',
        slider: false,
      })
      setCurrentTime(0)
    },
    ESC4: () => {
      setVideoState({
        ...videoState,
        src: ESC4,
        question: false,
        questionTitle: '',
        questionId: 0,
        opinion1: 0,
        next1: '',
        opinion1Title: '',
        opinion2: 0,
        opinion2Title: '',
        next2: '',
        slider: true,
      })
      setCurrentTime(0)
    },
    QUE4: () => {
      setVideoState({
        ...videoState,
        question: true,
        questionTitle:
          'A cuantos metro puedes usar tu bluetooth para pedir una bomba que destruya al super pez?',
        questionId: 3,
        opinion1: 5,
        next1: 'INC4',
        opinion1Title: 'Maximo 5KM',
        opinion2: 6,
        opinion2Title: 'Maximo 5M',
        next2: 'COR4',
        slider: false,
      })
    },
    INC4: () => {
      setVideoState({
        ...videoState,
        src: INCOR4,
        question: false,
        questionTitle: '',
        questionId: 0,
        opinion1: 0,
        next1: '',
        opinion1Title: '',
        opinion2: 0,
        opinion2Title: '',
        next2: '',
        slider: false,
      })
      setCurrentTime(0)
    },
    COR4: () => {
      setVideoState({
        ...videoState,
        src: CORR4,
        question: false,
        questionTitle: '',
        questionId: 0,
        opinion1: 0,
        next1: '',
        opinion1Title: '',
        opinion2: 0,
        opinion2Title: '',
        next2: '',
        slider: false,
      })
      setCurrentTime(0)
    },
    BACK4: () => {
      setCurrentTime(0)
    },
    FINAL: () => {
      setVideoState({ ...videoState, src: FINAL })
      setCurrentTime(0)
    },
    LAST_FORM: () => {},
    OPINIONS: () => {},
  }
  useEffect(() => {
    states[moment]()
  }, [moment])
  const mutedFun = () => {
    setVideoState({ ...videoState, muted: !videoState.muted })
  }
  const getCurrentTime = (element) => {
    setCurrentTime(element.target.currentTime)
    if (currentTime > 38 && moment === 'INICIO') {
      element.target.currentTime = 26
    }
    if (currentTime > 42 && moment === 'ESC2') {
      setMoment('QUE2')
    }
    if (currentTime > 5 && moment === 'INC2') {
      setMoment('BACK2')
    }
    if (currentTime > 5 && moment === 'COR2') {
      setMoment('ESC3')
    }
    if (currentTime > 40 && moment === 'ESC3') {
      setMoment('QUE3')
    }
    if (currentTime > 5 && moment === 'COR3') {
      setMoment('ESC4')
    }
    if (currentTime > 6 && moment === 'INC3') {
      setMoment('BACK3')
    }
    if (currentTime > 41 && moment === 'ESC4') {
      setMoment('QUE4')
    }
    if (currentTime > 6 && moment === 'COR4') {
      setMoment('FINAL')
    }
    if (currentTime > 6 && moment === 'INC4') {
      setMoment('BACK4')
    }
    if (currentTime > 46 && moment === 'FINAL') {
      setMoment('LAST_FORM')
    }
  }
  return (
    <div className="video-container">
      <div className="background">
        {moment === 'FORM' ? (
          <img
            src={formBackground}
            className="form-background"
            alt=""
            srcset=""
          />
        ) : (
          <></>
        )}

        <video
          autoPlay
          muted={videoState.muted}
          className="bg-scene"
          src={videoState.src}
          onTimeUpdate={getCurrentTime}
        ></video>
      </div>
      {/* <h1>{currentTime}</h1> */}

      <div className="menu-buttons">
        <div className="menu-center">
          {videoState.slider ? <Slider setMoment={setMoment}></Slider> : <></>}
          {videoState.question ? (
            <>
              <Decision
                question={videoState.questionId}
                option={videoState.opinion1}
                title={videoState.opinion1Title}
                videoState={videoState}
                setMoment={setMoment}
                next={videoState.next1}
              />
              <Decision
                question={videoState.questionId}
                option={videoState.opinion2}
                title={videoState.opinion2Title}
                videoState={videoState}
                setMoment={setMoment}
                next={videoState.next2}
                second={true}
              />
            </>
          ) : (
            <></>
          )}
          {currentTime > 22 && moment === 'INICIO' ? (
            <button
              onClick={() => {
                setMoment('FORM')
              }}
            >
              START
            </button>
          ) : (
            <></>
          )}
          {moment === 'BACK2' ? (
            <button
              className=" option back-button"
              onClick={() => setMoment('ESC2')}
            >
              Volver
            </button>
          ) : (
            <></>
          )}
          {moment === 'BACK3' ? (
            <div className="scene">
              <button
                className=" option back-button"
                onClick={() => setMoment('ESC3')}
              >
                Volver
              </button>
            </div>
          ) : (
            <></>
          )}
          {moment === 'BACK4' ? (
            <div className="scene">
              <button
                className=" option back-button"
                onClick={() => setMoment('ESC4')}
              >
                Volver
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <button className="muted" onClick={mutedFun}>
          {videoState.muted ? (
            <i className="fas fa-volume-up"></i>
          ) : (
            <i className="fas fa-volume-mute"></i>
          )}
        </button>
      </div>

      {moment === 'FORM' ? (
        <UserForm
          videoState={videoState}
          setMoment={setMoment}
          setVideoState={setVideoState}
        />
      ) : (
        <></>
      )}
      {moment === 'LAST_FORM' ? (
        <OpinionForm videoState={videoState} setMoment={setMoment} />
      ) : (
        <></>
      )}
      {moment === 'OPINIONS' ? (
        <ListOpinion videoState={videoState} setVideoState={setVideoState} />
      ) : (
        <></>
      )}
    </div>
  )
}
export default Video
