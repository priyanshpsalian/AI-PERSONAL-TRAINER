import * as React from "react";
import {
   ChartComponent,
   SeriesCollectionDirective,
   SeriesDirective,
   Inject,
   Legend,
   Category,
   Tooltip,
   ColumnSeries,
   DataLabel,
} from "@syncfusion/ej2-react-charts";
import { SampleBase } from "./sample-base";
export let data1 = [
   { x: "a1", y: 6 },
   { x: "a2", y: 4 },
   { x: "a3", y: 1 },
   { x: "a4", y: -5 },
   { x: "a5", y: -8 },
   { x: "a6", y: 8 },
   { x: "a7", y: 2 },
];
export let data2 = [
   { x: "a1", y: 2 },
   { x: "a2", y: -3 },
   { x: "a3", y: -3 },
   { x: "a4", y: 9 },
   { x: "a5", y: 1 },
   { x: "a6", y: 9 },
   { x: "a7", y: 1 },
];
export let data3 = [
   { x: "a1", y: 8 },
   { x: "a2", y: 8 },
   { x: "a3", y: 6 },
   { x: "a4", y: 2 },
   { x: "a5", y: 4 },
   { x: "a6", y: 8 },
   { x: "a7", y: 6 },
];

export class SparkNagetivePositive extends SampleBase {
   render() {
      return (
         <ChartComponent
            id="chart"
            primaryXAxis={{
               visible: false,
               valueType: "Category",
               interval: 1,
               majorGridLines: { width: 0 },
            }}
            primaryYAxis={{
               visible: false,
               majorGridLines: { width: 0 },
               majorTickLines: { width: 0 },
               lineStyle: { width: 0 },
               labelStyle: { color: "transparent" },
            }}
            chartArea={{ border: { width: 0 } }}
            // tooltip={{ enable: false }}
            width={"100%"}
            height={"255px"}
         >
            <Inject
               services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
            />
            <SeriesCollectionDirective>
               <SeriesDirective
                  dataSource={data1}
                  xName="x"
                  yName="y"
                  type="Column"
                  fill="#6EC51E"
                  columnSpacing={0.2}
                  columnWidth={1}
                  marker={{
                     dataLabel: {
                        visible: false,
                     },
                  }}
               />
               <SeriesDirective
                  dataSource={data2}
                  xName="x"
                  yName="y"
                  type="Column"
                  fill="#209F84"
                  columnSpacing={0.2}
                  columnWidth={1}
                  marker={{
                     dataLabel: {
                        visible: false,
                     },
                  }}
               />
               <SeriesDirective
                  dataSource={data3}
                  xName="x"
                  yName="y"
                  type="Column"
                  fill="#2781D5"
                  columnSpacing={0.2}
                  columnWidth={1}
                  marker={{
                     dataLabel: {
                        visible: false,
                     },
                  }}
               />
            </SeriesCollectionDirective>
         </ChartComponent>
      );
   }
}
export default SparkNagetivePositive;
