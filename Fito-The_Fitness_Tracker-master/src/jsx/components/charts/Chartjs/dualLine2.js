import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
   datasets: [
      {
         label: "My First dataset",
         data: [18, 38, 38, 70, 75, 60, 75, 66, 70, 78, 69, 75, 70],
         borderColor: "rgba(64, 24, 157, 1)",
         borderWidth: "5",
         pointHoverRadius: 10,
         backgroundColor: "transparent",
         pointBackgroundColor: "rgba(64, 24, 157, 1)",
      },
      {
         label: "My First dataset 2",
         data: [18, 20, 20, 30, 45, 40, 25, 37, 20, 40, 35, 30, 45],
         borderColor: "rgba(63, 154, 224, 1)",
         borderWidth: "5",
         backgroundColor: "transparent",
         pointHoverRadius: 10,
         pointBorderWidth: 5,
         pointBorderColor: "rgba(255, 255, 255, 1)",
         pointBackgroundColor: "rgba(63, 154, 224, 1)",
      },
   ],
};

const options = {
   legend: false,
   tooltips: {
      intersect: false,
   },
   hover: {
      // mode: "nearest",
      intersect: true,
   },
   scales: {
      yAxes: [
         {
            display: false,
            ticks: {
               beginAtZero: true,
               max: 100,
               min: 0,
               stepSize: 20,
               padding: 10,
            },
         },
      ],
      xAxes: [
         {
            ticks: {
               padding: 5,
            },
         },
      ],
   },
   elements: {
      point: {
         radius: 0,
      },
   },
};
class DualLine2 extends Component {
   render() {
      return (
         <>
            <Line data={data} options={options} height={150} />
         </>
      );
   }
}

export default DualLine2;
