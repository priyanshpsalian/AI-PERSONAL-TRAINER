import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPie2 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         labels: ["35%", "55%", "10%"],
         series: [30, 25, 15],
         options: {
            labelInterpolationFnc: function (value) {
               return value[0];
            },
            chart: {
               type: "donut",
               toolbar: {
                  show: false,
               },
               zoom: {
                  enabled: false,
               },
            },
            legend: {
               show: false,
            },
            dataLabels: {
               enabled: false,
            },
            colors: ["#FF5C00", "#5CABC3", "#61D165"],
            stroke: {
               show: false,
               width: [0],
            },
            plotOptions: {
               pie: {
                  // customScale: 1.5,
                  startAngle: 0,
                  expandOnClick: false,
                  donut: {
                     size: "65%",
                  },
               },
            },

            yaxis: {
               show: false,
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
               type="donut"
               height={350}
            />
         </div>
      );
   }
}

export default ApexPie2;
