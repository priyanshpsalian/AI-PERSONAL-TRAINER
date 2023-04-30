import React, { Suspense } from "react";
import loadable from "@loadable/component";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import pMinDelay from "p-min-delay";

import PageTitle from "../../../layouts/PageTitle";

const ApexBar2 = loadable(() => pMinDelay(import("./Bar2"), 500));
const ApexBar3 = loadable(() => pMinDelay(import("./Bar3"), 500));
const ApexRedialBar = loadable(() => pMinDelay(import("./RadialBar"), 500));
const ApexLine = loadable(() => pMinDelay(import("./Line5"), 500));
const ApexLine3 = loadable(() => pMinDelay(import("./Line3"), 500));
const ApexLine4 = loadable(() => pMinDelay(import("./Line4"), 500));
const ApexPie = loadable(() => pMinDelay(import("./Pie"), 500));

function ApexChart() {
   return (
      <div className="h-80">
         <PageTitle motherMenu="Charts" activeMenu="ApexChart" />
         <Row>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexBar2 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexBar3 />
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexLine />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexLine3 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexLine4 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Pie</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexPie />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Redial Bar</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexRedialBar />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
   );
}

export default ApexChart;
