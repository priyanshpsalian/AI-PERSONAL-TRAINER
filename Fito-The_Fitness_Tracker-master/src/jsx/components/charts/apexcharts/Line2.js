import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine2 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Yoga",
               data: [65, 65, 65, 120, 120, 80, 120, 100, 100, 120, 120, 120],
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
               colors: ["#C046D3"],
               curve: "straight",
            },

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
            colors: ["#C046D3"],
            markers: {
               size: [8],
               strokeWidth: [0],
               strokeColors: ["#C046D3"],
               border: 0,
               colors: ["#C046D3"],
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

export default ApexLine2;
