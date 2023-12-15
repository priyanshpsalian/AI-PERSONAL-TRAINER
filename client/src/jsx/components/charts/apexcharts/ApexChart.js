import React from "react";
import ReactApexChart from "react-apexcharts";

var generateDayWiseTimeSeries = function (baseval, count, yrange) {
   var i = 0;
   var series = [];
   while (i < count) {
      var x = baseval;
      var y =
         Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
   }
   return series;
};

class ApexChart extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "South",
               data: generateDayWiseTimeSeries(
                  new Date("11 Feb 2017 GMT").getTime(),
                  20,
                  {
                     min: 10,
                     max: 60,
                  }
               ),
            },
            {
               name: "North",
               data: generateDayWiseTimeSeries(
                  new Date("11 Feb 2017 GMT").getTime(),
                  20,
                  {
                     min: 10,
                     max: 20,
                  }
               ),
            },
            {
               name: "Central",
               data: generateDayWiseTimeSeries(
                  new Date("11 Feb 2017 GMT").getTime(),
                  20,
                  {
                     min: 10,
                     max: 15,
                  }
               ),
            },
         ],
         options: {
            chart: {
               type: "area",
               height: 350,
               stacked: true,
               events: {
                  selection: function (chart, e) {
                     console.log(new Date(e.xaxis.min));
                  },
               },
               toolbar: {
                  show: false,
               },
            },
            colors: ["#008FFB", "#00E396", "#CED4DC"],
            dataLabels: {
               enabled: false,
            },
            stroke: {
               show: true,
               curve: "smooth",
            },
            fill: {
               type: "gradient",
               gradient: {
                  opacityFrom: 0.6,
                  opacityTo: 0.8,
               },
            },
            zoom: {
               enabled: false,
            },
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
            },
            xaxis: {
               type: "datetime",
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

export default ApexChart;
