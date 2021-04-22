import React from 'react'

const Decision = ({
  title,
  option,
  question,
  correct,
  videoState,
  setVideoState,
  second = false,
}) => {
  const clickHandler = async (e) => {
    e.preventDefault()
    const answerData = {
      id_question: question,
      id_option: option,
      id_user: videoState.idUser,
    }
    try {
      const rawResponse = await fetch('http://localhost:9000/answer', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerData),
      })
      console.log(JSON.stringify(answerData))
      const content = await rawResponse.json()
      console.log(content)
    } catch (err) {
      throw err
    }
    if (correct) {
      setVideoState({ ...videoState, moment: videoState.moment + 1 })
    } else {
      setVideoState({ ...videoState, moment: `incorrect${videoState.moment}` })
    }
  }

  return (
    <div>
      <button
        onClick={clickHandler}
        className={`nes-btn option ${second ? 'left' : 'right'}`}
      >
        {title}
      </button>
    </div>
  )
}

export default Decision
