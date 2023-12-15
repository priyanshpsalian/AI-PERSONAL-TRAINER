import React, { Component } from "react";

import { Bar } from "react-chartjs-2";

const data = {
   labels: ["January", "February", "March", "April", "May", "June", "July"],
   datasets: [
      {
         label: "My First dataset",
         data: [65, 59, 80, 81, 56, 55, 80, 81, 56, 55, 40],
         borderColor: "rgba(52, 57, 87, 1)",
         backgroundColor: "#40189D",
      },
      {
         label: "My Second dataset",
         data: [28, 48, 40, 19, 86, 27, 40, 19, 86, 27, 90],
         borderColor: "#8BC740",
         backgroundColor: "#8BC740",
      },
   ],
};

const options = {
   maintainAspectRatio: false,
   tooltips: {
      enabled: false,
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
      xAxes: [
         {
            display: false,
            categoryPercentage: 1.0,
            barPercentage: 1,
            gridLines: {
               display: false,
               drawBorder: false,
            },
         },
      ],
   },
};

class BarChart3 extends Component {
   render() {
      return (
         <>
            <Bar data={data} width={433} height={251} options={options} />
         </>
      );
   }
}

export default BarChart3;
