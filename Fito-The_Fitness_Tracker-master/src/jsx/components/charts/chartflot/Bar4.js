import React, { Component } from "react";

import { Bar } from "react-chartjs-2";

const data = {
   labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "",
      "",
      "",
      "",
      "",
      "",
   ],
   datasets: [
      {
         label: "My First dataset",
         data: [65, 59, 80, 81, 56, 55, 80, 81, 56, 55, 40, 89, 76, 55, 30, 40],
         borderColor: "#5514A4",
         backgroundColor: "#5514A4",
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
            display: false,
            ticks: {
               beginAtZero: true,
               min: 0,
            },
         },
      ],
      xAxes: [{ display: false, barPercentage: 0.15 }],
   },
};

class BarChart4 extends Component {
   render() {
      return (
         <>
            <Bar data={data} width={433} height={251} options={options} />
         </>
      );
   }
}

export default BarChart4;
