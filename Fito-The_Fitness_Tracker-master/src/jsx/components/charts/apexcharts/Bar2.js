import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexBar2 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Cycling",
               data: [80, 40, 55, 20, 45, 30, 80, 90, 85, 90, 30, 85],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 230,
               toolbar: {
                  show: false,
               },
            },
            plotOptions: {
               bar: {
                  horizontal: false,
                  dataLabels: {
                     position: "top",
                  },
               },
            },
			colors:['#1ea7c5'],
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
            },
            dataLabels: {
               enabled: false,
               offsetX: -6,
               style: {
                  fontSize: "12px",
                  colors: ["#fff"],
               },
            },
            stroke: {
               show: false,
            },
            yaxis: {
               lines: {
                  show: false,
               },
            },
            xaxis: {
               show: false,
               categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
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
               height={350}
			   
            />
         </div>
      );
   }
}
export default ApexBar2;
