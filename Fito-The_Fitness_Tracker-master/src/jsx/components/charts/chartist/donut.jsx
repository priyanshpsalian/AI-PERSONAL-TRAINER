import React from "react";
import ChartistGraph from "react-chartist";

function DonutChart() {
   var data = {
      series: [10, 20, 50, 20, 5, 50, 15],
      labels: [1, 2, 3, 4, 5, 6, 7],
   };

   var options = {
      donut: true,
      showLabel: false,
   };

   var type = "Pie";

   return (
      <>
         <ChartistGraph data={data} options={options} type={type} />
      </>
   );
}

export default DonutChart;
