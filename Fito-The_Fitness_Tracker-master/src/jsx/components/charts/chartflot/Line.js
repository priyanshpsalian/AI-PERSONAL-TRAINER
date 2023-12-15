import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   labels: ["0.0", "1.", "2.0", "3.0", "4.0", "5.0", "6.0"],
   datasets: [
      {
         data: [17, 35, 40, 48, 56, 52, 80],
         backgroundColor: "rgba(254, 128, 36,.7)",
         borderColor: "rgba(254, 128, 36,.7)",
      },
      {
         data: [20, 45, 30, 38, 76, 42, 80],
         backgroundColor: "rgba(64, 24, 157, 0.7)",
         borderColor: "rgba(64, 24, 157, .7)",
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
               display: false,
               drawBorder: true,
            },
         },
      ],
   },
};

class LineChart extends Component {
   render() {
      return (
         <>
            <Line data={data} options={options} width={433} height={251} />
         </>
      );
   }
}

export default LineChart;
