import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexLine3 extends React.Component {
   constructor(props) {
      super(props);
      var today = new Date();
      console.log(today.getMinutes());   

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
                  today.getMinutes() + ":42",
                  today.getMinutes() + ":48",
                  today.getMinutes() + ":56",
                  today.getMinutes() + ":60",
                  today.getMinutes() + ":6",
                  today.getMinutes() + ":12",
                  today.getMinutes() + ":18",
                  today.getMinutes() + ":24",
                  today.getMinutes() + ":30",
                  today.getMinutes() + ":36",
                  today.getMinutes() + ":42",
                  today.getMinutes() + ":48",
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
