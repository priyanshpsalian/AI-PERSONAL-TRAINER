import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import PageTitle from "../../../layouts/PageTitle";

import BarChartNoPadding from "./BarChartNoPadding";
import PositiveNagative from "./PositiveNagative";

function RechartJs() {
   return (
      <>
         <PageTitle motherMenu="Charts" activeMenu="ReChartJs" />
         <Row className="h-80">
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChartNoPadding />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <PositiveNagative />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </>
   );
}

export default RechartJs;
