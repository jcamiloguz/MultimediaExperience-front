import React from 'react'
import './index.scss'
const Question = ({ content }) => {
  return (
    <div>
      <div className="nes-container question">
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Question
