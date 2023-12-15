import React, { Component } from "react";

import { Row, Col, Card } from "react-bootstrap";
import {
   Sparklines,
   SparklinesLine,
   SparklinesCurve,
   SparklinesBars,
   SparklinesSpots,
} from "react-sparklines";

import PageTitle from "../../../layouts/PageTitle";

import SparkNagetivePositive from "./NagetivePositive";

const sampleData = [
   64,
   24,
   40,
   76,
   19,
   0,
   2,
   46,
   65,
   12,
   10,
   6,
   15,
   57,
   35,
   81,
   86,
   12,
   12,
   21,
   53,
   44,
   2,
   1,
   58,
   9,
   61,
   64,
   42,
   92,
   58,
   9,
   34,
   47,
   89,
   52,
   3,
   69,
   33,
   2,
   60,
   71,
   71,
   22,
   65,
   70,
   31,
   81,
   36,
   89,
];

function ChartSparkline() {
   return (
      <>
         <PageTitle motherMenu="Charts" activeMenu="Sparkline" />
         <Row>
            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Simple</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Simple Curve</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesCurve />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Customizable</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine color="#f00" />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine style={{ fill: "none" }} />
                        <SparklinesSpots />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine color="#56b45d" />
                        <SparklinesSpots style={{ fill: "#56b45d" }} />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Spots</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData} margin={6}>
                        <SparklinesLine
                           style={{
                              strokeWidth: 3,
                              stroke: "#336aff",
                              fill: "none",
                           }}
                        />
                        <SparklinesSpots
                           size={4}
                           style={{
                              stroke: "#336aff",
                              strokeWidth: 3,
                              fill: "white",
                           }}
                        />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bars</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesBars style={{ fill: "#41c3f9" }} />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={3}>
               <Card>
                  <Card.Header>
                     <Card.Title>Real world examples</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Sparklines data={sampleData}>
                        <SparklinesLine
                           style={{
                              strokeWidth: 3,
                              stroke: "#336aff",
                              fill: "none",
                           }}
                        />
                     </Sparklines>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Nagetive Positive</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <SparkNagetivePositive />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   );
}

export default ChartSparkline;
