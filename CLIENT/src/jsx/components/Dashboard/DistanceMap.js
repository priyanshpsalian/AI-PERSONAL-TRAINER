import React, { useState } from "react";
import { Link } from "react-router-dom";
//** Import Image */
import map from "../../../images/map.png";

import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

import { Dropdown } from "react-bootstrap";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

const ApexBar = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Bar"), 500)
);
const ApexBar2 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Bar2"), 500)
);

const DistanceMap = () => {
   const [activeTab, setActiveTab] = useState("running");
   return (
      <>
         <div className="row">
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-body">
                     <div className="media distance-bx align-items-center">
                        <span className="icon bg-warning shadow-warning mr-3">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g clipPath="url(#clip1)">
                                 <path
                                    d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                                    fill="white"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip1">
                                    <rect width={24} height={24} fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </span>
                        <div className="media-body">
                           <h6 className="fs-18 text-black mb-3">
                              Running
                              <span className="pull-right fs-14 text-dark">
                                 100km
                              </span>
                           </h6>
                           <div className="progress" style={{ height: 9 }}>
                              <div
                                 className="progress-bar bg-warning progress-animated"
                                 style={{ width: "55%", height: 9 }}
                                 role="progressbar"
                              >
                                 <span className="sr-only">55% Complete</span>
                                 <span className="bg-warning arrow" />
                                 <span className="font-w600 counter-bx text-black">
                                    <strong className="counter font-w600">
                                       45
                                    </strong>
                                    km
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-6">
               <div className="card">
                  <div className="card-body">
                     <div className="media distance-bx align-items-center">
                        <span className="icon bg-info shadow-info mr-3">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g clipPath="url(#clip2)">
                                 <path
                                    d="M10.8586 5.22593L5.87121 10.5542C5.50758 11.0845 5.64394 11.8067 6.17172 12.1678L11.1945 15.6098L11.1945 18.9557C11.1945 19.5921 11.6995 20.1249 12.3359 20.1376C12.9874 20.1476 13.5177 19.6249 13.5177 18.976L13.5177 15.0012C13.5177 14.6173 13.3283 14.2588 13.0126 14.0441L9.79041 11.8345L12.5025 8.9583L13.8914 12.1224C14.0758 12.5441 14.4949 12.8169 14.9546 12.8169L19.1844 12.8169C19.8207 12.8169 20.3536 12.3118 20.3662 11.6755C20.3763 11.0239 19.8536 10.4936 19.2046 10.4936L15.7172 10.4936C15.2576 9.44818 14.7677 8.41282 14.3409 7.35222C14.1237 6.81686 14.0025 6.58454 13.6036 6.21585C13.5227 6.1401 12.9596 5.62495 12.4571 5.16535C11.995 4.74613 11.2828 4.77391 10.8586 5.22593Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M15.6162 5.80675C17.0861 5.80675 18.2778 4.61511 18.2778 3.14514C18.2778 1.67517 17.0861 0.483521 15.6162 0.483521C14.1462 0.483521 12.9545 1.67517 12.9545 3.14514C12.9545 4.61511 14.1462 5.80675 15.6162 5.80675Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M4.89899 23.5163C7.60463 23.5163 9.79798 21.323 9.79798 18.6174C9.79798 15.9117 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 -1.81927e-07 15.9117 -2.13831e-07 18.6174C-2.45735e-07 21.323 2.19335 23.5163 4.89899 23.5163Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M19.101 23.5163C21.8066 23.5163 24 21.323 24 18.6174C24 15.9117 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9117 14.202 18.6174C14.202 21.323 16.3954 23.5163 19.101 23.5163Z"
                                    fill="white"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip2">
                                    <rect width={24} height={24} fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </span>
                        <div className="media-body">
                           <h6 className="fs-18 text-black mb-3">
                              Cycling
                              <span className="pull-right fs-14 text-dark">
                                 200km
                              </span>
                           </h6>
                           <div className="progress" style={{ height: 9 }}>
                              <div
                                 className="progress-bar bg-info progress-animated"
                                 style={{ width: "75%", height: 9 }}
                                 role="progressbar"
                              >
                                 <span className="sr-only">175% Complete</span>
                                 <span className="bg-info arrow" />
                                 <span className="font-w600 counter-bx text-black">
                                    <strong className="counter font-w600">
                                       125
                                    </strong>
                                    km
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-4 col-lg-5">
               <div className="card">
                  <div className="card-header d-sm-flex d-block border-0">
                     <div className="mr-auto pr-3">
                        <h4 className="text-black fs-20">Recent Activities</h4>
                        <p className="fs-13 mb-0">
                           Lorem ipsum dolor sit amet, consectetur
                        </p>
                     </div>
                  </div>
                  <PerfectScrollbar className="card-body pt-0 pb-3 dz-scroll height350 ps ps--active-y">
                     <div className="d-flex py-3 border-bottom align-items-center">
                        <span className="activity-icon border border-warning border-2 mr-3">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g clipPath="url(#clip3)">
                                 <path
                                    d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                                    fill="#FF9432"
                                 />
                                 <path
                                    d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                                    fill="#FF9432"
                                 />
                                 <path
                                    d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                                    fill="#FF9432"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip3">
                                    <rect width={24} height={24} fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </span>
                        <div>
                           <h6 className="font-w600 fs-16 mb-0">
                              <Link
                                 to="/personal-record"
                                 className="text-black"
                              >
                                 Sunday Running
                              </Link>
                           </h6>
                           <span className="fs-12">2km distances</span>
                        </div>
                        <Link to="/personal-record" className="ml-auto">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M9 18L15 12L9 6" fill="#D3D6E4" />
                           </svg>
                        </Link>
                     </div>
                     <div className="d-flex py-3 border-bottom align-items-center">
                        <span className="activity-icon border border-warning border-2 mr-3">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g clipPath="url(#clip4)">
                                 <path
                                    d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                                    fill="#FF9432"
                                 />
                                 <path
                                    d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                                    fill="#FF9432"
                                 />
                                 <path
                                    d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                                    fill="#FF9432"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip4">
                                    <rect width={24} height={24} fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </span>
                        <div>
                           <h6 className="font-w600 fs-16 mb-0">
                              <Link
                                 to="/personal-record"
                                 className="text-black"
                              >
                                 Saturday Running
                              </Link>
                           </h6>
                           <span className="fs-12">2km distances</span>
                        </div>
                        <Link to="/personal-record" className="ml-auto">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M9 18L15 12L9 6" fill="#D3D6E4" />
                           </svg>
                        </Link>
                     </div>
                     <div className="d-flex py-3 border-bottom align-items-center">
                        <span className="activity-icon border border-info border-2 mr-3">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g clipPath="url(#clip5)">
                                 <path
                                    d="M10.8586 5.22593L5.87121 10.5542C5.50758 11.0845 5.64394 11.8067 6.17172 12.1678L11.1945 15.6098L11.1945 18.9557C11.1945 19.5921 11.6995 20.1249 12.3359 20.1376C12.9874 20.1476 13.5177 19.6249 13.5177 18.976L13.5177 15.0012C13.5177 14.6173 13.3283 14.2588 13.0126 14.0441L9.79041 11.8345L12.5025 8.9583L13.8914 12.1224C14.0758 12.5441 14.4949 12.8169 14.9546 12.8169L19.1844 12.8169C19.8207 12.8169 20.3536 12.3118 20.3662 11.6755C20.3763 11.0239 19.8536 10.4936 19.2046 10.4936L15.7172 10.4936C15.2576 9.44818 14.7677 8.41282 14.3409 7.35222C14.1237 6.81686 14.0025 6.58454 13.6036 6.21585C13.5227 6.1401 12.9596 5.62495 12.4571 5.16535C11.995 4.74613 11.2828 4.77391 10.8586 5.22593Z"
                                    fill="#1EA7C5"
                                 />
                                 <path
                                    d="M15.6162 5.80675C17.0861 5.80675 18.2778 4.61511 18.2778 3.14514C18.2778 1.67517 17.0861 0.483521 15.6162 0.483521C14.1462 0.483521 12.9545 1.67517 12.9545 3.14514C12.9545 4.61511 14.1462 5.80675 15.6162 5.80675Z"
                                    fill="#1EA7C5"
                                 />
                                 <path
                                    d="M4.89899 23.5163C7.60463 23.5163 9.79798 21.323 9.79798 18.6174C9.79798 15.9117 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 -1.81927e-07 15.9117 -2.13831e-07 18.6174C-2.45735e-07 21.323 2.19335 23.5163 4.89899 23.5163Z"
                                    fill="#1EA7C5"
                                 />
                                 <path
                                    d="M19.101 23.5163C21.8066 23.5163 24 21.323 24 18.6174C24 15.9117 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9117 14.202 18.6174C14.202 21.323 16.3954 23.5163 19.101 23.5163Z"
                                    fill="#1EA7C5"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip5">
                                    <rect width={24} height={24} fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </span>
                        <div>
                           <h6 className="font-w600 fs-16 mb-0">
                              <Link
                                 to="/personal-record"
                                 className="text-black"
                              >
                                 Friday Cycling
                              </Link>
                           </h6>
                           <span className="fs-12">2km distances</span>
                        </div>
                        <Link to="/personal-record" className="ml-auto">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M9 18L15 12L9 6" fill="#D3D6E4" />
                           </svg>
                        </Link>
                     </div>
                     <div className="d-flex py-3 border-bottom align-items-center">
                        <span className="activity-icon border border-warning border-2 mr-3">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g clipPath="url(#clip6)">
                                 <path
                                    d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                                    fill="#FF9432"
                                 />
                                 <path
                                    d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                                    fill="#FF9432"
                                 />
                                 <path
                                    d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                                    fill="#FF9432"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip6">
                                    <rect width={24} height={24} fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </span>
                        <div>
                           <h6 className="font-w600 fs-16 mb-0">
                              <Link
                                 to="/personal-record"
                                 className="text-black"
                              >
                                 Monday Running
                              </Link>
                           </h6>
                           <span className="fs-12">2km distances</span>
                        </div>
                        <Link to="/personal-record" className="ml-auto">
                           <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path d="M9 18L15 12L9 6" fill="#D3D6E4" />
                           </svg>
                        </Link>
                     </div>
                  </PerfectScrollbar>
                  <div className="card-footer text-center border-0 pt-0 pb-4">
                     <Link
                        className="text-primary" to="/personal-record" rel="ajax/recent-activities">
                        View more
                     </Link>
                  </div>
               </div>
            </div>
            <div className="col-xl-9 col-xxl-8 col-lg-7">
               <div className="card">
                  <div className="card-header d-sm-flex d-block pb-0 border-0">
                     <div className="mr-auto pr-3">
                        <h4 className="text-black fs-20">Stats</h4>
                        <p className="fs-13 mb-0">
                           Lorem ipsum dolor sit amet, consectetur
                        </p>
                     </div>
                     <div className="card-action card-tabs style-1 mt-3 mt-sm-0 mt-3 mb-sm-0 mb-3 mt-sm-0">
                        <ul className="nav nav-tabs" role="tablist">
                           <li
                              className="nav-item"
                              onClick={() => setActiveTab("running")}
                           >
                              <Link
                                 className=" active"
                                 className={`nav-link ${
                                    activeTab === "running" ? "active" : ""
                                 }`}
                                 data-toggle="tab"
                                 to="#Running"
                                 role="tab"
                              >
                                 <svg
                                    className="mr-2"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip7)">
                                       <path
                                          d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219823 18.4993C0.133362 19.0815 0.644694 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.00091 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71475 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                                          fill="#FF9432"
                                       />
                                       <path
                                          d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                                          fill="#FF9432"
                                       />
                                       <path
                                          d="M13.0179 3.15677C12.7369 2.86819 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43727L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                                          fill="#FF9432"
                                       />
                                    </g>
                                    <defs>
                                       <clipPath id="clip7">
                                          <rect
                                             width={24}
                                             height={24}
                                             fill="white"
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                                 Running
                                 <span className="bg-warning" />
                              </Link>
                           </li>
                           <li
                              className="nav-item"
                              onClick={() => setActiveTab("cycling")}
                           >
                              <Link
                                 data-toggle="tab"
                                 to="#Cycling"
                                 role="tab"
                                 className={`nav-link ${
                                    activeTab === "cycling" ? "active" : ""
                                 }`}
                              >
                                 <svg
                                    className="mr-2"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M10.8586 5.22593L5.87121 10.5542C5.50758 11.0845 5.64394 11.8067 6.17172 12.1678L11.1945 15.6098V18.9557C11.1945 19.5921 11.6995 20.1249 12.3359 20.1376C12.9874 20.1476 13.5177 19.6249 13.5177 18.976V15.0012C13.5177 14.6173 13.3283 14.2588 13.0126 14.0441L9.79041 11.8345L12.5025 8.9583L13.8914 12.1224C14.0758 12.5441 14.4949 12.8169 14.9546 12.8169H19.1844C19.8207 12.8169 20.3536 12.3118 20.3662 11.6755C20.3763 11.0239 19.8536 10.4936 19.2046 10.4936H15.7172C15.2576 9.44818 14.7677 8.41282 14.3409 7.35222C14.1237 6.81686 14.0025 6.58454 13.6036 6.21585C13.5227 6.1401 12.9596 5.62495 12.4571 5.16535C11.995 4.74613 11.2828 4.77391 10.8586 5.22593Z"
                                       fill="#1EA7C5"
                                    />
                                    <path
                                       d="M15.6162 5.80675C17.0861 5.80675 18.2778 4.61511 18.2778 3.14514C18.2778 1.67517 17.0861 0.483521 15.6162 0.483521C14.1462 0.483521 12.9545 1.67517 12.9545 3.14514C12.9545 4.61511 14.1462 5.80675 15.6162 5.80675Z"
                                       fill="#1EA7C5"
                                    />
                                    <path
                                       d="M4.89899 23.5163C7.60463 23.5163 9.79798 21.323 9.79798 18.6174C9.79798 15.9117 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 0 15.9117 0 18.6174C0 21.323 2.19335 23.5163 4.89899 23.5163Z"
                                       fill="#1EA7C5"
                                    />
                                    <path
                                       d="M19.101 23.5163C21.8066 23.5163 24 21.323 24 18.6174C24 15.9117 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9117 14.202 18.6174C14.202 21.323 16.3954 23.5163 19.101 23.5163Z"
                                       fill="#1EA7C5"
                                    />
                                 </svg>
                                 Cycling
                                 <span className="bg-info" />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="card-body pb-0">
                     <div className="tab-content">
                        <div
                           className={`tab-pane fade ${
                              activeTab === "running" ? "show active" : ""
                           }`}
                           id="Running"
                           role="tabpanel"
                        >
                           <ApexBar columnWidth="80%"  />
                        </div>
                        <div
                           className={`tab-pane fade ${
                              activeTab === "cycling" ? "show active" : ""
                           }`}
                           id="Cycling"
                           role="tabpanel"
                        >
                           <ApexBar2 />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-12 mt-sm-0 mt-3">
               <h4 className="text-black fs-20">Maps Route</h4>
               <p className="fs-13">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="col-xl-12">
               <div className="map-bx">
                  <img src={map} alt="" />
                  <div className="map-info card mb-0">
                     <div className="card-header border-0 pb-0 p-4">
                        <div>
                           <h4 className="text-black fs-20">Workout Details</h4>
                           <p className="fs-13 mb-0">
                              Lorem ipsum dolor sit amet, consectetur
                           </p>
                        </div>
                     </div>
                     <div className="card-body p-0">
                        <div className="d-flex align-items-center bgl-info p-4">
                           <svg
                              className="mr-3"
                              width={51}
                              height={51}
                              viewBox="0 0 51 51"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <rect
                                 width={51}
                                 height={51}
                                 rx="25.5"
                                 fill="#1EA7C5"
                              />
                              <g clipPath="url()">
                                 <path
                                    d="M23.8586 19.226L18.8712 24.5542C18.5076 25.0845 18.6439 25.8068 19.1717 26.1679L24.1945 29.6098L24.1945 32.9558C24.1945 33.5921 24.6995 34.125 25.3359 34.1376C25.9874 34.1477 26.5177 33.6249 26.5177 32.976L26.5177 29.0012C26.5177 28.6174 26.3283 28.2588 26.0126 28.0442L22.7904 25.8346L25.5025 22.9583L26.8914 26.1225C27.0758 26.5442 27.4949 26.8169 27.9546 26.8169L32.1844 26.8169C32.8207 26.8169 33.3536 26.3119 33.3662 25.6755C33.3763 25.024 32.8536 24.4937 32.2046 24.4937L28.7172 24.4937C28.2576 23.4482 27.7677 22.4129 27.3409 21.3522C27.1237 20.8169 27.0025 20.5846 26.6036 20.2159C26.5227 20.1401 25.9596 19.625 25.4571 19.1654C24.995 18.7462 24.2828 18.7739 23.8586 19.226Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M28.6162 19.8068C30.0861 19.8068 31.2778 18.6151 31.2778 17.1452C31.2778 15.6752 30.0861 14.4836 28.6162 14.4836C27.1462 14.4836 25.9545 15.6752 25.9545 17.1452C25.9545 18.6151 27.1462 19.8068 28.6162 19.8068Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M17.899 37.5164C20.6046 37.5164 22.798 35.323 22.798 32.6174C22.798 29.9117 20.6046 27.7184 17.899 27.7184C15.1934 27.7184 13 29.9117 13 32.6174C13 35.323 15.1934 37.5164 17.899 37.5164Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M32.101 37.5164C34.8066 37.5164 37 35.323 37 32.6174C37 29.9118 34.8066 27.7184 32.101 27.7184C29.3954 27.7184 27.202 29.9118 27.202 32.6174C27.202 35.323 29.3954 37.5164 32.101 37.5164Z"
                                    fill="white"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip8">
                                    <rect
                                       width={24}
                                       height={24}
                                       fill="white"
                                       transform="translate(13 14)"
                                    />
                                 </clipPath>
                              </defs>
                           </svg>
                           <div>
                              <h6 className="fs-16 text-black mb-0">Cycling</h6>
                              <span className="fs-12">100km target/day</span>
                           </div>
                        </div>
                        <div className="d-flex flex-wrap p-4">
                           <div className="mr-5 mb-3">
                              <p className="fs-14 mb-2">Total Distance</p>
                              <span className="fs-20 font-w500 text-black">
                                 24km
                              </span>
                           </div>
                           <div className="mr-5 mb-3">
                              <p className="fs-14 mb-2">Time</p>
                              <span className="fs-20 font-w500 text-black">
                                 00:34:53”
                              </span>
                           </div>
                           <div className="mr-5 mb-3">
                              <p className="fs-14 mb-2">Start Time</p>
                              <span className="fs-20 font-w500 text-black">
                                 09:22 AM
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DistanceMap;
