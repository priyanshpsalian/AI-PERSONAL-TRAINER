import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";
import ChartDoughnut from "./donught";
import ChartPie from "./pie";

import PageTitle from "../../../layouts/PageTitle";
import BarChart1 from "./bar1";
import BarChart5 from "./bar5";
import BarChart6 from "./bar6";
import LineChart1 from "./line1";
import DualLine from "./dualLine";
import BasicArea from "./basicArea";
import GradientArea from "./gradinetArea";
import DualArea from "./dualArea";
import Radar from "./radar";
import PolarChart from "./polar";
import DualLine2 from "./dualLine2";

function ChartChartjs() {
   return (
      <>
         <PageTitle motherMenu="Charts" activeMenu="ChartJs" />
         <Row>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChart1 />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChart5 />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChart6 />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <LineChart1 />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Dual Line Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <DualLine />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Dual Line Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <DualLine2 />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Basic Area Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BasicArea />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Gradinet Area Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <GradientArea />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Dual Area Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <DualArea />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Radar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Radar />
                  </Card.Body>
               </Card>
            </Col>

            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Pie</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ChartPie />
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Doughnut</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ChartDoughnut />
                  </Card.Body>
               </Card>
            </Col>

            <Col lg={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Polar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <PolarChart />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   );
}

export default ChartChartjs;
