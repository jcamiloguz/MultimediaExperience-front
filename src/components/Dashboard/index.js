import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import Barchart from '../Chart'
import InfoParticipants from '../InfoParticipants'
import NavAdmin from '../NavAdmin'
import './index.scss'

function Dashboard() {
  const [data, setData] = useState({})

  const getQuestions = async () => {
    try {
      const response = await fetch(
        `https://multimedia-api.herokuapp.com/question`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'access-control-allow-origin': '*',
            'Content-Type': 'application/json',
          },
        }
      )
      const response2 = await fetch(
        `https://multimedia-api.herokuapp.com/user`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'access-control-allow-origin': '*',
            'Content-Type': 'application/json',
          },
        }
      )
      const response3 = await fetch(
        `https://multimedia-api.herokuapp.com/age`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'access-control-allow-origin': '*',
            'Content-Type': 'application/json',
          },
        }
      )
      const res = await response.json()
      const res2 = await response2.json()
      const res3 = await response3.json()
      let labels = []
      res3.map(({ age }) => {
        labels.push(age)
      })
      let quan = []
      res3.map(({ quantity }) => {
        quan.push(quantity)
      })
      setData(() => ({
        ...data,
        questions: res,
        people: res2,
        age: { label: labels, quantity: quan },
      }))
    } catch (err) {
      throw err
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])
  return (
    <>
      <NavAdmin />
      <main>
        <div className="dashboard nes-container is-rounded">
          <h1 className="nes-text is-error">Dashboard</h1>
          <div className="dashboard__admin">
            <i className="nes-ash"></i>
            <div className="dashboard__info">
              <h3>Andres Felipe Gallego</h3>
              <p>Director de Ingeniería Multimedia</p>
            </div>
            <div className="dashboard__participants nes-container is-rounded">
              <h2 className="nes-text is-error">
                {data.people ? data.people.length : 0}
              </h2>
              <p>Participantes</p>
            </div>
          </div>
          <div className="dashboard__charts">
            <Barchart
              activity="Actividad 1"
              option1="comic sans"
              option2="roboto"
              description="Si necesitas escribir un documento, ¿Qué fuente utilizarías?"
              data1={data.questions ? data.questions.question1.option1 : 1}
              data2={data.questions ? data.questions.question1.option2 : 1}
            />
            <Barchart
              activity="Actividad 2"
              option1="print"
              option2="math.random"
              description="Si debes escribir los siguientes caracteres: 1.63 ¿Qué tipo de variable estás usando? "
              data1={data.questions ? data.questions.question2.option1 : 1}
              data2={data.questions ? data.questions.question2.option2 : 1}
            />
            <Barchart
              activity="Actividad 3"
              option1="5 km"
              option2="10 km"
              description="Si quieres mandar una imagen por Bluetooth a un amigo ¿que tan cerca debes estar de él?"
              data1={data.questions ? data.questions.question3.option1 : 1}
              data2={data.questions ? data.questions.question3.option2 : 1}
            />
          </div>
          <h2>Edades</h2>
          <Bar
            data={{
              labels: data.age ? data.age.label : [],
              datasets: [
                {
                  label: 'edad',
                  data: data.age ? data.age.quantity : [],
                  backgroundColor: [
                    'rgba(140,32,34,0.2)',
                    'rgba(146,204,65,0.2)',
                  ],
                  borderColor: 'black',
                  borderWidth: 2,
                  fill: 'origin',
                },
              ],
            }}
            height={20}
            width={50}
            options={{
              scales: {
                yAxis: [
                  {
                    ticks: {
                      beginAtZero: true,
                    },
                  },
                ],
              },
            }}
          />
          <div className="dashboard__users">
            <h2>Participantes</h2>
            {data.people ? (
              data.people.map(
                ({
                  id_user,
                  user_name,
                  user_last_name,
                  age,
                  email,
                  score,
                  content_opinion,
                }) => (
                  <InfoParticipants
                    name={`${user_name} ${user_last_name}`}
                    age={age}
                    email={email}
                    score={score}
                    opinion={content_opinion}
                    key={id_user}
                  />
                )
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Dashboard
