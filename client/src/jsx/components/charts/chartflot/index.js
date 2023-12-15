import { Row, Col, Card } from "react-bootstrap";
import BarChart from "./Bar";
import BarChart2 from "./BarChart2";
import BarChart3 from "./Bar3";
import BarChart4 from "./Bar4";
import LineChart from "./Line";
import LineChart2 from "./Line2";
import { Fragment } from "react";
import BasicLine from "./BasicLine";
import LineChart3 from "./Line3";

import PageTitle from "../../../layouts/PageTitle";

function ChartChartist() {
   return (
      <Fragment>
         <PageTitle motherMenu="Charts" activeMenu="Flot" />
         <Row>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChart />
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChart3 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChart4 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BarChart2 />
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <LineChart2 />
                  </Card.Body>
               </Card>
            </Col>

            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <LineChart />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Basic Line Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <BasicLine />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Basic Line Chart </Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <LineChart3 />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
   );
}

export default ChartChartist;
