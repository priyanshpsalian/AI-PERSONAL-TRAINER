import React, { Component } from "react";

import { Bar } from "react-chartjs-2";

const data = {
   labels: ["January", "February", "March", "April", "May", "June", "July"],
   datasets: [
      {
         label: "My First dataset",
         data: [65, 59, 80, 81, 56, 55, 80, 81, 56, 55, 40],
         borderColor: "rgba(52, 57, 87, 1)",
         backgroundColor: "rgba(52, 57, 87, 1)",
      },
      {
         label: "My Second dataset",
         data: [28, 48, 40, 19, 86, 27, 40, 19, 86, 27, 90],
         borderColor: "rgba(88, 115, 254,1)",
         backgroundColor: "rgba(88, 115, 254,1)",
      },
   ],
};

const options = {
   maintainAspectRatio: false,
   tooltips: {
      enabled: true,
   },
   legend: {
      display: false,
      labels: {
         usePointStyle: false,
      },
   },
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: false,
               min: 0,
            },
            gridLines: {
               display: true,
               drawBorder: false,
            },
         },
      ],
      xAxes: [
         {
            barPercentage: 0.7,
            gridLines: {
               display: true,
               drawBorder: true,
            },
         },
      ],
   },
};

class BarChart extends Component {
   render() {
      return (
         <>
            <Bar data={data} width={433} height={251} options={options} />
         </>
      );
   }
}

export default BarChart;
