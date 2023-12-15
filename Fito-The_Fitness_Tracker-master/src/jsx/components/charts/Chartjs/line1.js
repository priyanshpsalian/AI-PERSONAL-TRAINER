import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
   defaultFontFamily: "Poppins",
   labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
   datasets: [
      {
         label: "My First dataset",
         data: [25, 20, 60, 41, 66, 45, 80],
         borderColor: "rgba(64, 24, 157, 1)",
         borderWidth: "2",
         backgroundColor: "transparent",
         pointBackgroundColor: "rgba(64, 24, 157, 1)",
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
};
class LineChart1 extends Component {
   render() {
      return (
         <>
            <Line data={data} options={options} height={150} />
         </>
      );
   }

   // componentDidMount() {
   //     const { datasets } = this.refs.chart.chartInstance.data
   //     console.log(datasets[0].data);
   // }
}

export default LineChart1;
