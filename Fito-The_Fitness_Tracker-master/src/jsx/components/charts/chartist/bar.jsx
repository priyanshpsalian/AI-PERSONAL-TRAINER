import React, { Component } from "react";
import ChartistGraph from "react-chartist";

function BarChart() {
   var data = {
      labels: [
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
      series: [
         [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
         [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4],
         [4, 6, 3, 9, 6, 5, 2, 8, 3, , 5, 4],
      ],
   };

   var options = {
      fullWidth: true,
      seriesBarDistance: 10,
	  height: 250,
      chartPadding: {
         right: 5,
      },
   };

   var type = "Bar";

   return (
      <>
         <ChartistGraph data={data} options={options} type={type} id="abc" />
      </>
   );
}

export default BarChart;
