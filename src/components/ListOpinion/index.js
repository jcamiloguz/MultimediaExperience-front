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
    <div className="nes-container " className="list_opinion">
      <h2>Lista de comentarios</h2>
      {opinions.map((opinion) => (
        <div key={opinion.id} className="opinion">
          {' '}
          <h2>{opinion.content_opinion}</h2>
          <p>{opinion.score}</p>
        </div>
      ))}
    </div>
  )
}
