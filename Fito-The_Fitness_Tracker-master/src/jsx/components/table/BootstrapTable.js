import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import {
   Row,
   Col,
   Card,
   Table,
   Badge,
   Dropdown,
   ProgressBar,
} from "react-bootstrap";

/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import { Link } from "react-router-dom";

const BootstrapTable = () => {
   const svg1 = (
      <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
         <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24"></rect>
            <circle fill="#000000" cx="5" cy="12" r="2"></circle>
            <circle fill="#000000" cx="12" cy="12" r="2"></circle>
            <circle fill="#000000" cx="19" cy="12" r="2"></circle>
         </g>
      </svg>
   );

   return (
      <Fragment>
         <PageTitle activeMenu="Table" motherMenu="Bootstrap" />
         <Row>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Recent Payments Queue</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th className="width80">
                                 <strong>#</strong>
                              </th>
                              <th>
                                 <strong>PATIENT</strong>
                              </th>
                              <th>
                                 <strong>DR NAME</strong>
                              </th>
                              <th>
                                 <strong>DATE</strong>
                              </th>
                              <th>
                                 <strong>STATUS</strong>
                              </th>
                              <th>
                                 <strong>PRICE</strong>
                              </th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <strong>01</strong>
                              </td>
                              <td>Mr. Bobby</td>
                              <td>Dr. Jackson</td>
                              <td>01 August 2020</td>
                              <td>
                                 <Badge variant="success light">
                                    Successful
                                 </Badge>
                              </td>
                              <td>$21.56</td>
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="success"
                                       className="light sharp icon-false"
                                    >
                                       {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                       <Dropdown.Item>Edit</Dropdown.Item>
                                       <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <strong>02</strong>
                              </td>
                              <td>Mr. Bobby</td>
                              <td>Dr. Jackson</td>
                              <td>01 August 2020</td>
                              <td>
                                 <Badge variant="danger light">Canceled</Badge>
                              </td>
                              <td>$21.56</td>
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="danger"
                                       className="light sharp icon-false"
                                    >
                                       {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                       <Dropdown.Item>Edit</Dropdown.Item>
                                       <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <strong>03</strong>
                              </td>
                              <td>Mr. Bobby</td>
                              <td>Dr. Jackson</td>
                              <td>01 August 2020</td>
                              <td>
                                 <Badge variant="warning light">Pending</Badge>
                              </td>
                              <td>$21.56</td>
                              <td>
                                 <Dropdown>
                                    <Dropdown.Toggle
                                       variant="warning"
                                       className="light sharp icon-false"
                                    >
                                       {svg1}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                       <Dropdown.Item>Edit</Dropdown.Item>
                                       <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Exam Toppers</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th className="width50">
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="checkAll"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="checkAll"
                                    ></label>
                                 </div>
                              </th>
                              <th>
                                 <strong>ROLL NO.</strong>
                              </th>
                              <th>
                                 <strong>NAME</strong>
                              </th>
                              <th>
                                 <strong>Email</strong>
                              </th>
                              <th>
                                 <strong>Date</strong>
                              </th>
                              <th>
                                 <strong>Status</strong>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox2"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox2"
                                    ></label>
                                 </div>
                              </td>
                              <td>
                                 <strong>542</strong>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <img
                                       src={avatar1}
                                       className="rounded-lg mr-2"
                                       width="24"
                                       alt=""
                                    />{" "}
                                    <span className="w-space-no">
                                       Dr. Jackson
                                    </span>
                                 </div>
                              </td>
                              <td>example@example.com </td>
                              <td>01 August 2020</td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <i className="fa fa-circle text-success mr-1"></i>{" "}
                                    Successful
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex">
                                    <Link
                                       href="#"
                                       className="btn btn-primary shadow btn-xs sharp mr-1"
                                    >
                                       <i className="fa fa-pencil"></i>
                                    </Link>
                                    <Link
                                       href="#"
                                       className="btn btn-danger shadow btn-xs sharp"
                                    >
                                       <i className="fa fa-trash"></i>
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox3"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox3"
                                    ></label>
                                 </div>
                              </td>
                              <td>
                                 <strong>542</strong>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <img
                                       src={avatar2}
                                       className="rounded-lg mr-2"
                                       width="24"
                                       alt=""
                                    />{" "}
                                    <span className="w-space-no">
                                       Dr. Jackson
                                    </span>
                                 </div>
                              </td>
                              <td>example@example.com </td>
                              <td>01 August 2020</td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <i className="fa fa-circle text-danger mr-1"></i>{" "}
                                    Canceled
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex">
                                    <Link
                                       href="#"
                                       className="btn btn-primary shadow btn-xs sharp mr-1"
                                    >
                                       <i className="fa fa-pencil"></i>
                                    </Link>
                                    <Link
                                       href="#"
                                       className="btn btn-danger shadow btn-xs sharp"
                                    >
                                       <i className="fa fa-trash"></i>
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox4"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox4"
                                    ></label>
                                 </div>
                              </td>
                              <td>
                                 <strong>542</strong>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <img
                                       src={avatar3}
                                       className="rounded-lg mr-2"
                                       width="24"
                                       alt=""
                                    />{" "}
                                    <span className="w-space-no">
                                       Dr. Jackson
                                    </span>
                                 </div>
                              </td>
                              <td>example@example.com </td>
                              <td>01 August 2020</td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <i className="fa fa-circle text-warning mr-1"></i>{" "}
                                    Pending
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex">
                                    <Link
                                       href="#"
                                       className="btn btn-primary shadow btn-xs sharp mr-1"
                                    >
                                       <i className="fa fa-pencil"></i>
                                    </Link>
                                    <Link
                                       href="#"
                                       className="btn btn-danger shadow btn-xs sharp"
                                    >
                                       <i className="fa fa-trash"></i>
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Basic</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Price</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Kolor Tea Shirt For Man</td>
                              <td>
                                 <Badge variant="primary light">Sale</Badge>
                              </td>
                              <td>January 22</td>
                              <td className="color-primary">$21.56</td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Kolor Tea Shirt For Women</td>
                              <td>
                                 <Badge variant="success">Tax</Badge>
                              </td>
                              <td>January 30</td>
                              <td className="color-success">$55.32</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Blue Backpack For Baby</td>
                              <td>
                                 <Badge variant="danger">Extended</Badge>
                              </td>
                              <td>January 25</td>
                              <td className="color-danger">$14.85</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Table Striped</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive striped>
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Price</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Color Tea Shirt For Man</td>
                              <td>
                                 <Badge variant="primary">Sale</Badge>
                              </td>
                              <td>January 22</td>
                              <td className="color-primary">$21.56</td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Color Tea Shirt For Women</td>
                              <td>
                                 <Badge variant="success light">Tax</Badge>
                              </td>
                              <td>January 30</td>
                              <td className="color-success">$55.32</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Blue Backpack For Baby</td>
                              <td>
                                 <Badge variant="danger">Extended</Badge>
                              </td>
                              <td>January 25</td>
                              <td className="color-danger">$14.85</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Table Bordered</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive bordered>
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Price</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Kolor Tea Shirt For Man</td>
                              <td>
                                 <Badge variant="primary">Sale</Badge>
                              </td>
                              <td>January 22</td>
                              <td className="color-primary">$21.56</td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Kolor Tea Shirt For Women</td>
                              <td>
                                 <Badge variant="success">Tax</Badge>
                              </td>
                              <td>January 30</td>
                              <td className="color-success">$55.32</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Blue Backpack For Baby</td>
                              <td>
                                 <Badge variant="danger">Extended</Badge>
                              </td>
                              <td>January 25</td>
                              <td className="color-danger">$14.85</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Table Hover</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive hover>
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Status</th>
                              <th>Date</th>
                              <th>Price</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Kolor Tea Shirt For Man</td>
                              <td>
                                 <Badge variant="primary light">Sale</Badge>
                              </td>
                              <td>January 22</td>
                              <td className="color-primary">$21.56</td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Kolor Tea Shirt For Women</td>
                              <td>
                                 <Badge variant="success">Tax</Badge>
                              </td>
                              <td>January 30</td>
                              <td className="color-success">$55.32</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Blue Backpack For Baby</td>
                              <td>
                                 <Badge variant="danger light">Extended</Badge>
                              </td>
                              <td>January 25</td>
                              <td className="color-danger">$14.85</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
               {/* <!-- /# card --> */}
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Hover Table</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table
                        responsive
                        hover
                        className="header-border verticle-middle"
                     >
                        <thead>
                           <tr>
                              <th scope="col">#</th>
                              <th scope="col">Product</th>
                              <th scope="col">Popularity</th>
                              <th scope="col">Sales</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Air Conditioner</td>
                              <td>
                                 <ProgressBar now={70} variant="primary" />
                              </td>
                              <td>
                                 <Badge variant="primary light">70%</Badge>
                              </td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Textiles</td>
                              <td>
                                 <ProgressBar variant="success" now="70" />
                              </td>
                              <td>
                                 <Badge variant="success">70%</Badge>
                              </td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Milk Powder</td>
                              <td>
                                 <ProgressBar variant="dark" now="70" />
                              </td>
                              <td>
                                 <Badge variant="dark light">70%</Badge>
                              </td>
                           </tr>
                           <tr>
                              <th>4</th>
                              <td>Vehicles</td>
                              <td>
                                 <ProgressBar variant="danger" now="70" />
                              </td>
                              <td>
                                 <Badge variant="danger">70%</Badge>
                              </td>
                           </tr>
                           <tr>
                              <th>5</th>
                              <td>Boats</td>
                              <td>
                                 <ProgressBar variant="warning" now="70" />
                              </td>
                              <td>
                                 <Badge variant="warning">70%</Badge>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bordered Table</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table
                        responsive
                        bordered
                        className="verticle-middle"
                     >
                        <thead>
                           <tr>
                              <th scope="col">Task</th>
                              <th scope="col">Progress</th>
                              <th scope="col">Deadline</th>
                              <th scope="col">Label</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Air Conditioner</td>
                              <td>
                                 <ProgressBar now={70} variant="primary" />
                              </td>
                              <td>Apr 20,2018</td>
                              <td>
                                 <Badge variant="primary light">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Textiles</td>
                              <td>
                                 <ProgressBar now={70} variant="success" />
                              </td>
                              <td>May 27,2018</td>
                              <td>
                                 <Badge variant="success">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Milk Powder</td>
                              <td>
                                 <ProgressBar now={70} variant="dark" />
                              </td>
                              <td>May 18,2018</td>
                              <td>
                                 <Badge variant="dark light">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Vehicles</td>
                              <td>
                                 <ProgressBar now={70} variant="danger" />
                              </td>
                              <td>Mar 27,2018</td>
                              <td>
                                 <Badge variant="danger">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Boats</td>
                              <td>
                                 <ProgressBar now={70} variant="warning" />
                              </td>
                              <td>Jun 28,2018</td>
                              <td>
                                 <Badge variant="warning">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Table Stripped</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table
                        responsive
                        striped
                        bordered
                        className="verticle-middle"
                     >
                        <thead>
                           <tr>
                              <th scope="col">Task</th>
                              <th scope="col">Progress</th>
                              <th scope="col">Deadline</th>
                              <th scope="col">Label</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Air Conditioner</td>
                              <td>
                                 <ProgressBar now={70} variant="primary" />
                              </td>
                              <td>Apr 20,2018</td>
                              <td>
                                 <Badge variant="primary light">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Textiles</td>
                              <td>
                                 <ProgressBar now={70} variant="success" />
                              </td>
                              <td>May 27,2018</td>
                              <td>
                                 <Badge variant="success">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Milk Powder</td>
                              <td>
                                 <ProgressBar now={70} variant="dark" />
                              </td>
                              <td>May 18,2018</td>
                              <td>
                                 <Badge variant="dark light">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Vehicles</td>
                              <td>
                                 <ProgressBar now={70} variant="danger" />
                              </td>
                              <td>Mar 27,2018</td>
                              <td>
                                 <Badge variant="danger">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                           <tr>
                              <td>Boats</td>
                              <td>
                                 <ProgressBar now={70} variant="warning" />
                              </td>
                              <td>Jun 28,2018</td>
                              <td>
                                 <Badge variant="warning">70%</Badge>
                              </td>
                              <td>
                                 <span>
                                    <Link
                                       href="#"
                                       className="mr-4"
                                       title="Edit"
                                    >
                                       <i className="fa fa-pencil color-muted"></i>{" "}
                                    </Link>
                                    <Link href="#" title="Close">
                                       <i className="fa fa-close color-danger"></i>
                                    </Link>
                                 </span>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Responsive Table</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive className="header-border ">
                        <thead>
                           <tr>
                              <th>Invoice</th>
                              <th>User</th>
                              <th>Date</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Country</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <Link href="#">Order #26589</Link>
                              </td>
                              <td>Herman Beck</td>
                              <td>
                                 <span className="text-muted">
                                    Oct 16, 2017
                                 </span>
                              </td>
                              <td>$45.00</td>
                              <td>
                                 <Badge variant="success">Paid</Badge>
                              </td>
                              <td>EN</td>
                           </tr>
                           <tr>
                              <td>
                                 <Link href="#">Order #58746</Link>
                              </td>
                              <td>Mary Adams</td>
                              <td>
                                 <span className="text-muted">
                                    Oct 12, 2017
                                 </span>
                              </td>
                              <td>$245.30</td>
                              <td>
                                 <Badge variant="info light">Shipped</Badge>
                              </td>
                              <td>CN</td>
                           </tr>
                           <tr>
                              <td>
                                 <Link href="#">Order #98458</Link>
                              </td>
                              <td>Caleb Richards</td>
                              <td>
                                 <span className="text-muted">
                                    May 18, 2017
                                 </span>
                              </td>
                              <td>$38.00</td>
                              <td>
                                 <Badge variant="danger">Shipped</Badge>
                              </td>
                              <td>AU</td>
                           </tr>
                           <tr>
                              <td>
                                 <Link href="#">Order #32658</Link>
                              </td>
                              <td>June Lane</td>
                              <td>
                                 <span className="text-muted">
                                    Apr 28, 2017
                                 </span>
                              </td>
                              <td>$77.99</td>
                              <td>
                                 <Badge variant="success">Paid</Badge>
                              </td>
                              <td>FR</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Heading With Background</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive>
                        <thead className="thead-info">
                           <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Primary Table</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive className="primary-table-bordered">
                        <thead className="thead-primary">
                           <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Primary Table Hover</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive className="primary-table-bg-hover">
                        <thead>
                           <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <th>1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                           </tr>
                           <tr>
                              <th>2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                           </tr>
                           <tr>
                              <th>3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                           </tr>
                           <tr>
                              <th>4</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                           </tr>
                           <tr>
                              <th>5</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                           </tr>
                           <tr>
                              <th>5</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Contextual Table</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive className="header-border">
                        <thead>
                           <tr>
                              <th>#</th>
                              <th>Column heading</th>
                              <th>Column heading</th>
                              <th>Column heading</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr className="table-active">
                              <td>1</td>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                           </tr>
                           <tr className="table-primary">
                              <td>1</td>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                           </tr>
                           <tr className="table-success">
                              <td>2</td>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                           </tr>
                           <tr className="table-info">
                              <td>3</td>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                           </tr>
                           <tr className="table-warning">
                              <td>4</td>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                           </tr>
                           <tr className="table-danger">
                              <td>5</td>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
   );
};

export default BootstrapTable;
