import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
   {
      name: "Page A",
      uv: 1340,
      pv: 1655,
      amt: 1350,
   },
   {
      name: "Page B",
      uv: -1500,
      pv: 1398,
      amt: 1900,
   },
   {
      name: "Page C",
      uv: -1000,
      pv: -1600,
      amt: 2105,
   },
   {
      name: "Page D",
      uv: 2000,
      pv: 1950,
      amt: 2000,
   },
   {
      name: "Page E",
      uv: -1890,
      pv: 2100,
      amt: 2181,
   },
   {
      name: "Page F",
      uv: 1305,
      pv: -1900,
      amt: 2050,
   },
   {
      name: "Page G",
      uv: 1780,
      pv: 2050,
      amt: 2100,
   },
];

export default class Example extends PureComponent {
   render() {
      return (
         <ResponsiveContainer
            height={this.props.height ? this.props.height : "100%"}
            width={this.props.width ? this.props.width : "100%"	}
         >
            <BarChart
               data={data}
               margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
               }}
            >
               <Bar dataKey="pv" fill="#40189D" />
               <Bar dataKey="uv" fill="#209F84" />
               <Bar dataKey="amt" fill="#2781D5" />
            </BarChart>
         </ResponsiveContainer>
      );
   }
}
