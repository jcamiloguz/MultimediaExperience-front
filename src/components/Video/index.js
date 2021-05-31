import React, { useState } from 'react'
import './index.scss'
import Decision from '../Decision/index'
import Question from '../Question/index'
import UserForm from '../UserForm'
import OpinionForm from '../OpinionForm'
import ListOpinion from '../ListOpinion'

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
    moment: 0,
    muted: true,
    src: INICIO,
  })
  const mutedFun = () => {
    setVideoState({ ...videoState, muted: !videoState.muted })
  }
  return (
    <div className="video-container">
      <div className="background">
        <video
          autoPlay
          muted={videoState.muted}
          className="bg-scene"
          src={videoState.src}
        ></video>
      </div>
      <button onClick={mutedFun}>Mute</button>
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
