import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   labels: ["0.0", "1.0", "2.0", "3.0", "4.0", "5.0", "6.0"],
   datasets: [
      {
         label: "My First dataset",
         data: [38, 45, 56, 48, 56, 52, 60],
         borderColor: "#297F00",
         borderWidth: "0",
         backgroundColor: "#fff",
         borderColor: "#297F00",
      },
      {
         label: "My Second dataset",
         data: [10, 25, 30, 38, 46, 42, 50],
         borderColor: "rgba(52, 57, 87, 1)",
         backgroundColor: "#fff",
         borderColor: "#40189D",
      },
   ],
};

const options = {
   maintainAspectRatio: false,
   tooltips: {
      enabled: false,
   },
   legend: {
      display: true,
      labels: {
         usePointStyle: false,
      },
   },
   scales: {
      yAxes: [
         {
            ticks: {
               beginAtZero: true,
            },
            gridLines: {
               display: false,
               drawBorder: false,
            },
         },
      ],
      xAxes: [
         {
            barPercentage: 0.7,
            gridLines: {
               display: false,
               drawBorder: false,
            },
         },
      ],
   },
};

class LineChart2 extends Component {
   render() {
      return (
         <>
            <Line data={data} width={433} height={251} options={options} />
         </>
      );
   }
}

export default LineChart2;
