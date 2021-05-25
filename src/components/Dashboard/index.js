import React from "react";
import { Bar } from "react-chartjs-2";
import Barchart from "../Chart";
import InfoParticipants from "../InfoParticipants";
import NavAdmin from "../NavAdmin";
import "./index.scss";

function Dashboard() {
  const Data = [{
    name: "andres murillo",
    age: 26,
    email: "sebastian.murillo",
    cellNumber: "+577777777",
    opinion:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab debitis, quod deleniti qui soluta labore ipsam ullam odit perferendis sit. Rem aperiam minima quis ut voluptate maxime voluptas culpa!",
  },{
    name: "sebastian murillo",
    age: 26,
    email: "sebastian.murillo",
    cellNumber: "+577777777",
    opinion:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab debitis, quod deleniti qui soluta labore ipsam ullam odit perferendis sit. Rem aperiam minima quis ut voluptate maxime voluptas culpa!",
  },{
    name: "Juan murillo",
    age: 26,
    email: "sebastian.murillo",
    cellNumber: "+577777777",
    opinion:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ab debitis, quod deleniti qui soluta labore ipsam ullam odit perferendis sit. Rem aperiam minima quis ut voluptate maxime voluptas culpa!",
  }];

  return (
    <>
      <NavAdmin />
      <div className="dashboard">
        <div class="nes-container is-rounded">
          <h1 className="nes-text is-error">Dashboard</h1>
          <div className="dashboard__admin">
            <i class="nes-ash"></i>
            <div className="dashboard__info">
              <h3>Andres Felipe Gallego</h3>
              <p>Director de Ingeniería Multimedia</p>
            </div>
            <div className="dashboard__participants nes-container is-rounded">
              <h2 className="nes-text is-error">10</h2>
              <p>Participantes</p>
            </div>
          </div>
          <div className="dashboard__charts">
            <Barchart
              activity="Actividad 1"
              option1="comic sans"
              option2="roboto"
              description="Si necesitas escribir un documento, ¿Qué fuente utilizarías?"
            />
            <Barchart
              activity="Actividad 2"
              option1="print"
              option2="math.random"
              description="Si debes escribir los siguientes caracteres: 1.63 ¿Qué tipo de variable estás usando? "
            />
            <Barchart
              activity="Actividad 3"
              option1="5 km"
              option2="10 km"
              description="Si quieres mandar una imagen por Bluetooth a un amigo ¿que tan cerca debes estar de él?"
            />
            <Barchart
              activity="Actividad 4"
              option1="negro"
              option2="rojo"
              description="Si quisieras encender este led (imagen del circuito) ¿qué cable conectarías? "
            />
          </div>
          <h1>Edades</h1>
          <Bar
            data={{
              labels: ["edad 1", "edad 2", "edad 3", "edad 4"],
              datasets: [
                {
                  label: "edad",
                  data: [12, 15, 20, 21],
                  backgroundColor: [
                    "rgba(140,32,34,0.2)",
                    "rgba(146,204,65,0.2)",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
                  fill: "origin",
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
            <h1>Participantes</h1>
            {Data.map(({ name, age, email, cellNumber, opinion }) => (
              <InfoParticipants
                name={name}
                age={age}
                email={email}
                cellNumber={cellNumber}
                opinion={opinion}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
