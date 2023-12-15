import React, { Fragment, Suspense, lazy } from "react";
import PageTitle from "../layouts/PageTitle";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

import avatar1 from "../../images/avatar/1.jpg";
import avatar2 from "../../images/avatar/2.jpg";
import avatar3 from "../../images/avatar/3.jpg";
import avatar4 from "../../images/avatar/4.jpg";
import profile from "../../images/profile/profile.png";
import bg5 from "../../images/big/img5.jpg";
import bg1 from "../../images/big/img1.jpg";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import Pie from "../components/charts/Chartjs/pie";
import BarChart from "../components/charts/chartflot/Bar";

import { Sparklines, SparklinesLine, SparklinesBars } from "react-sparklines";
import LineChart from "../components/charts/Chartjs/line3";
import LineChart4 from "../components/charts/Chartjs/line4";
import LineChart6 from "../components/charts/Chartjs/line6";
import BarChartNoPadding from "../components/charts/rechart/BarChartNoPadding";
import LineChart3 from "../components/charts/Chartjs/line3";
import SparkNagetivePositive from "../components/charts/Sparkline/NagetivePositive";
import BarChart2 from "../components/charts/Chartjs/bar2";
import BarChart3 from "../components/charts/Chartjs/bar3";
import LiveBar from "../components/charts/Chartjs/bar4";

import RealTime from "../components/charts/Chartjs/realtime";

const sampleData = [10, 24, 30, 10, 15, 0, 20, 30, 65, 12, 10, 6];

const Ext = lazy(() => import("../layouts/Ext"));

const Widget = () => {
   return (
      <Fragment>
         {/* <Ext /> */}
         <PageTitle activeMenu="Statistics" motherMenu="Widget" />
         <div className="row">
            <div className="col-xl-4 col-xxl-6 col-lg-6">
               <div className="card">
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-title">Timeline</h4>
                  </div>
                  <div className="card-body">
                     <PerfectScrollbar
                        id="DZ_W_TimeLine"
                        className="widget-timeline dz-scroll height370 ps ps--active-y"
                     >
                        <ul className="timeline">
                           <li>
                              <div className="timeline-badge primary"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>10 minutes ago</span>
                                 <h6 className="mb-0">
                                    Youtube, a video-sharing website, goes live{" "}
                                    <strong className="text-primary">
                                       $500
                                    </strong>
                                    .
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge info"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>20 minutes ago</span>
                                 <h6 className="mb-0">
                                    New order placed{" "}
                                    <strong className="text-info">
                                       #XF-2356.
                                    </strong>
                                 </h6>
                                 <p className="mb-0">
                                    Quisque a consequat ante Sit amet magna at
                                    volutapt...
                                 </p>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge danger"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>30 minutes ago</span>
                                 <h6 className="mb-0">
                                    john just buy your product{" "}
                                    <strong className="text-warning">
                                       Sell $250
                                    </strong>
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge success"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>15 minutes ago</span>
                                 <h6 className="mb-0">
                                    StumbleUpon is acquired by eBay.{" "}
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge warning"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>20 minutes ago</span>
                                 <h6 className="mb-0">
                                    Mashable, a news website and blog, goes
                                    live.
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge dark"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>20 minutes ago</span>
                                 <h6 className="mb-0">
                                    Mashable, a news website and blog, goes
                                    live.
                                 </h6>
                              </a>
                           </li>
                        </ul>
                     </PerfectScrollbar>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-xxl-6 col-lg-6">
               <div className="card">
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-title">Timeline 2</h4>
                  </div>
                  <div className="card-body">
                     <PerfectScrollbar
                        id="DZ_W_TimeLine1"
                        className="widget-timeline dz-scroll style-1 height370 ps ps--active-y"
                     >
                        <ul className="timeline">
                           <li>
                              <div className="timeline-badge primary"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>10 minutes ago</span>
                                 <h6 className="mb-0">
                                    Youtube, a video-sharing website, goes live{" "}
                                    <strong className="text-primary">
                                       $500
                                    </strong>
                                    .
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge info"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>20 minutes ago</span>
                                 <h6 className="mb-0">
                                    New order placed{" "}
                                    <strong className="text-info">
                                       #XF-2356.
                                    </strong>
                                 </h6>
                                 <p className="mb-0">
                                    Quisque a consequat ante Sit amet magna at
                                    volutapt...
                                 </p>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge danger"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>30 minutes ago</span>
                                 <h6 className="mb-0">
                                    john just buy your product{" "}
                                    <strong className="text-warning">
                                       Sell $250
                                    </strong>
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge success"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>15 minutes ago</span>
                                 <h6 className="mb-0">
                                    StumbleUpon is acquired by eBay.{" "}
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge warning"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>20 minutes ago</span>
                                 <h6 className="mb-0">
                                    Mashable, a news website and blog, goes
                                    live.
                                 </h6>
                              </a>
                           </li>
                           <li>
                              <div className="timeline-badge dark"></div>
                              <a className="timeline-panel text-muted" href="#">
                                 <span>20 minutes ago</span>
                                 <h6 className="mb-0">
                                    Mashable, a news website and blog, goes
                                    live.
                                 </h6>
                              </a>
                           </li>
                        </ul>
                     </PerfectScrollbar>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-xxl-6 col-lg-6">
               <div className="card">
                  <div className="card-header  border-0 pb-0">
                     <h4 className="card-title">Notifications</h4>
                  </div>
                  <div className="card-body">
                     <PerfectScrollbar
                        id="DZ_W_Todo1"
                        className="widget-media dz-scroll height370 ps ps--active-y"
                     >
                        <ul className="timeline">
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar1} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Dr sultads Send you Photo
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-info">KG</div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Resport created successfully
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-success">
                                    <i className="fa fa-home"></i>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Reminder : Treatment Time!
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar1} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Dr sultads Send you Photo
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-danger">
                                    KG
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Resport created successfully
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       type="button"
                                       className="btn btn-danger light sharp"
                                       data-toggle="dropdown"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-primary">
                                    <i className="fa fa-home"></i>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Reminder : Treatment Time!
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                        </ul>
                     </PerfectScrollbar>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-xxl-6 col-lg-6">
               <div className="card border-0 pb-0">
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-title">Notifications 2</h4>
                  </div>
                  <div className="card-body">
                     <PerfectScrollbar
                        id="DZ_W_Todo2"
                        className="widget-media dz-scroll height370 ps ps--active-y"
                     >
                        <ul className="timeline">
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar1} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Dr sultads Send you Photo
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-info">KG</div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Resport created successfully{" "}
                                       <span className="badge badge-warning">
                                          Warning
                                       </span>
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-success">
                                    <i className="fa fa-home"></i>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Reminder : Treatment Time!
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar1} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Dr sultads Send you Photo{" "}
                                       <span className="badge light badge-danger">
                                          Danger
                                       </span>
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-danger">
                                    KG
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Resport created successfully{" "}
                                       <span className="badge light badge-success">
                                          Success
                                       </span>
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-primary">
                                    <i className="fa fa-home"></i>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Reminder : Treatment Time!{" "}
                                       <span className="badge light badge-success">
                                          Success
                                       </span>
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                        </ul>
                     </PerfectScrollbar>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-xxl-6 col-lg-6">
               <div className="card border-0 pb-0">
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-title">Message</h4>
                  </div>
                  <div className="card-body">
                     <PerfectScrollbar
                        id="DZ_W_Todo3"
                        className="widget-media dz-scroll height370 ps ps--active-y"
                     >
                        <ul className="timeline">
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar1} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Alfie Mason{" "}
                                       <small className="text-muted">
                                          29 July 2020
                                       </small>
                                    </h5>
                                    <p className="mb-1">
                                       I shared this on my fb wall a few months
                                       back..
                                    </p>
                                    <a
                                       href="#"
                                       className="btn btn-primary btn-xxs shadow"
                                    >
                                       Reply
                                    </a>
                                    <a
                                       href="#"
                                       className="btn btn-outline-danger btn-xxs ml-1"
                                    >
                                       Delete
                                    </a>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-info">KG</div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Jacob Tucker{" "}
                                       <small className="text-muted">
                                          29 July 2020
                                       </small>
                                    </h5>
                                    <p className="mb-1">
                                       I shared this on my fb wall a few months
                                       back..
                                    </p>
                                    <a
                                       href="#"
                                       className="btn btn-primary btn-xxs shadow"
                                    >
                                       Reply
                                    </a>
                                    <a
                                       href="#"
                                       className="btn btn-outline-danger btn-xxs ml-1"
                                    >
                                       Delete
                                    </a>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-success">
                                    <img alt="image" width="50" src={avatar2} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Jack Ronan{" "}
                                       <small className="text-muted">
                                          29 July 2020
                                       </small>
                                    </h5>
                                    <p className="mb-1">
                                       I shared this on my fb wall a few months
                                       back..
                                    </p>
                                    <a
                                       href="#"
                                       className="btn btn-primary btn-xxs shadow"
                                    >
                                       Reply
                                    </a>
                                    <a
                                       href="#"
                                       className="btn btn-outline-danger btn-xxs ml-1"
                                    >
                                       Delete
                                    </a>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar1} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Noah Baldon{" "}
                                       <small className="text-muted">
                                          29 July 2020
                                       </small>
                                    </h5>
                                    <p className="mb-1">
                                       I shared this on my fb wall a few months
                                       back..
                                    </p>
                                    <a
                                       href="#"
                                       className="btn btn-primary btn-xxs shadow"
                                    >
                                       Reply
                                    </a>
                                    <a
                                       href="#"
                                       className="btn btn-outline-danger btn-xxs ml-1"
                                    >
                                       Delete
                                    </a>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-danger">
                                    PU
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Thomas Grady{" "}
                                       <small className="text-muted">
                                          02:26 PM
                                       </small>
                                    </h5>
                                    <p className="mb-1">
                                       I shared this on my fb wall a few months
                                       back..
                                    </p>
                                    <a
                                       href="#"
                                       className="btn btn-primary btn-xxs shadow"
                                    >
                                       Reply
                                    </a>
                                    <a
                                       href="#"
                                       className="btn btn-outline-danger btn-xxs ml-1"
                                    >
                                       Delete
                                    </a>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-primary">
                                    <img alt="image" width="50" src={avatar3} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Oscar Weston{" "}
                                       <small className="text-muted">
                                          29 July 2020
                                       </small>
                                    </h5>
                                    <p className="mb-1">
                                       I shared this on my fb wall a few months
                                       back..
                                    </p>
                                    <a
                                       href="#"
                                       className="btn btn-primary btn-xxs shadow"
                                    >
                                       Reply
                                    </a>
                                    <a
                                       href="#"
                                       className="btn btn-outline-danger btn-xxs ml-1"
                                    >
                                       Delete
                                    </a>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                        </ul>
                     </PerfectScrollbar>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-xxl-6 col-lg-6">
               <div className="card border-0 pb-0">
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-title">To Do List</h4>
                  </div>
                  <div className="card-body">
                     <PerfectScrollbar
                        id="DZ_W_Todo4"
                        className="widget-media dz-scroll height370 ps ps--active-y"
                     >
                        <ul className="timeline">
                           <li>
                              <div className="timeline-panel">
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox1"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox1"
                                    ></label>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-0">Get up</h5>
                                    <small className="text-muted">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="custom-control custom-checkbox checkbox-warning check-lg mr-3">
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
                                 <div className="media-body">
                                    <h5 className="mb-0">Stand up</h5>
                                    <small className="text-muted">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="custom-control custom-checkbox checkbox-primary check-lg mr-3">
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
                                 <div className="media-body">
                                    <h5 className="mb-0">
                                       Don't give up the fight.
                                    </h5>
                                    <small className="text-muted">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="custom-control custom-checkbox checkbox-info check-lg mr-3">
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
                                 <div className="media-body">
                                    <h5 className="mb-0">Do something else</h5>
                                    <small className="text-muted">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox5"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox5"
                                    ></label>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-0">Get up</h5>
                                    <small className="text-muted">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="custom-control custom-checkbox checkbox-warning check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox6"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox6"
                                    ></label>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-0">Stand up</h5>
                                    <small className="text-muted">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                        </ul>
                     </PerfectScrollbar>
                  </div>
               </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body p-4">
                     <div className="media ai-icon">
                        <span className="mr-3 bgl-primary text-primary">
                           {/* <!-- <i className="ti-user"></i> --> */}
                           <svg
                              id="icon-customers"
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-user"
                           >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                           </svg>
                        </span>
                        <div className="media-body">
                           <p className="mb-1">Patient</p>
                           <h4 className="mb-0">3280</h4>
                           <span className="badge badge-primary">+3.5%</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body p-4">
                     <div className="media ai-icon">
                        <span className="mr-3 bgl-warning text-warning">
                           <svg
                              id="icon-orders"
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-file-text"
                           >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                           </svg>
                        </span>
                        <div className="media-body">
                           <p className="mb-1">Bills</p>
                           <h4 className="mb-0">2570</h4>
                           <span className="badge badge-warning">+3.5%</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body  p-4">
                     <div className="media ai-icon">
                        <span className="mr-3 bgl-danger text-danger">
                           <svg
                              id="icon-revenue"
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="30"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-dollar-sign"
                           >
                              <line x1="12" y1="1" x2="12" y2="23"></line>
                              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                           </svg>
                        </span>
                        <div className="media-body">
                           <p className="mb-1">Revenue</p>
                           <h4 className="mb-0">364.50K</h4>
                           <span className="badge badge-danger">-3.5%</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body p-4">
                     <div className="media ai-icon">
                        <span className="mr-3 bgl-success text-success">
                           <svg
                              id="icon-database-widget"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-database"
                           >
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                           </svg>
                        </span>
                        <div className="media-body">
                           <p className="mb-1">Patient</p>
                           <h4 className="mb-0">364.50K</h4>
                           <span className="badge badge-success">-3.5%</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-danger">
                  <div className="card-body  p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="flaticon-381-calendar-1"></i>
                        </span>
                        <div className="media-body text-white text-right">
                           <p className="mb-1">Appointment</p>
                           <h3 className="text-white">76</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-success">
                  <div className="card-body p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="flaticon-381-diamond"></i>
                        </span>
                        <div className="media-body text-white text-right">
                           <p className="mb-1">Earning</p>
                           <h3 className="text-white">$56K</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-info">
                  <div className="card-body p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="flaticon-381-heart"></i>
                        </span>
                        <div className="media-body text-white text-right">
                           <p className="mb-1">Total Patient</p>
                           <h3 className="text-white">783K</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-primary">
                  <div className="card-body p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="flaticon-381-user-7"></i>
                        </span>
                        <div className="media-body text-white text-right">
                           <p className="mb-1">Chef</p>
                           <h3 className="text-white">$76</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-primary">
                  <div className="card-body  p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="la la-users"></i>
                        </span>
                        <div className="media-body text-white">
                           <p className="mb-1">Total Students</p>
                           <h3 className="text-white">3280</h3>
                           <div className="progress mb-2 bg-secondary">
                              <div
                                 className="progress-bar progress-animated bg-light"
                                 style={{ width: "80%" }}
                              ></div>
                           </div>
                           <small>80% Increase in 20 Days</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-warning">
                  <div className="card-body p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="la la-user"></i>
                        </span>
                        <div className="media-body text-white">
                           <p className="mb-1">New Students</p>
                           <h3 className="text-white">245</h3>
                           <div className="progress mb-2 bg-primary">
                              <div
                                 className="progress-bar progress-animated bg-light"
                                 style={{ width: "50%" }}
                              ></div>
                           </div>
                           <small>50% Increase in 25 Days</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-secondary">
                  <div className="card-body p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="la la-graduation-cap"></i>
                        </span>
                        <div className="media-body text-white">
                           <p className="mb-1">Total Course</p>
                           <h3 className="text-white">28</h3>
                           <div className="progress mb-2 bg-primary">
                              <div
                                 className="progress-bar progress-animated bg-light"
                                 style={{ width: "76%" }}
                              ></div>
                           </div>
                           <small>76% Increase in 20 Days</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card bg-danger ">
                  <div className="card-body p-4">
                     <div className="media">
                        <span className="mr-3">
                           <i className="la la-dollar"></i>
                        </span>
                        <div className="media-body text-white">
                           <p className="mb-1">Fees Collect</p>
                           <h3 className="text-white">250$</h3>
                           <div className="progress mb-2 bg-secondary">
                              <div
                                 className="progress-bar progress-animated bg-light"
                                 style={{ width: "30%" }}
                              ></div>
                           </div>
                           <small>30% Increase in 30 Days</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body p-4">
                     <h4 className="card-title">Total Students</h4>
                     <h3>3280</h3>
                     <div className="progress mb-2">
                        <div
                           className="progress-bar progress-animated bg-primary"
                           style={{ width: "80%" }}
                        ></div>
                     </div>
                     <small>80% Increase in 20 Days</small>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body p-4">
                     <h4 className="card-title">New Students</h4>
                     <h3>245</h3>
                     <div className="progress mb-2">
                        <div
                           className="progress-bar progress-animated bg-warning"
                           style={{ width: "50%" }}
                        ></div>
                     </div>
                     <small>50% Increase in 25 Days</small>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body p-4">
                     <h4 className="card-title">Total Course</h4>
                     <h3>28</h3>
                     <div className="progress mb-2">
                        <div
                           className="progress-bar progress-animated bg-red"
                           style={{ width: "76%" }}
                        ></div>
                     </div>
                     <small>76% Increase in 20 Days</small>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-6">
               <div className="widget-stat card">
                  <div className="card-body p-4">
                     <h4 className="card-title">Fees Collection</h4>
                     <h3>25160$</h3>
                     <div className="progress mb-2">
                        <div
                           className="progress-bar progress-animated bg-success"
                           style={{ width: "30%" }}
                        ></div>
                     </div>
                     <small>30% Increase in 30 Days</small>
                  </div>
               </div>
            </div>

            <div className="col-xl-12 col-lg-12 col-sm-12">
               <div className="row">
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                     <div className="widget-stat card bg-primary">
                        <div className="card-header border-0 pb-0">
                           <h3 className="card-title text-white">
                              Total Students
                           </h3>
                           <h5 className="text-white mb-0">
                              <i className="fa fa-caret-up"></i> 422
                           </h5>
                        </div>
                        <div className="card-body text-center">
                           <div className="ico-sparkline">
                              <div id="sparkline12">
                                 <Pie
                                    color1="#7099ED"
                                    color2="#B3CCFF"
                                    color3="#9DBDFF"
                                    height="100"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                     <div className="widget-stat card bg-warning overflow-hidden">
                        <div className="card-header border-0 ">
                           <h3 className="card-title text-white">
                              New Students
                           </h3>
                           <h5 className="text-white mb-0">
                              <i className="fa fa-caret-up"></i> 357
                           </h5>
                        </div>
                        <div className="card-body text-center p-0">
                           <div className="ico-sparkline">
                              <div id="spark-bar-2">
                                 <BarChart
                                    color="#FFCE78"
                                    lable={false}
                                    height="140"
                                    width="290"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                     <div className="widget-stat card bg-secondary">
                        <div className="card-header pb-3 border-0 pb-0">
                           <h3 className="card-title text-white">
                              Total Course
                           </h3>
                           <h5 className="text-white mb-0">
                              <i className="fa fa-caret-up"></i> 547
                           </h5>
                        </div>
                        <div className="card-body p-0">
                           <div className="px-4">
                              <SparkNagetivePositive />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-6 col-sm-6">
                     <div className="widget-stat card bg-danger overflow-hidden">
                        <div className="card-header pb-3 border-0 pb-0">
                           <h3 className="card-title text-white">
                              Fees Collection
                           </h3>
                           <h5 className="text-white mb-0">
                              <i className="fa fa-caret-up"></i> 3280$
                           </h5>
                        </div>
                        <div className="card-body p-0">
                           <LineChart3 color="#F77F8B" height="150" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-sm-12">
               <div className="card">
                  <div className="card-header border-0 pb-0">
                     <h2 className="card-title">about me</h2>
                  </div>
                  <div className="card-body pb-0">
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                     </p>
                     <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex px-0 justify-content-between">
                           <strong>Gender</strong>
                           <span className="mb-0">Male</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                           <strong>Education</strong>
                           <span className="mb-0">PHD</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                           <strong>Designation</strong>
                           <span className="mb-0">Se. Professor</span>
                        </li>
                        <li className="list-group-item d-flex px-0 justify-content-between">
                           <strong>Operation Done</strong>
                           <span className="mb-0">120</span>
                        </li>
                     </ul>
                  </div>
                  <div className="card-footer pt-0 pb-0 text-center">
                     <div className="row">
                        <div className="col-4 pt-3 pb-3 border-right">
                           <h3 className="mb-1 text-primary">150</h3>
                           <span>Projects</span>
                        </div>
                        <div className="col-4 pt-3 pb-3 border-right">
                           <h3 className="mb-1 text-primary">140</h3>
                           <span>Uploads</span>
                        </div>
                        <div className="col-4 pt-3 pb-3">
                           <h3 className="mb-1 text-primary">45</h3>
                           <span>Tasks</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-8 col-xxl-8 col-lg-12 col-sm-12">
               <div id="user-activity" className="card">
                  <Tab.Container defaultActiveKey="day">
                     <div className="card-header border-0 pb-0 d-sm-flex d-block">
                        <h4 className="card-title">Visitor Activity</h4>
                        <div className="card-action mb-sm-0 my-2">
                           <Nav className="nav nav-tabs" role="tablist">
                              <Nav.Item className="nav-item">
                                 <Nav.Link
                                    className="nav-link "
                                    data-toggle="tab"
                                    href="#"
                                    role="tab"
                                    eventKey="day"
                                 >
                                    Day
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="nav-item">
                                 <Nav.Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#"
                                    role="tab"
                                    eventKey="month"
                                 >
                                    Month
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item className="nav-item">
                                 <Nav.Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    href="#"
                                    role="tab"
                                    eventKey="year"
                                 >
                                    Year
                                 </Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>
                     </div>
                     <div className="card-body">
                        <Tab.Content className="tab-content" id="myTabContent">
                           <Tab.Pane
                              className="tab-pane fade  show active"
                              id="user"
                              role="tabpanel"
                           >
                              <BarChart color="#48A9F8" />
                           </Tab.Pane>
                        </Tab.Content>
                     </div>
                  </Tab.Container>
               </div>
            </div>
            <div className="col-xl-4 col-lg-6">
               <div className="card overflow-hidden">
                  <div className="card-body">
                     <div className="text-center">
                        <div className="profile-photo">
                           <img
                              src={profile}
                              width="100"
                              className="img-fluid rounded-circle"
                              alt=""
                           />
                        </div>
                        <h3 className="mt-4 mb-1">Deangelo Sena</h3>
                        <p className="text-muted">Senior Manager</p>
                        <a
                           className="btn btn-outline-primary btn-rounded mt-3 px-5"
                           href="#"
                        >
                           Folllow
                        </a>
                     </div>
                  </div>

                  <div className="card-footer pt-0 pb-0 text-center">
                     <div className="row">
                        <div className="col-4 pt-3 pb-3 border-right">
                           <h3 className="mb-1">150</h3>
                           <span>Follower</span>
                        </div>
                        <div className="col-4 pt-3 pb-3 border-right">
                           <h3 className="mb-1">140</h3>
                           <span>Place Stay</span>
                        </div>
                        <div className="col-4 pt-3 pb-3">
                           <h3 className="mb-1">45</h3>
                           <span>Reviews</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-lg-6">
               <div className="card active_users">
                  <div className="card-header bg-success  border-0 pb-0">
                     {/* <h4 className="card-title text-white">Active Users</h4> */}
                     {/* <BarChart color="#47FF7B" height="180" width="320" /> */}
                     <LiveBar />
                  </div>
                  <div className="card-body pt-0">
                     <div className="list-group-flush mt-4">
                        <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-2 font-weight-semi-bold border-top-0">
                           <p className="mb-0">Top Active Pages</p>
                           <p className="mb-0">Active Users</p>
                        </div>
                        <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-2">
                           <p className="mb-0">/bootstrap-themes/</p>
                           <p className="mb-0">3</p>
                        </div>
                        <div className="list-group-item bg-transparent d-flex justify-content-between px-0 py-2">
                           <p className="mb-0">/tags/html5/</p>
                           <p className="mb-0">3</p>
                        </div>
                        <div className="list-group-item bg-transparent d-xxl-flex justify-content-between px-0 py-1 d-none">
                           <p className="mb-0">/</p>
                           <p className="mb-0">2</p>
                        </div>
                        <div className="list-group-item border-0 bg-transparent d-xxl-flex justify-content-between px-0 py-1 d-none">
                           <p className="mb-0">/preview/falcon/dashboard/</p>
                           <p className="mb-0">2</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-4 col-lg-12 col-sm-12">
               <div className="card overflow-hidden">
                  <div
                     className="text-center p-3 overlay-box "
                     style={{ backgroundImage: `url(${bg1})` }}
                  >
                     <div className="profile-photo">
                        <img
                           src={profile}
                           width="100"
                           className="m-auto img-fluid rounded-circle d-block"
                           alt=""
                        />
                     </div>
                     <h3 className="mt-3 mb-1 text-white">Deangelo Sena</h3>
                     <p className="text-white mb-0">Senior Manager</p>
                  </div>
                  <ul className="list-group list-group-flush">
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Patient Gender</span>{" "}
                        <strong className="text-muted">Female </strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Years Old</span>{" "}
                        <strong className="text-muted">Age: 24 </strong>
                     </li>
                  </ul>
                  <div className="card-footer border-0 mt-0">
                     <button className="btn btn-primary btn-lg btn-block">
                        <i className="fa fa-bell-o"></i> Reminder Alarm
                     </button>
                  </div>
               </div>
            </div>
         </div>
		 <div className="row">
			 <div className="col-xl-12 col-lg-12 col-xxl-12 col-sm-12">
				<div className="card">
				   <div className="card-header">
					  <h4 className="card-title">Recent Payments Queue</h4>
				   </div>
				   <div className="card-body">
					  <div className="table-responsive recentOrderTable">
						 <table className="table verticle-middle table-responsive-md">
							<thead>
							   <tr>
								  <th scope="col">Ward No.</th>
								  <th scope="col">Patient</th>
								  <th scope="col">Dr Name</th>
								  <th scope="col">Date</th>
								  <th scope="col">Status</th>
								  <th scope="col">Bills</th>
								  <th scope="col"></th>
							   </tr>
							</thead>
							<tbody>
							   <tr>
								  <td>12</td>
								  <td>Mr. Bobby</td>
								  <td>Dr. Jackson</td>
								  <td>01 August 2020</td>
								  <td>
									 <span className="badge badge-rounded badge-primary">
										Checkin
									 </span>
								  </td>
								  <td>$120</td>
								  <td>
									 <Dropdown className="dropdown custom-dropdown mb-0">
										<Dropdown.Toggle
										   className="btn sharp btn-primary tp-btn icon-false"
										   data-toggle="dropdown"
										>
										   <svg
											  xmlns="http://www.w3.org/2000/svg"
											  xmlnsXlink="http://www.w3.org/1999/xlink"
											  width="18px"
											  height="18px"
											  viewBox="0 0 24 24"
											  version="1.1"
										   >
											  <g
												 stroke="none"
												 strokeWidth="1"
												 fill="none"
												 fillRule="evenodd"
											  >
												 <rect
													x="0"
													y="0"
													width="24"
													height="24"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="5"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="12"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="19"
													r="2"
												 />
											  </g>
										   </svg>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
										   <Dropdown.Item
											  className="dropdown-item"
											  href="#;"
										   >
											  Details
										   </Dropdown.Item>
										   <Dropdown.Item
											  className="dropdown-item text-danger"
											  href="#;"
										   >
											  Cancel
										   </Dropdown.Item>
										</Dropdown.Menu>
									 </Dropdown>
								  </td>
							   </tr>
							   <tr>
								  <td>10 </td>
								  <td>Mr. Dexter</td>
								  <td>Dr. Charles</td>
								  <td>31 July 2020</td>
								  <td>
									 <span className="badge badge-rounded badge-warning">
										Panding
									 </span>
								  </td>
								  <td>$540</td>
								  <td>
									 <Dropdown className="dropdown custom-dropdown mb-0">
										<Dropdown.Toggle
										   className="btn sharp btn-primary tp-btn icon-false"
										   data-toggle="dropdown"
										>
										   <svg
											  xmlns="http://www.w3.org/2000/svg"
											  xmlnsXlink="http://www.w3.org/1999/xlink"
											  width="18px"
											  height="18px"
											  viewBox="0 0 24 24"
											  version="1.1"
										   >
											  <g
												 stroke="none"
												 strokeWidth="1"
												 fill="none"
												 fillRule="evenodd"
											  >
												 <rect
													x="0"
													y="0"
													width="24"
													height="24"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="5"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="12"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="19"
													r="2"
												 />
											  </g>
										   </svg>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
										   <Dropdown.Item
											  className="dropdown-item"
											  href="#;"
										   >
											  Details
										   </Dropdown.Item>
										   <Dropdown.Item
											  className="dropdown-item text-danger"
											  href="#;"
										   >
											  Cancel
										   </Dropdown.Item>
										</Dropdown.Menu>
									 </Dropdown>
								  </td>
							   </tr>
							   <tr>
								  <td>03 </td>
								  <td>Mr. Nathan</td>
								  <td>Dr. Frederick</td>
								  <td>30 July 2020</td>
								  <td>
									 <span className="badge badge-rounded badge-danger">
										Canceled
									 </span>
								  </td>
								  <td>$301</td>
								  <td>
									 <Dropdown className="dropdown custom-dropdown mb-0">
										<Dropdown.Toggle
										   className="btn sharp btn-primary tp-btn icon-false"
										   data-toggle="dropdown"
										>
										   <svg
											  xmlns="http://www.w3.org/2000/svg"
											  xmlnsXlink="http://www.w3.org/1999/xlink"
											  width="18px"
											  height="18px"
											  viewBox="0 0 24 24"
											  version="1.1"
										   >
											  <g
												 stroke="none"
												 strokeWidth="1"
												 fill="none"
												 fillRule="evenodd"
											  >
												 <rect
													x="0"
													y="0"
													width="24"
													height="24"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="5"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="12"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="19"
													r="2"
												 />
											  </g>
										   </svg>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
										   <Dropdown.Item
											  className="dropdown-item"
											  href="#;"
										   >
											  Details
										   </Dropdown.Item>
										   <Dropdown.Item
											  className="dropdown-item text-danger"
											  href="#;"
										   >
											  Cancel
										   </Dropdown.Item>
										</Dropdown.Menu>
									 </Dropdown>
								  </td>
							   </tr>
							   <tr>
								  <td>05</td>
								  <td>Mr. Aurora</td>
								  <td>Dr. Roman</td>
								  <td>29 July 2020</td>
								  <td>
									 <span className="badge badge-rounded badge-success">
										Checkin
									 </span>
								  </td>
								  <td>$099</td>
								  <td>
									 <Dropdown className="dropdown custom-dropdown mb-0">
										<Dropdown.Toggle
										   className="btn sharp btn-primary tp-btn icon-false"
										   data-toggle="dropdown"
										>
										   <svg
											  xmlns="http://www.w3.org/2000/svg"
											  xmlnsXlink="http://www.w3.org/1999/xlink"
											  width="18px"
											  height="18px"
											  viewBox="0 0 24 24"
											  version="1.1"
										   >
											  <g
												 stroke="none"
												 strokeWidth="1"
												 fill="none"
												 fillRule="evenodd"
											  >
												 <rect
													x="0"
													y="0"
													width="24"
													height="24"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="5"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="12"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="19"
													r="2"
												 />
											  </g>
										   </svg>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
										   <Dropdown.Item
											  className="dropdown-item"
											  href="#;"
										   >
											  Details
										   </Dropdown.Item>
										   <Dropdown.Item
											  className="dropdown-item text-danger"
											  href="#;"
										   >
											  Cancel
										   </Dropdown.Item>
										</Dropdown.Menu>
									 </Dropdown>
								  </td>
							   </tr>
							   <tr>
								  <td>06</td>
								  <td>Mr. Matthew</td>
								  <td>Dr. Samantha</td>
								  <td>28 July 2020</td>
								  <td>
									 <span className="badge badge-rounded badge-success">
										Checkin
									 </span>
								  </td>
								  <td>$520</td>
								  <td>
									 <Dropdown className="dropdown custom-dropdown mb-0">
										<Dropdown.Toggle
										   className="btn sharp btn-primary tp-btn icon-false"
										   data-toggle="dropdown"
										>
										   <svg
											  xmlns="http://www.w3.org/2000/svg"
											  xmlnsXlink="http://www.w3.org/1999/xlink"
											  width="18px"
											  height="18px"
											  viewBox="0 0 24 24"
											  version="1.1"
										   >
											  <g
												 stroke="none"
												 strokeWidth="1"
												 fill="none"
												 fillRule="evenodd"
											  >
												 <rect
													x="0"
													y="0"
													width="24"
													height="24"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="5"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="12"
													r="2"
												 />
												 <circle
													fill="#000000"
													cx="12"
													cy="19"
													r="2"
												 />
											  </g>
										   </svg>
										</Dropdown.Toggle>
										<Dropdown.Menu className="dropdown-menu dropdown-menu-right">
										   <Dropdown.Item
											  className="dropdown-item"
											  href="#;"
										   >
											  Details
										   </Dropdown.Item>
										   <Dropdown.Item
											  className="dropdown-item text-danger"
											  href="#;"
										   >
											  Cancel
										   </Dropdown.Item>
										</Dropdown.Menu>
									 </Dropdown>
								  </td>
							   </tr>
							</tbody>
						 </table>
					  </div>
				   </div>
				</div>
			 </div>
		</div>
         <div className="row">
            <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
               <div className="card text-white bg-primary">
                  <ul className="list-group list-group-flush">
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Blood type :</span>
                        <strong>O+</strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Allergies :</span>
                        <strong>Penicilin, peanuts </strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Pressure :</span>
                        <strong>120/100 mmHG</strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Diseases :</span>
                        <strong>Diabetes</strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Temperture :</span>
                        <strong>34 Degree</strong>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
               <div className="card text-white bg-warning text-black">
                  <ul className="list-group list-group-flush">
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Regular Checkups</span>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Dr Theodore Handle :</span>
                        <strong>Dentist</strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Dr Valentino Morose :</span>
                        <strong>Surgeon</strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Dr Fleece Marigold :</span>
                        <strong>Clinical</strong>
                     </li>
                     <li className="list-group-item d-flex justify-content-between">
                        <span className="mb-0">Dr Eric Widget :</span>
                        <strong>Cardiology</strong>
                     </li>
                  </ul>
               </div>
            </div>

            <div className="col-xl-4 col-lg-12 col-xxl-4 col-sm-12">
               <div className="card">
                  <div className="card-body text-center ai-icon  text-primary">
                     <svg
                        id="rocket-icon"
                        className="my-2"
                        viewBox="0 0 24 24"
                        width="80"
                        height="80"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                     </svg>
                     <h4 className="my-2">You don’t have badges yet</h4>
                     <a href="#;" className="btn my-2 btn-primary btn-lg px-4">
                        <i className="fa fa-usd"></i> Earn Budges
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-8 col-lg-12 col-xxl-8 col-sm-12">
               <div className="row">
                  <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <div className="clearfix">
                              <h3 className="card-title">Blood pressure</h3>
                              <span>In the normal</span>
                           </div>
                           <div className="clearfix text-center">
                              <h3 className="text-primary mb-0">120/89</h3>
                              <span>mmHG</span>
                           </div>
                        </div>
                        <div className="card-body text-center">
                           <div className="ico-sparkline">
                              <Sparklines data={sampleData}>
                                 <SparklinesBars style={{ fill: "#47ff7b" }} />
                              </Sparklines>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <div className="clearfix">
                              <h3 className="card-title">Heart Rate</h3>
                              <span className="text-danger">
                                 Above the normal
                              </span>
                           </div>
                           <div className="clearfix text-center">
                              <h3 className="text-danger mb-0">107</h3>
                              <span>Per Min</span>
                           </div>
                        </div>
                        <div className="card-body text-center">
                           <div className="ico-sparkline">
                              <div id="composite-bar">
                                 <Sparklines data={sampleData}>
                                    <SparklinesBars
                                       style={{ fill: "#65EDFF" }}
                                    />
                                 </Sparklines>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <div className="clearfix">
                              <h3 className="card-title">Glucose Rate</h3>
                              <span>In the normal</span>
                           </div>
                           <div className="clearfix text-center">
                              <h3 className="text-success mb-0">97</h3>
                              <span>mg/dl</span>
                           </div>
                        </div>
                        <div className="card-body text-center">
                           <div className="ico-sparkline">
                              <div id="sparkline8">
                                 <Sparklines data={sampleData}>
                                    <SparklinesLine
                                       style={{ fill: "#9F8BCE" }}
                                    />
                                 </Sparklines>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-xxl-6 col-md-6">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <div className="clearfix">
                              <h3 className="card-title">Clolesterol</h3>
                              <span>In the normal</span>
                           </div>
                           <div className="clearfix text-center">
                              <h3 className="text-info mb-0">124</h3>
                              <span>mg/dl</span>
                           </div>
                        </div>
                        <div className="card-body text-center">
                           <div className="ico-sparkline">
                              <Sparklines data={sampleData}>
                                 <SparklinesLine style={{ fill: "#c5e39f" }} />
                              </Sparklines>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-sm-12">
               <div className="card overflow-hidden">
                  <div
                     className="text-center p-5 overlay-box"
                     style={{ backgroundImage: `url(${bg5})` }}
                  >
                     <img
                        src={profile}
                        width="100"
                        className="img-fluid rounded-circle"
                        alt=""
                     />
                     <h3 className="mt-3 mb-0 text-white">Deangelo Sena</h3>
                  </div>
                  <div className="card-body">
                     <div className="row text-center">
                        <div className="col-6">
                           <div className="bgl-primary rounded p-3">
                              <h4 className="mb-0">Female</h4>
                              <small>Patient Gender</small>
                           </div>
                        </div>
                        <div className="col-6">
                           <div className="bgl-primary rounded p-3">
                              <h4 className="mb-0">Age: 24</h4>
                              <small>Years Old</small>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card-footer mt-0">
                     <button className="btn btn-primary btn-lg btn-block">
                        View Profile
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6">
               <div className="card bg-primary">
                  <div className="card-body pb-0">
                     <div className="row">
                        <div className="col">
                           <h5 className="text-white">Power</h5>
                           <span className="text-white">2017.1.20</span>
                        </div>
                        <div className="col text-right">
                           <h5 className="text-white">
                              <i className="fa fa-caret-up"></i> 260
                           </h5>
                           <span className="text-white">+12.5(2.8%)</span>
                        </div>
                     </div>
                  </div>
                  <div className="chart-wrapper">
                     <BarChart3 color="#E2F3D2" height={150} />
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-xxl-6 col-sm-6">
               <div className="card bg-success">
                  <div className="card-body pb-0">
                     <div className="row">
                        <div className="col">
                           <h5 className="text-white">Power</h5>
                           <span className="text-white">2017.1.20</span>
                        </div>
                        <div className="col text-right">
                           <h5 className="text-white">
                              <i className="fa fa-caret-up"></i> 260
                           </h5>
                           <span className="text-white">+12.5(2.8%)</span>
                        </div>
                     </div>
                  </div>
                  <div className="chart-wrapper">
                     <LineChart height={150} color="#43D66C" border="#45FDC6" />
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
               <div className="card">
                  <div className="card-body pb-0">
                     <div className="row">
                        <div className="col">
                           <h5>3650</h5>
                           <span>VIEWS OF YOUR PROJECT</span>
                        </div>
                     </div>
                  </div>
                  <div className="chart-wrapper">
                     <BarChart2 />
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-xxl-4 col-sm-6">
               <div className="card">
                  <div className="card-body">
                     <h5>Latency</h5>
                  </div>
                  <div className="chart-wrapper">
                     <RealTime height="100" />
                  </div>
               </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-xxl-4 col-sm-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                           <h4 className="text-uppercase">74,206 K</h4>
                           <span>Lifetime earnings</span>
                        </div>
                        <div className="col-auto">
                           <div className="chart-wrapper height100">
                              <BarChart3 />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
		 <div className="row">
			 <div className="col-xl-12 col-xxl-12">
				<div className="row">
				   <div className="col-md-6">
					  <div className="card">
						 <div className="card-body pb-0">
							<div className="row justify-content-between">
							   <div className="col-auto">
								  <h5>Lorem Ipsum</h5>
							   </div>
							   <div className="col-auto">
								  <h5>
									 <span>
										<i className="fa fa-caret-up"></i>
									 </span>
									 <span>2,250</span>
								  </h5>
							   </div>
							</div>
						 </div>
						 <div className="chart-wrapper">
							<LineChart4 color="#8ED3E2" />
						 </div>
						 <div className="card-footer">
							<div className="row">
							   <div className="col text-center">
								  <h5 className="font-weight-normal">1230</h5>
								  <span>Type A</span>
							   </div>
							   <div className="col text-center">
								  <h5 className="font-weight-normal">1230</h5>
								  <span>Type A</span>
							   </div>
							   <div className="col text-center">
								  <h5 className="font-weight-normal">1230</h5>
								  <span>Type A</span>
							   </div>
							</div>
						 </div>
					  </div>
				   </div>
				   <div className="col-md-6">
					  <div className="card">
						 <div className="card-body pb-0">
							<div className="row justify-content-between">
							   <div className="col-auto">
								  <h5>Lorem Ipsum</h5>
							   </div>
							   <div className="col-auto">
								  <h5>
									 <span>
										<i className="fa fa-caret-up"></i>
									 </span>
									 <span>2,250</span>
								  </h5>
							   </div>
							</div>
						 </div>
						 <div className="chart-wrapper">
							<BarChartNoPadding />
						 </div>
						 <div className="card-footer">
							<div className="row">
							   <div className="col text-center">
								  <h5 className="font-weight-normal">1230</h5>
								  <span>Type A</span>
							   </div>
							   <div className="col text-center">
								  <h5 className="font-weight-normal">1230</h5>
								  <span>Type A</span>
							   </div>
							   <div className="col text-center">
								  <h5 className="font-weight-normal">1230</h5>
								  <span>Type A</span>
							   </div>
							</div>
						 </div>
					  </div>
				   </div>
				</div>
			 </div>
		</div>
         <div className="row">
            {" "}
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-body pb-0">
                     <h4 className="card-title text-uppercase font-weight-normal">
                        Market Now
                     </h4>
                     <h2 className="font-weight-normal text-danger">
                        <span>
                           <i className="fa fa-caret-up"></i>
                        </span>
                        <span>3454664</span>
                     </h2>
                     <div className="row mt-5">
                        <div className="col text-center">
                           <h5 className="font-weight-normal">APPL</h5>
                           <span className="text-success">+ 82.24 %</span>
                        </div>
                        <div className="col text-center">
                           <h5 className="font-weight-normal">FB</h5>
                           <span className="text-danger">- 12.24 %</span>
                        </div>
                        <div className="col text-center">
                           <h5 className="font-weight-normal">GOOG</h5>
                           <span className="text-success">+ 42.24 %</span>
                        </div>
                     </div>
                  </div>
                  <div className="chart-wrapper mt-3">
                     <BarChartNoPadding color="#4962E1" />
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-body pb-0">
                     <h4 className="card-title text-uppercase font-weight-normal">
                        Sales Analysis
                     </h4>
                     <h2 className="font-weight-normal text-danger">
                        <span>
                           <i className="fa fa-caret-up"></i>
                        </span>
                        <span>3454664</span>
                     </h2>
                     <div className="row mt-5">
                        <div className="col text-center">
                           <h5 className="font-weight-normal">Today</h5>
                           <span className="text-success">+ 8224</span>
                        </div>
                        <div className="col text-center">
                           <h5 className="font-weight-normal">Today</h5>
                           <span className="text-danger">- 1224</span>
                        </div>
                        <div className="col text-center">
                           <h5 className="font-weight-normal">Week</h5>
                           <span className="text-success">+ 4224</span>
                        </div>
                     </div>
                  </div>
                  <div className="chart-wrapper">
                     <div id="chart_widget_8">
                        {" "}
                        <Sparklines data={sampleData}>
                           <SparklinesLine
                              style={{
                                 strokeWidth: 1,
                                 stroke: "#8ED3E2",
                                 fill: "none",
                              }}
                           />
                        </Sparklines>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            {" "}
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-title">Top Products</h4>
                  </div>
                  <div className="card-body pb-0">
                     <div className="widget-media">
                        <ul className="timeline">
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar1} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Dr sultads Send you Photo
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-info">KG</div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Resport created successfully
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-success">
                                    <i className="fa fa-home"></i>
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Reminder : Treatment Time!
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="chart-wrapper">
                     <LineChart4 color="#2780D4" />
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header border-0 pb-0">
                     <h4 className="card-title">Top Products</h4>
                  </div>
                  <div className="card-body pb-0">
                     <div className="widget-media">
                        <ul className="timeline">
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2">
                                    <img alt="image" width="50" src={avatar4} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Dr sultads Send you Photo
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-info">
                                    <img alt="image" width="50" src={avatar2} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Resport created successfully
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                           <li>
                              <div className="timeline-panel">
                                 <div className="media mr-2 media-success">
                                    <img alt="image" width="50" src={avatar3} />
                                 </div>
                                 <div className="media-body">
                                    <h5 className="mb-1">
                                       Reminder : Treatment Time!
                                    </h5>
                                    <small className="d-block">
                                       29 July 2020 - 02:26 PM
                                    </small>
                                 </div>
                                 <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                       variant="primary light"
                                       className="icon-false sharp"
                                    >
                                       <svg
                                          width="18px"
                                          height="18px"
                                          viewBox="0 0 24 24"
                                          version="1.1"
                                       >
                                          <g
                                             stroke="none"
                                             strokeWidth="1"
                                             fill="none"
                                             fillRule="evenodd"
                                          >
                                             <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="5"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="12"
                                                cy="12"
                                                r="2"
                                             />
                                             <circle
                                                fill="#000000"
                                                cx="19"
                                                cy="12"
                                                r="2"
                                             />
                                          </g>
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          href="#"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="chart-wrapper">
                     <LineChart4 color="#5514A4" />
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            {" "}
            <div className="col-xl-6 col-xxl-8 col-lg-12">
               <div className="row">
                  <div className="col-sm-12">
                     <div className="card">
                        <div className="row no-gutters">
                           <div className="col-5 p-0">
                              <div className="card-body">
                                 <h6 className="font-weight-normal text-uppercase">
                                    Weekly sales
                                 </h6>
                                 <h4>$ 14000</h4>
                                 <div>
                                    <span className="badge badge-light">
                                       60%
                                    </span>
                                    <span>Higher</span>
                                 </div>
                              </div>
                           </div>
                           <div className="col-7 p-0">
                              <div className="chart-wrapper">
                                 <LineChart4
                                    color="rgb(170, 137, 209)"
                                    borderColor="#5514A4"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="card">
                        <div className="card-body">
                           <h5>570</h5>
                           <p>All Sales</p>
                        </div>
                        <div className="chart-wrapper">
                           <LineChart6 height="200" color="#82DB14" />
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-6">
                     <div className="card">
                        <div className="card-body">
                           <h5>570</h5>
                           <p>All Sales</p>
                        </div>
                        <div className="chart-wrapper">
                           <LineChart6 height="200" color="#5514A4" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-xxl-4 col-lg-12">
               <div className="card">
                  <div className="chart-wrapper">
                     <LineChart4 color="#48A9F8" />
                  </div>
                  <div className="card-body">
                     <h4 className="card-title">Sales Status</h4>
                     <div className="row">
                        <div className="col-12">
                           <div className="d-flex justify-content-between">
                              <h6>67%</h6>
                              <span>Grow</span>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar bg-primary"
                                 style={{ width: "80%" }}
                              ></div>
                           </div>
                        </div>
                        <div className="col-12 mt-4">
                           <div className="d-flex justify-content-between">
                              <h6>67%</h6>
                              <span>Grow</span>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar bg-success"
                                 style={{ width: "70%" }}
                              ></div>
                           </div>
                        </div>
                        <div className="col-12 mt-4">
                           <div className="d-flex justify-content-between">
                              <h6>67%</h6>
                              <span>Grow</span>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar bg-info"
                                 style={{ width: "40%" }}
                              ></div>
                           </div>
                        </div>
                        <div className="col-12 mt-4">
                           <div className="d-flex justify-content-between">
                              <h6>67%</h6>
                              <span>Grow</span>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar bg-warning"
                                 style={{ width: "80%" }}
                              ></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            {" "}
            <div className="col-xl-3 col-xxl-3 col-sm-6">
               <div className="card">
                  <div className="social-graph-wrapper widget-facebook">
                     <span className="s-icon">
                        <i className="fa fa-facebook"></i>
                     </span>
                  </div>
                  <div className="row">
                     <div className="col-6 border-right">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">89</span> k
                           </h4>
                           <p className="m-0">Friends</p>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">119</span> k
                           </h4>
                           <p className="m-0">Followers</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-3 col-sm-6">
               <div className="card">
                  <div className="social-graph-wrapper widget-linkedin">
                     <span className="s-icon">
                        <i className="fa fa-linkedin"></i>
                     </span>
                  </div>
                  <div className="row">
                     <div className="col-6 border-right">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">89</span> k
                           </h4>
                           <p className="m-0">Friends</p>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">119</span> k
                           </h4>
                           <p className="m-0">Followers</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-3 col-sm-6">
               <div className="card">
                  <div className="social-graph-wrapper widget-googleplus">
                     <span className="s-icon">
                        <i className="fa fa-google-plus"></i>
                     </span>
                  </div>
                  <div className="row">
                     <div className="col-6 border-right">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">89</span> k
                           </h4>
                           <p className="m-0">Friends</p>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">119</span> k
                           </h4>
                           <p className="m-0">Followers</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-3 col-sm-6">
               <div className="card">
                  <div className="social-graph-wrapper widget-twitter">
                     <span className="s-icon">
                        <i className="fa fa-twitter"></i>
                     </span>
                  </div>
                  <div className="row">
                     <div className="col-6 border-right">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">89</span> k
                           </h4>
                           <p className="m-0">Friends</p>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                           <h4 className="m-1">
                              <span className="counter">119</span> k
                           </h4>
                           <p className="m-0">Followers</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Widget;
