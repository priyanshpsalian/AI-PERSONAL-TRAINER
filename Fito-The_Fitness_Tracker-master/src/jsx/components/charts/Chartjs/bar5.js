import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart5 extends Component {
   render() {
      const data = {
         defaultFontFamily: "Poppins",
         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
         datasets: [
            {
               label: "My First dataset",
               data: [65, 59, 80, 81, 56, 55, 40],
               borderColor: "rgba(64, 24, 157, 1)",
               borderWidth: "0",
               backgroundColor: "rgba(64, 24, 157, 0.5)",
               hoverBackgroundColor: "rgba(64, 24, 157, 0.5)",
            },
         ],
      };
      const options = {
         legend: false,
         scales: {
            yAxes: [
               {
                  ticks: {
                     beginAtZero: true,
                  },
               },
            ],
            xAxes: [
               {
                  // Change here
                  barPercentage: 0.5,
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

export default BarChart5;
