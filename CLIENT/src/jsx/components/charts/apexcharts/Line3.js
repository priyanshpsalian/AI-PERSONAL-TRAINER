import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine3 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Running",
               data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110, 60],
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
               colors: ["#FF9432"],
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
            colors: ["#FF9432"],
            markers: {
               size: [6],
               strokeWidth: [4],
               strokeColors: ["#FF9432"],
               border: 0,
               colors: ["#fff"],
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

export default ApexLine3;
