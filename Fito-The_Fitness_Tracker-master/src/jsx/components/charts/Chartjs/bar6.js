import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
         labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
         datasets: [
            {
               label: "Red",
               backgroundColor: "rgba(64, 24, 157, 1)",
               hoverBackgroundColor: "rgba(64, 24, 157, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
            {
               label: "Green",
               backgroundColor: "rgba(27, 208, 132, 1)",
               hoverBackgroundColor: "rgba(27, 208, 132, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
            {
               label: "Blue",
               backgroundColor: "rgba(139, 199, 64, 1)",
               hoverBackgroundColor: "rgba(139, 199, 64, 1)",
               data: ["12", "12", "12", "12", "12", "12", "12"],
            },
         ],
      };
      const options = {
         legend: {
            display: false,
         },
         title: {
            display: false,
         },
         tooltips: {
            mode: "index",
            intersect: false,
         },
         responsive: true,
         scales: {
            xAxes: [
               {
                  stacked: true,
               },
            ],
            yAxes: [
               {
                  stacked: true,
               },
            ],
         },
      };

      return (
         <>
            <Bar data={data} height={150} options={options} />
         </>
      );
   }
}

export default BarChart6;
