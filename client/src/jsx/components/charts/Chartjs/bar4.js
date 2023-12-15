import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-streaming";
var createReactClass = require("create-react-class");

const data = {
   labels: [
      "4",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "9",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
   ],
   datasets: [
      {
         label: "My First dataset",
         backgroundColor: "rgba(105,255,147,1)",
         strokeColor: "rgba(105,255,147,1)",
         pointColor: "rgba(0,0,0,0)",
         pointStrokeColor: "rgba(105,255,147,1)",
         pointHighlightFill: "rgba(105,255,147,1)",
         pointHighlightStroke: "rgba(105,255,147,1)",
         data: [],
      },
   ],
};

const options = {
   tooltips: {
      enabled: false,
   },
   legend: {
      display: false,
   },
   scales: {
      yAxes: [
         {
            display: false,
         },
      ],
      xAxes: [
         {
            display: false,
            type: "realtime",
            realtime: {
               onRefresh: function () {
                  data.datasets[0].data.push({
                     x: Date.now(),
                     y: Math.random() * 100,
                  });
               },
               delay: 2000,
            },
         },
      ],
   },
   title: {
      display: false,
   },
   plugins: {
      streaming: {
         // per-chart option
         frameRate: 0, // chart is drawn 30 times every second
      },
   },
};

export default createReactClass({
   displayName: "LineExample",
   render() {
      return (
            <Bar data={data} options={options} height={150}/>
      );
   },
});
