import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class ApexNagetivePosative extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "New Clients",
               data: [
                  70,
                  20,
                  75,
                  20,
                  50,
                  40,
                  65,
                  15,
                  40,
                  55,
                  60,
                  20,
                  75,
                  40,
                  25,
                  70,
                  20,
                  40,
                  65,
                  50,
               ],
            },
            {
               name: "Retained Clients",
               data: [
                  -60,
                  -10,
                  -50,
                  -25,
                  -30,
                  -65,
                  -22,
                  -10,
                  -50,
                  -20,
                  -70,
                  -35,
                  -60,
                  -20,
                  -30,
                  -45,
                  -70,
                  -50,
                  -45,
                  -10,
               ],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 320,
               stacked: true,
               toolbar: {
                  show: false,
               },
               sparkline: {
                  //enabled: true
               },
               backgroundBarRadius: 5,
               offsetX: -10,
            },
            plotOptions: {
               bar: {
                  columnWidth: "30%",
                  endingShape: "rounded",
                  colors: {
                     backgroundBarColors: [
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                        "rgba(0,0,0,0)",
                     ],
                     backgroundBarOpacity: 1,
                     backgroundBarRadius: 5,
                     opacity: 0,
                  },
               },
               distributed: true,
            },
            colors: ["#6EC51E", "#FF285C"],

            grid: {
               show: true,
            },
            legend: {
               show: false,
            },
            fill: {
               opacity: 1,
            },
            dataLabels: {
               enabled: false,
               colors: ["#6EC51E", "#FF285C"],
               dropShadow: {
                  enabled: true,
                  top: 1,
                  left: 1,
                  blur: 1,
                  opacity: 1,
               },
            },
            xaxis: {
               categories: [
                  "01",
                  "02",
                  "03",
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
               ],
               labels: {
                  style: {
                     colors: "#787878",
                     fontSize: "13px",
                     fontFamily: "Poppins",
                     fontWeight: 400,
                  },
               },
               crosshairs: {
                  show: false,
               },
               axisBorder: {
                  show: false,
               },
            },

            yaxis: {
               //show: false
               labels: {
                  style: {
                     colors: "#787878",
                     fontSize: "13px",
                     fontFamily: "Poppins",
                     fontWeight: 400,
                  },
               },
            },

            tooltip: {
               x: {
                  show: true,
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
               type="bar"
               height={320}
            />
         </div>
      );
   }
}

export default ApexNagetivePosative;
