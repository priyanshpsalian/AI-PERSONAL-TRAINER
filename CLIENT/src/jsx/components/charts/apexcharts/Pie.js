import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexPie extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [44, 55, 40],
         options: {
            chart: {
               // height: 350,
               type: "donut",
               offsetY: -10,
               // toolbar: {
               //    show: false,
               // },
            },
            labels: ["Blue Stat", "Green Stat", "Green Stat"],
            colors: [
               "rgba(30,167,197,1)",
               "rgba(110,197,30,1)",
               "rgba(235,235,235,1)",
            ],
            stroke: {
               width: [0],
            },
            legend: {
               position: "top",
               offsetX: -10,
            },
            dataLabels: {
               enabled: false,
            },
            responsive: [
               {
                  breakpoint: 480,
                  options: {
                     chart: {
                        // width: 100,
                     },
                  },
               },
            ],
         },
      };
   }

   render() {
      return (
         <div
            id="chart"
            className="text-center m-auto"
            style={{ width: this.props.width ? `${this.props.width}%` : "80%" }}
         >
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="donut"
               height={this.props.height ? this.props.height : 350}
            />
         </div>
      );
   }
}

export default ApexPie;
