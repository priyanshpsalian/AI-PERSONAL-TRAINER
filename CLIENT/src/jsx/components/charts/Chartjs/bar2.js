import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart2 extends Component {
   render() {
      const data = {
         labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
         ],
         datasets: [
            {
               label: "My First dataset",
               data: [65, 59, 80, 81, 56, 55, 40, 88, 45, 95, 54, 76],
               borderColor: this.props.color ? this.props.color : "#2f4cdd",
               borderWidth: "0",
               backgroundColor: this.props.color ? this.props.color : "#2f4cdd",
            },
         ],
      };

      const options = {
         legend: false,
         responsive: true,
         maintainAspectRatio: false,
         scales: {
            yAxes: [
               {
                  display: false,
                  ticks: {
                     beginAtZero: true,
                     display: false,
                     max: 100,
                     min: 0,
                     stepSize: 10,
                  },
                  gridLines: {
                     display: false,
                     drawBorder: false,
                  },
               },
            ],
            xAxes: [
               {
                  display: false,
                  barPercentage: 0.1,
                  gridLines: {
                     display: false,
                     drawBorder: false,
                  },
                  ticks: {
                     display: false,
                  },
               },
            ],
         },
      };

      return (
         <>
            <Bar data={data} height={100} options={options} />
         </>
      );
   }
}

export default BarChart2;
