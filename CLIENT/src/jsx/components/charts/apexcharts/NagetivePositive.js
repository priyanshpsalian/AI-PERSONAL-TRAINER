import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class NagetivePositive extends Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Cash Flow",
               data: [6, 4, 1, -5, -8, 8, 9, 1],
            },
            {
               name: "Cash Flow",
               data: [2, -3, -3, 9, 1, 9, -8, 8],
            },
            {
               name: "Cash Flow",
               data: [6, 2, -3, -3, 9, 1, 1, 9],
            },
         ],
         hover: {
            show: false,
         },
         stroke: {
            width: [0.1, 0.1, 0.1],
         },
         options: {
            chart: {
               type: "bar",
               height: this.props.height ? this.props.height : 244,
               toolbar: {
                  show: false,
               },
            },

            zoom: {
               enabled: false,
            },
            legend: {
               show: false,
            },
            plotOptions: {
               bar: {
                  columnWidth: "100%",
               },
            },
            colors: ["#6EC51E", "#209F84", "#2781D5"],
            dataLabels: {
               enabled: false,
            },
            grid: {
               show: false,
            },
            yaxis: {
               show: false,
            },
            xaxis: {
               labels: {
                  show: false,
               },
               axisBorder: {
                  show: false,
               },
               axisTicks: {
                  show: false,
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
               height={this.props.height ? this.props.height : 350}
            />
         </div>
      );
   }
}
export default NagetivePositive;
