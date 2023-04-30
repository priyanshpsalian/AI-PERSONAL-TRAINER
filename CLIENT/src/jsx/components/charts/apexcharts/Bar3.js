import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexBar3 = () => {
   const series = [
      {
         name: "Income",
         data: [420, 550, 850, 220, 650],
      },
      {
         name: "Expenses",
         data: [170, 850, 101, 90, 250],
      },
   ];
   const options = {
      chart: {
         type: "bar",
         toolbar: {
            show: false,
         },
      },
      plotOptions: {
         bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
         },
      },
      dataLabels: {
         enabled: false,
      },

      legend: {
         show: true,
         fontSize: "12px",
         fontWeight: 300,

         labels: {
            colors: "black",
         },
         position: "bottom",
         horizontalAlign: "center",
         markers: {
            width: 19,
            height: 19,
            strokeWidth: 0,
            radius: 19,
            strokeColor: "#fff",
            fillColors: ["#369DC9", "#D45BFF"],
            offsetX: 0,
            offsetY: 0,
         },
      },
      yaxis: {
         labels: {
            style: {
               colors: "#3e4954",
               fontSize: "14px",
               fontFamily: "Poppins",
               fontWeight: 100,
            },
         },
      },
      stroke: {
         show: true,
         width: 2,
         colors: ["transparent"],
      },
      xaxis: {
         categories: ["06", "07", "08", "09", "10"],
      },
      fill: {
         colors: ["#369DC9", "#D45BFF"],
         opacity: 1,
      },
      tooltip: {
         y: {
            formatter: function (val) {
               return "$ " + val + " thousands";
            },
         },
      },
   };

   return (
      <ReactApexChart
         options={options}
         series={series}
         type="bar"
         height={350}
      />
   );
};

export default ApexBar3;
