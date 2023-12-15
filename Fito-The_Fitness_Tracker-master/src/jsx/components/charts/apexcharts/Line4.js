import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine4 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Yoga",
               data: [65, 65, 65, 120, 120, 80, 120, 100, 100, 120, 120, 120],
            },
            {
               name: "Cycling",
               data: [50, 100, 35, 35, 0, 0, 80, 20, 40, 40, 40, 40],
            },
            {
               name: "Running",
               data: [20, 40, 20, 80, 40, 40, 20, 60, 60, 20, 110, 60],
            },
         ],
         options: {
            chart: {
               height: 350,
               type: "line",
               toolbar: {
                  show: false,
               },
            },
            dataLabels: {
               enabled: false,
            },

            stroke: {
               width: [4, 4, 4],
               colors: ["#C046D3", "#1EA7C5", "#FF9432"],
               curve: "straight",
            },
            legend: {
               show: false,
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
            colors: ["#C046D3", "#1EA7C5", "#FF9432"],

            markers: {
               size: [8, 8, 6],
               strokeWidth: [0, 0, 4],
               strokeColors: ["#C046D3", "#1EA7C5", "#FF9432"],
               border: 0,
               colors: ["#C046D3", "#1EA7C5", "#fff"],
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
               type="line"
               height={380}
            />
         </div>
      );
   }
}

export default ApexLine4;
