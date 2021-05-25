import React,{useState} from "react";
import './index.scss'
const InfoParticipants=({name, age, email, cellNumber, opinion})=> {
    const [isActive,setIsActive] = useState(false)
  
  return (
    <div className="accordion">
      <div className="accordion__item nes-container is-rounded">
        <div className="accordion_name"
        onClick={()=> setIsActive(!isActive)}>
          <div>{name}</div>
          <div>{isActive?'-':'+'}</div>
        </div>
        {isActive && <div className="accordion__content">
            <h1 className="nes-text is-error">Datos Personales</h1>
            <p><strong>Nombre:</strong>{name}</p>
            <p><strong>Edad:</strong>{age}</p>
            <p><strong>E-mail:</strong>{email}</p>
            <p><strong>celular:</strong>{cellNumber}</p>
            <h1 className="nes-text is-error">Opinión</h1>
            <p>{opinion}</p>
           
        </div>}
        
      </div>
    </div>
  );
}

export default InfoParticipants;
