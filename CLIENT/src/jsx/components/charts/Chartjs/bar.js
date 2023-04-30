import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
   labels: ["January", "February", "March", "April", "May", "June", "July"],
   datasets: [
      {
         label: "My First dataset",
         data: [65, 59, 80, 81, 56, 55, 80, 81, 56, 55, 40],
         borderColor: "rgba(52, 57, 87, 1)",
         borderWidth: "0",
         backgroundColor: "rgba(52, 57, 87, 1)",
      },
      {
         label: "My Second dataset",
         data: [28, 48, 40, 19, 86, 27, 40, 19, 86, 27, 90],
         borderColor: "rgba(88, 115, 254,1)",
         borderWidth: "0",
         backgroundColor: "rgba(88, 115, 254,1)",
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
            // Change here
            barPercentage: 0.8,
            gridLines: {
               display: false,
               drawBorder: false,
            },
         },
      ],
   },
};

class BarChart extends Component {
   render() {
      return (
         <>
            <Bar data={data} height={290} options={options} />
         </>
      );
   }

   // componentDidMount() {
   //     const { datasets } = this.refs.chart.chartInstance.data
   //     console.log(datasets[0].data);
   // }
}

export default BarChart;
