import React, { useEffect, useState } from 'react'
import './index.scss'
import Decision from '../Decision/index'
import Question from '../Question/index'
import UserForm from '../UserForm'
import OpinionForm from '../OpinionForm'
import ListOpinion from '../ListOpinion'
import Slider from '../Slider'

const INICIO =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/INICIO.mp4'
const ESC2 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Dos.mp4'
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
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Dos.mp4'
const CORR4 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Cuatro+(Correcto).mp4'
const INCOR4 =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/Escena+Cuatro+(Incorrecto).mp4'
const FINAL =
  'https://multimedia-experience.s3.us-east-2.amazonaws.com/drive-download-20210528T042417Z-001/EscenaF(Loop).mp4'
// const contentSwitch = (moment) => {
//   switch (moment) {
//     case 0:
//       return <UserForm videoState={videoState} setVideoState={setVideoState} />
//       break
//     case 1:
//       return (
//         <div className="scene">
//           <video src={INICIO} className="bg-scene" alt="" />
//           <Question content="Si debes redactar un documento formal que fuente usarias?" />
//           <Decision
//             question={1}
//             option={1}
//             title={'Comic Sans'}
//             correct={false}
//             videoState={videoState}
//             setVideoState={setVideoState}
//           />
//           <Decision
//             classname="option"
//             question={1}
//             option={2}
//             title={'Roboto'}
//             correct={true}
//             videoState={videoState}
//             setVideoState={setVideoState}
//             second={true}
//           />
//         </div>
//       )
//     case 2:
//       return (
//         <div className="scene">
//           <video src={ESC3} className="bg-scene" alt="" />
//           <Question content="Cual de las dos lineas imprime un  -HOLA MUNDO-?" />
//           <Decision
//             classname="option"
//             question={2}
//             option={3}
//             title={'print("HOLA MUNDO")'}
//             correct={true}
//             videoState={videoState}
//             setVideoState={setVideoState}
//           />
//           <Decision
//             classname="option"
//             question={2}
//             option={4}
//             title={'math.random("HOLA MUNDO")'}
//             correct={false}
//             videoState={videoState}
//             setVideoState={setVideoState}
//             second={true}
//           />
//         </div>
//       )
//       break
//     case 3:
//       return (
//         <div className="scene">
//           <video src={ESC4} className="bg-scene" alt="" />
//           <Question content="Que debes hacer para encender el led y acabar con arduibot?" />
//           <Decision
//             classname="option"
//             question={3}
//             option={5}
//             title={'Desconectar el cable negro'}
//             correct={false}
//             videoState={videoState}
//             setVideoState={setVideoState}
//           />
//           <Decision
//             classname="option"
//             question={3}
//             option={6}
//             title={'Conectar elcable rojo'}
//             correct={true}
//             videoState={videoState}
//             setVideoState={setVideoState}
//             second={true}
//           />
//         </div>
//       )
//       break
//     case 4:
//       return (
//         <div className="scene">
//           <video src={ESC4} className="bg-scene" alt="" />
//           <Question content="A cuantos metro puedes usar tu bluetooth para pedir una bomba que destruya al super pez?" />
//           <Decision
//             classname="option"
//             question={4}
//             option={7}
//             title={'Maximo 5KM'}
//             correct={false}
//             videoState={videoState}
//             setVideoState={setVideoState}
//           />
//           <Decision
//             classname="option"
//             question={4}
//             option={8}
//             title={'Maximo 5M'}
//             correct={true}
//             videoState={videoState}
//             setVideoState={setVideoState}
//             second={true}
//           />
//         </div>
//       )
//       break
//     case 5:
//       return (
//         <div className="scene">
//           <video src={ESC4} className="bg-scene" alt="" />
//           <OpinionForm videoState={videoState} setVideoState={setVideoState} />
//         </div>
//       )
//       break
//     case 6:
//       return (
//         <div className="scene">
//           <video src={ESC4} className="bg-scene" alt="" />
//           <ListOpinion videoState={videoState} setVideoState={setVideoState} />
//         </div>
//       )
//       break
//     case 'incorrect1':
//       return (
//         <div className="scene">
//           <video src={ESC4} className="bg-scene" alt="" />
//           <button
//             className=" option left"
//             onClick={() => setVideoState({ ...videoState, moment: 1 })}
//           >
//             Back
//           </button>
//         </div>
//       )
//       break
//     case 'incorrect2':
//       return (
//         <div className="scene">
//           <video src={ESC4} className="bg-scene" alt="" />
//           <button
//             className=" option left"
//             onClick={() => setVideoState({ ...videoState, moment: 2 })}
//           >
//             Back
//           </button>
//         </div>
//       )
//       break
//     case 'incorrect3':
//       return (
//         <div className="scene">
//           <vide src={ESC4} className="bg-scene" alt="" />
//           <button
//             className=" option left"
//             onClick={() => setVideoState({ ...videoState, moment: 3 })}
//           >
//             Back
//           </button>
//         </div>
//       )
//       break
//     case 'incorrect4':
//       return (
//         <div className="scene">
//           <video autosrc={ESC4} className="bg-scene" alt="" />
//           <button
//             className=" option left"
//             onClick={() => setVideoState({ ...videoState, moment: 4 })}
//           >
//             Back
//           </button>
//         </div>
//       )
//       break
//     default:
//       return <></>
//       break
//   }
// }
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
    },
    FORM: () => {
      console.log('FORM')
      setCurrentTime(0)
      setVideoState({ ...videoState, src: '' })
    },
    ESC2: () => {
      console.log('ESC2')
      setVideoState({ ...videoState, src: ESC2 })
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
      })
    },
    INC2: () => {
      setVideoState({ ...videoState, src: INCOR2 })
    },
    BACK2: () => {},
    COR2: () => {
      setVideoState({ ...videoState, src: CORR2 })
    },
    ESC3: () => {
      setVideoState({ ...videoState, src: ESC3 })
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
      })
    },
    INC3: () => {
      setVideoState({ ...videoState, src: INCOR3 })
    },
    BACK3: () => {},
    COR3: () => {
      setVideoState({ ...videoState, src: CORR3 })
    },
    ESC4: () => {
      setVideoState({ ...videoState, src: ESC4 })
    },
    QUE4: () => {
      setVideoState({
        ...videoState,
        question: true,
        questionTitle:
          'A cuantos metro puedes usar tu bluetooth para pedir una bomba que destruya al super pez?',
        questionId: 3,
        opinion1: 5,
        next1: 'INC3',
        opinion1Title: 'Maximo 5KM',
        opinion2: 6,
        opinion2Title: 'Maximo 5M',
        next2: 'COR3',
      })
    },
    INC4: () => {
      setVideoState({ ...videoState, src: INCOR4 })
    },
    COR4: () => {
      setVideoState({ ...videoState, src: CORR4 })
    },
    BACK4: () => {},
    FINAL: () => {
      setVideoState({ ...videoState, src: FINAL })
    },
    LAST_FORM: () => {
      setVideoState({ ...videoState, src: '' })
    },
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
    if (currentTime > 34 && moment === 'ESC2') {
      setMoment('QUE2')
    }
  }
  return (
    <div className="video-container">
      <div className="background">
        <video
          autoPlay
          muted={videoState.muted}
          className="bg-scene"
          src={videoState.src}
          onTimeUpdate={getCurrentTime}
        ></video>
      </div>
      <h1>{currentTime}</h1>
      <button onClick={mutedFun}>Mute</button>
      {moment === 'INICIO' ? (
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
      {videoState.slider ? (
        <Slider videoState={videoState} setVideoState={setVideoState}></Slider>
      ) : (
        <></>
      )}
      {videoState.question ? (
        <>
          <Question content={videoState.questionTitle} />
          <Decision
            classname="option"
            question={videoState.questionId}
            option={videoState.opinion1}
            title={videoState.opinion1Title}
            videoState={videoState}
            setVideoState={setVideoState}
            //  next={}
          />
          <Decision
            classname="option"
            question={videoState.questionId}
            option={videoState.opinion1}
            title={videoState.opinion1Title}
            videoState={videoState}
            setVideoState={setVideoState}
            second={true}
          />
        </>
      ) : (
        <></>
      )}
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
        <OpinionForm videoState={videoState} setVideoState={setVideoState} />
      ) : (
        <></>
      )}
      {moment === 'OPINION' ? (
        <ListOpinion videoState={videoState} setVideoState={setVideoState} />
      ) : (
        <></>
      )}
    </div>
  )
}
export default Video
