import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
   weight: 5,
   defaultFontFamily: "Poppins",
   datasets: [
      {
         data: [45, 25, 20],
         borderWidth: 3,
         borderColor: "rgba(255,255,255,1)",
         backgroundColor: [
            "rgba(64, 24, 157, 1)",
            "rgba(27, 208, 132, 1)",
            "rgba(139, 199, 64, 1)",
         ],
         hoverBackgroundColor: [
            "rgba(64, 24, 157, 0.9)",
            "rgba(27, 208, 132, .9)",
            "rgba(139, 199, 64, .9)",
         ],
      },
   ],
};

const options = {
   weight: 1,
   cutoutPercentage: 70,
   responsive: true,
   maintainAspectRatio: false,
};

class ChartDoughnut extends Component {
   render() {
      return <Doughnut data={data} options={options} height={150} />;
   }
}

export default ChartDoughnut;
