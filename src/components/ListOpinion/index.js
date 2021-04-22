import React, { useState, useEffect } from 'react'

export default function ListOpinion() {
  const [opinions, setOpinions] = useState([])
  useEffect(() => {
    getInfo()
  }, [])
  const getInfo = async () => {
    try {
      const response = await fetch(`http://localhost:9000/opinion`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'access-control-allow-origin': '*',
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      setOpinions(data)
      console.log(data)
    } catch (err) {
      throw err
    }
  }
  return (
    <div className="nes-container">
      {opinions.map((opinion) => (
        <div key={opinion.id}>
          {' '}
          <h2>{opinion.content_opinion}</h2>
          <p>{opinion.score}</p>
        </div>
      ))}
    </div>
  )
}
