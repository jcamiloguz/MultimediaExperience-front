import React, { useState, useEffect } from 'react'
import ReactStars from 'react-stars'
import './index.scss'

export default function ListOpinion() {
  const [opinions, setOpinions] = useState([])
  useEffect(() => {
    getInfo()
  }, [])
  const getInfo = async () => {
    try {
      const response = await fetch(
        `https://multimedia-api.herokuapp.com/opinion`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'access-control-allow-origin': '*',
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      setOpinions(data)
      console.log(data)
    } catch (err) {
      throw err
    }
  }
  return (
    <div className=" list-opinion-container ">
      <h2 className="list-opinion-title">Otras opiniones!!</h2>
      {opinions.map((opinion) => (
        <div className="message-list opinion-list ">
          <div className="message-left">
            <div key={opinion.id} className="nes-balloon">
              {' '}
              <h2>{opinion.content_opinion}</h2>
              <ReactStars
                size={50}
                value={opinion.score}
                edit={false}
              ></ReactStars>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
