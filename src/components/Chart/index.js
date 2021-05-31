import React from 'react'
import './index.scss'
import { Bar } from 'react-chartjs-2'

const Barchart = ({
  description,
  option1,
  option2,
  activity,
  data1,
  data2,
}) => {
  return (
    <div className="bar nes-container is-rounded">
      <h2 className="nes-text is-error">{activity}</h2>
      <div className="bar__description">
        <p>{description}</p>
      </div>
      <div>
        <Bar
          data={{
            labels: [`${option1}`, `${option2}`],
            datasets: [
              {
                data: [data1, data2],
                label: 'Respuestas',
                backgroundColor: ['rgb(140,32,34)', 'rgb(146,204,65)'],
                borderColor: 'black',
                borderWidth: 3,
              },
            ],
          }}
          height={200}
          width={200}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  )
}

export default Barchart
