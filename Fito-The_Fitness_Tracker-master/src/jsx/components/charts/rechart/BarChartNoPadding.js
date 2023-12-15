import React, { PureComponent } from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

const data = [
   {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
   },
   {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
   },
   {
      name: "Page C",
      uv: 2000,
      pv: 3000,
      amt: 2290,
   },
   {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
   },
   {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
   },
   {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
   },
   {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
   },
   {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
   },
  
];

export default class Example extends PureComponent {
   render() {
      return (
         <ResponsiveContainer width="100%" aspect={4.0 / 2.0}>
            <BarChart data={data} barSize={30}>
               
               <Bar
                  dataKey="pv"
                  fill={this.props.color ? this.props.color : "#6CC51D"}
				  
               />
            </BarChart>
         </ResponsiveContainer>
      );
   }
}
