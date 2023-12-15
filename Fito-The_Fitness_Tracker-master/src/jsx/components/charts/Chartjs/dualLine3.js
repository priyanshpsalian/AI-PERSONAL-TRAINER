import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   labels: [
      "Week 01",
      "Week 02",
      "Week 03",
      "Week 04",
      "Week 05",
      "Week 06",
      "Week 07",
      "Week 08",
      "Week 09",
      "Week 10",
   ],
   datasets: [
      {
         label: "My First dataset",
         data: [78, 80, 20, 40, 75, 75, 25, 40, 10, 30],
         borderColor: "rgba(78, 54, 226, 1)",
         borderWidth: "5",
         pointHoverRadius: 10,
         backgroundColor: "transparent",
         pointBackgroundColor: "rgba(78, 54, 226, 1)",
      },
      {
         label: "My First dataset 2",
         data: [30, 50, 30, 40, 30, 40, 20, 10, 10, 10],
         borderColor: "rgba(27, 208, 132, 1)",
         borderWidth: "5",
         backgroundColor: "transparent",
         pointHoverRadius: 10,
         pointBorderWidth: 5,
         pointBorderColor: "rgba(255, 255, 255, 1)",
         pointBackgroundColor: "rgba(27, 208, 132, 1)",
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
class DualLine3 extends Component {
   render() {
      return <Line data={data} options={options} />;
   }
}

export default DualLine3;
