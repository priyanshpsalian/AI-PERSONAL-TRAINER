import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart6 extends Component {
   render() {
      const data = {
         labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
         ],
         datasets: [
            {
               label: "My First dataset",
               data: [28, 35, 36, 48, 46, 42, 60],
               backgroundColor: "#ffff",
               borderColor: this.props.color ? this.props.color : "#5514A4",
               borderWidth: 0,
               strokeColor: this.props.color ? this.props.color : "#5514A4",
               capBezierPoints: !0,
               pointColor: this.props.color ? this.props.color : "#fff",
               pointBorderColor: this.props.color ? this.props.color : "#fff",
               pointBackgroundColor: this.props.color
                  ? this.props.color
                  : "#5514A4",
               pointBorderWidth: 0,
               pointRadius: 1,
               pointHoverBorderColor: this.props.color
                  ? this.props.color
                  : "#5514A4",
               pointHoverRadius: 3,
               pointStyle: "none",
               borderWidth: 2,
            },
         ],
      };

      const options = {
         responsive: true,
         maintainAspectRatio: false,
         tooltips: {
            enabled: true,
         },
         legend: {
            display: false,
            labels: {
               usePointStyle: false,
            },
         },
         scales: {
            xAxes: [
               {
                  display: false,
                  gridLines: {
                     display: false,
                     drawBorder: false,
                  },
                  scaleLabel: {
                     display: false,
                     labelString: "Month",
                  },
                  ticks: {
                     beginAtZero: true,
                  },
               },
            ],
            yAxes: [
               {
                  display: false,
                  gridLines: {
                     display: false,
                     drawBorder: false,
                  },
                  scaleLabel: {
                     display: true,
                     labelString: "Value",
                  },
               },
            ],
         },
         title: {
            display: true,
         },
      };
      return (
         <>
            <Line
               data={data}
               options={options}
               height={this.props.height ? this.props.height : 300}
            />
         </>
      );
   }
}

export default LineChart6;
