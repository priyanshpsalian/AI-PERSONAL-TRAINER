import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const ChartPie = ({ color1, color2, color3, height, width }) => {
   const data = {
      datasets: [
         {
            data: [45, 25, 30],
            borderWidth: 0,
            backgroundColor: [
               `${color1 ? color1 : "rgba(89, 59, 219, 0.9)"}`,
               `${color2 ? color2 : "rgba(89, 59, 219, 0.7)"}`,
               `${color3 ? color3 : "rgba(89, 59, 219, 0.5)"}`,
            ],
            hoverBackgroundColor: [
               `${color1 ? color1 : "rgba(89, 59, 219, 0.9)"}`,
               `${color2 ? color2 : "rgba(89, 59, 219, 0.7)"}`,
               `${color3 ? color3 : "rgba(89, 59, 219, 0.5)"}`,
            ],
         },
      ],
      labels: ["one", "two", "three"],
   };

   const options = {
      responsive: true,
      legend: false,
      maintainAspectRatio: false,
   };

   return (
      <>
         <Pie data={data} height={height ? height : 330} options={options} />
      </>
   );
};

export default ChartPie;
