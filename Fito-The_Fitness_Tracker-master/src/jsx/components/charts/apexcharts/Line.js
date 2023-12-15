import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Cycling",
               data: [50, 100, 35, 35, 0, 0, 80, 20, 40, 40, 40, 40],
            },
         ],
         options: {
            chart: {
               height: 350,
               type: "area",
               toolbar: {
                  show: false,
               },
            },
            dataLabels: {
               enabled: false,
            },

            stroke: {
               width: [4],
               colors: ["#1EA7C5"],
               curve: "straight",
            },
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
            },
            colors: ["#1EA7C5"],
            xaxis: {
               type: "text",
               categories: [
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
            },
            markers: {
               size: [8],
               strokeWidth: [0],
               strokeColors: ["#1EA7C5"],
               border: 0,
               colors: ["#1EA7C5"],
               hover: {
                  size: 10,
               },
            },
            yaxis: {
               title: {
                  text: "",
               },
            },
         },
      };
   }

   render() {
      return (
         <div id="chart">
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="area"
               height={350}
            />
         </div>
      );
   }
}

export default ApexLine;
