import React, { Component } from "react";
import { Polar } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   datasets: [
      {
         data: [15, 18, 9, 6, 19],
         borderWidth: 0,
         backgroundColor: [
            "rgba(64, 24, 157, 1)",
            "rgba(27, 208, 132, 1)",
            "rgba(139, 199, 64, 1)",
            "rgba(255, 103, 70, 1)",
            "rgba(254, 128, 36, 1)",
         ],
      },
   ],
};

const options = {
   responsive: true,
   maintainAspectRatio: false,
};
class PolarChart extends Component {
   render() {
      return <Polar data={data} options={options} height={150} />;
   }
}

export default PolarChart;
