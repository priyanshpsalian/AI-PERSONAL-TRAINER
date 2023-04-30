import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Modal, Button } from "react-bootstrap";

import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

const ApexLine3 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Line3"), 500)
);
const ApexLine = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Line"), 500)
);
const ApexLine2 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Line2"), 500)
);
const ApexPie = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Pie"), 500)
);

const Statistic = () => {
   const [activeModal, setActiveModal] = useState(false);
   return (
      <>
         <div className="row">
            <div className="col-xl-9 col-xxl-8">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header d-sm-flex d-block pb-0 border-0">
                           <div className="d-flex align-items-center">
                              <span className="p-3 mr-3 rounded bg-warning">
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
                                          <rect
                                             width={24}
                                             height={24}
                                             fill="white"
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                              </span>
                              <div className="mr-auto pr-3">
                                 <h4 className="text-black fs-20">Running</h4>
                                 <p className="fs-13 mb-0 text-black">
                                    Lorem ipsum dolor sit amet, consectetur
                                 </p>
                              </div>
                           </div>
                           <Dropdown className="dropdown mt-sm-0 mt-3">
                              <Dropdown.Toggle
                                 as="button"
                                 variant=""
                                 className="btn rounded border border-light dropdown-toggle"
                              >
                                 Monthly
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                 <Dropdown.Item>Link 1</Dropdown.Item>
                                 <Dropdown.Item>Link 2</Dropdown.Item>
                                 <Dropdown.Item>Link 3</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="card-body pb-0">
                           <ApexLine3 />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header d-sm-flex d-block pb-0 border-0">
                           <div className="d-flex align-items-center">
                              <span className="p-3 mr-3 rounded bg-info">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M10.8586 5.22599L5.87121 10.5543C5.50758 11.0846 5.64394 11.8068 6.17172 12.1679L11.1945 15.6098V18.9558C11.1945 19.5921 11.6995 20.125 12.3359 20.1376C12.9874 20.1477 13.5177 19.625 13.5177 18.976V15.0013C13.5177 14.6174 13.3283 14.2588 13.0126 14.0442L9.79041 11.8346L12.5025 8.95836L13.8914 12.1225C14.0758 12.5442 14.4949 12.817 14.9546 12.817H19.1844C19.8207 12.817 20.3536 12.3119 20.3662 11.6755C20.3763 11.024 19.8536 10.4937 19.2046 10.4937H15.7172C15.2576 9.44824 14.7677 8.41288 14.3409 7.35228C14.1237 6.81693 14.0025 6.5846 13.6036 6.21592C13.5227 6.14016 12.9596 5.62501 12.4571 5.16541C11.995 4.74619 11.2828 4.77397 10.8586 5.22599Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M15.6162 5.80681C17.0861 5.80681 18.2778 4.61517 18.2778 3.1452C18.2778 1.67523 17.0861 0.483582 15.6162 0.483582C14.1462 0.483582 12.9545 1.67523 12.9545 3.1452C12.9545 4.61517 14.1462 5.80681 15.6162 5.80681Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M4.89899 23.5164C7.60463 23.5164 9.79798 21.3231 9.79798 18.6174C9.79798 15.9118 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 0 15.9118 0 18.6174C0 21.3231 2.19335 23.5164 4.89899 23.5164Z"
                                       fill="white"
                                    />
                                    <path
                                       d="M19.101 23.5164C21.8066 23.5164 24 21.3231 24 18.6174C24 15.9118 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9118 14.202 18.6174C14.202 21.3231 16.3954 23.5164 19.101 23.5164Z"
                                       fill="white"
                                    />
                                 </svg>
                              </span>
                              <div className="mr-auto pr-3">
                                 <h4 className="text-black fs-20">Cycling</h4>
                                 <p className="fs-13 mb-0 text-black">
                                    Lorem ipsum dolor sit amet, consectetur
                                 </p>
                              </div>
                           </div>
                           <Dropdown className="dropdown mt-sm-0 mt-3">
                              <Dropdown.Toggle
                                 as="button"
                                 variant=""
                                 className="btn rounded border border-light dropdown-toggle"
                              >
                                 Monthly
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                 <Dropdown.Item>Link 1</Dropdown.Item>
                                 <Dropdown.Item>Link 2</Dropdown.Item>
                                 <Dropdown.Item>Link 3</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="card-body pb-0">
                           <ApexLine />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header d-sm-flex d-block pb-0 border-0">
                           <div className="d-flex align-items-center">
                              <span className="p-3 mr-3 rounded bg-secondary">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip2)">
                                       <path
                                          d="M11.9997 5.9999C13.6565 5.9999 14.9997 4.65677 14.9997 2.99995C14.9997 1.34312 13.6565 0 11.9997 0C10.3429 0 8.99977 1.34312 8.99977 2.99995C8.99977 4.65677 10.3429 5.9999 11.9997 5.9999Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M17.8305 21.8297L14.136 23.2153L15.9733 23.9042C16.7639 24.1978 17.6171 23.791 17.9046 23.0261C18.0576 22.618 18.0124 22.1905 17.8305 21.8297Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M5.02674 16.5949C4.2526 16.3078 3.38687 16.6974 3.0954 17.473C2.80464 18.2486 3.19796 19.1128 3.97351 19.4043L5.59177 20.0111L9.86409 18.4088L5.02674 16.5949Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M20.9045 17.473C20.613 16.6974 19.7473 16.3078 18.9732 16.5949L6.97342 21.0948C6.19778 21.3863 5.8045 22.2505 6.09527 23.0262C6.38275 23.7908 7.23569 24.198 8.02661 23.9043L20.0264 19.4044C20.802 19.1129 21.1953 18.2487 20.9045 17.473Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M22.4997 11.9998H18.9271L16.3417 6.82899C16.073 6.29213 15.5264 5.98627 14.9631 5.99991L11.9997 5.9999L9.0366 5.99991C8.4734 5.98627 7.92754 6.29217 7.65825 6.82899L5.07286 11.9998H1.50019C0.671868 11.9998 0.000244141 12.6714 0.000244141 13.4997C0.000244141 14.328 0.671868 14.9997 1.50019 14.9997H6.00009C6.56845 14.9997 7.08773 14.6789 7.34184 14.1706L8.99999 10.8543V16.483L11.9998 17.6079L14.9999 16.4827V10.8543L16.658 14.1706C16.9122 14.6789 17.4315 14.9997 17.9998 14.9997H22.4997C23.328 14.9997 23.9996 14.328 23.9996 13.4997C23.9996 12.6714 23.3281 11.9998 22.4997 11.9998Z"
                                          fill="white"
                                       />
                                    </g>
                                    <defs>
                                       <clipPath id="clip2">
                                          <rect
                                             width={24}
                                             height={24}
                                             fill="white"
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                              </span>
                              <div className="mr-auto pr-3">
                                 <h4 className="text-black fs-20">Yoga</h4>
                                 <p className="fs-13 mb-0 text-black">
                                    Lorem ipsum dolor sit amet, consectetur
                                 </p>
                              </div>
                           </div>
                           <Dropdown className="dropdown mt-sm-0 mt-3">
                              <Dropdown.Toggle
                                 as="button"
                                 variant=""
                                 className="btn rounded border border-light dropdown-toggle"
                              >
                                 Monthly
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                 <Dropdown.Item>Link 1</Dropdown.Item>
                                 <Dropdown.Item>Link 2</Dropdown.Item>
                                 <Dropdown.Item>Link 3</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="card-body pb-0">
                           <ApexLine2 />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-4">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-body p-0">
                           <Button
                              as="a"
                              to="/workout-statistic"
                              className="bg-primary text-white text-center p-4 fs-20 d-block rounded"
                              data-toggle="modal"
                              data-target="#addMoreTraining"
                              onClick={() => setActiveModal(true)}
                           >
                              + Add more training
                           </Button>
                           {/* Modal */}
                           <Modal
                              show={activeModal}
                              className="fade"
                              id="addMoreTraining"
                           >
                              <div className="modal-content">
                                 <Modal.Header className="modal-header">
                                    <Modal.Title className="modal-title">
                                       Add more training
                                    </Modal.Title>
                                    <Button
                                       variant=""
                                       onClick={() => setActiveModal(false)}
                                       type="button"
                                       className="close"
                                    >
                                       <span>×</span>
                                    </Button>
                                 </Modal.Header>
                                 <Modal.Body>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                       <div className="form-group">
                                          <label>Running</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Km"
                                          />
                                       </div>
                                       <div className="form-group">
                                          <label>Cycling</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="Km"
                                          />
                                       </div>
                                       <div className="form-group">
                                          <label>Yoga</label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             placeholder="hr"
                                          />
                                       </div>
                                       <button className="btn btn-primary">
                                          Submit
                                       </button>
                                    </form>
                                 </Modal.Body>
                              </div>
                           </Modal>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                     <div className="card">
                        <div className="card-header flex-wrap border-0 pb-0">
                           <h4 className="text-black fs-20 mb-3">Progress</h4>
                           <Link
                              to="/personal-record"
                              className="btn btn-outline-light btn-rounded"
                           >
                              Set Target
                           </Link>
                        </div>
                        <div className="card-body">
                           <div className="d-flex mb-sm-5 mb-3">
                              <div className="d-inline-block relative donut-chart-sale mr-3">
                                 <svg className="peity" height={90} width={90}>
                                    <path
                                       d="M 45 0 A 45 45 0 0 1 90 45 L 79 45 A 34 34 0 0 0 45 11"
                                       data-value={2}
                                       fill="rgb(255, 148, 50)"
                                    />
                                    <path
                                       d="M 90 45 A 45 45 0 1 1 44.99999999999999 0 L 44.99999999999999 11 A 34 34 0 1 0 79 45"
                                       data-value={6}
                                       fill="rgba(236, 236, 236, 1)"
                                    />
                                 </svg>

                                 <small>
                                    <svg
                                       width={24}
                                       height={24}
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <g clipPath="url(#clip3)">
                                          <path
                                             d="M0.988957 17.0741C0.328275 17.2007 -0.104585 17.8386 0.0219821 18.4993C0.133361 19.0815 0.644693 19.4865 1.21678 19.4865C1.29272 19.4865 1.37119 19.4789 1.44713 19.4637L6.4592 18.5018C6.74524 18.4461 7.0009 18.2917 7.18316 18.0639L9.33481 15.3503L8.61593 14.9832C8.08435 14.7149 7.71474 14.2289 7.58818 13.6391L5.55804 16.1983L0.988957 17.0741Z"
                                             fill="#FF9432"
                                          />
                                          <path
                                             d="M18.84 6.49306C20.3135 6.49306 21.508 5.29854 21.508 3.82502C21.508 2.3515 20.3135 1.15698 18.84 1.15698C17.3665 1.15698 16.1719 2.3515 16.1719 3.82502C16.1719 5.29854 17.3665 6.49306 18.84 6.49306Z"
                                             fill="#FF9432"
                                          />
                                          <path
                                             d="M13.0179 3.15677C12.7369 2.8682 12.4762 2.75428 12.1902 2.75428C12.0864 2.75428 11.9826 2.76947 11.8712 2.79479L7.29203 3.88073C6.6592 4.03008 6.26937 4.66545 6.41872 5.29576C6.54782 5.83746 7.02877 6.20198 7.56289 6.20198C7.65404 6.20198 7.74514 6.19185 7.8363 6.16907L11.7371 5.24513C11.9902 5.52611 13.2584 6.90063 13.4888 7.14364C11.8763 8.87002 10.2639 10.5939 8.65137 12.3202C8.62605 12.3481 8.60329 12.3759 8.58049 12.4038C8.10966 13.0037 8.25397 13.9454 8.96275 14.3023L13.9064 16.826L11.3397 20.985C10.9878 21.5571 11.165 22.3064 11.7371 22.6608C11.9371 22.7848 12.1573 22.843 12.375 22.843C12.7825 22.843 13.1824 22.638 13.4128 22.2659L16.6732 16.983C16.8529 16.6919 16.901 16.34 16.8074 16.0135C16.7137 15.6844 16.4884 15.411 16.1821 15.2566L12.8331 13.553L16.3543 9.78636L19.0122 12.0393C19.2324 12.2266 19.5032 12.3177 19.7716 12.3177C20.0601 12.3177 20.3487 12.2114 20.574 12.0038L23.6243 9.16112C24.1002 8.71814 24.128 7.97392 23.685 7.49803C23.4521 7.24996 23.1383 7.12339 22.8244 7.12339C22.5383 7.12339 22.2497 7.22717 22.0245 7.43728L19.7412 9.56107C19.7386 9.56361 14.0178 4.18196 13.0179 3.15677Z"
                                             fill="#FF9432"
                                          />
                                       </g>
                                       <defs>
                                          <clipPath id="clip3">
                                             <rect
                                                width={24}
                                                height={24}
                                                fill="white"
                                             />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </small>
                              </div>
                              <div>
                                 <h4 className="fs-18 text-black">
                                    Running (45%)
                                 </h4>
                                 <span>45km/100km</span>
                              </div>
                           </div>
                           <div className="d-flex mb-sm-5 mb-3">
                              <div className="d-inline-block relative donut-chart-sale mr-3">
                                 <svg className="peity" height={90} width={90}>
                                    <path
                                       d="M 45 0 A 45 45 0 1 1 0 45.00000000000001 L 11 45.00000000000001 A 34 34 0 1 0 45 11"
                                       data-value={6}
                                       fill="rgb(30, 167, 197)"
                                    />
                                    <path
                                       d="M 0 45.00000000000001 A 45 45 0 0 1 44.99999999999999 0 L 44.99999999999999 11 A 34 34 0 0 0 11 45.00000000000001"
                                       data-value={2}
                                       fill="rgba(236, 236, 236, 1)"
                                    />
                                 </svg>

                                 <small>
                                    <svg
                                       width={24}
                                       height={24}
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <g clipPath="url(#clip4)">
                                          <path
                                             d="M10.8586 5.22599L5.87121 10.5543C5.50758 11.0846 5.64394 11.8068 6.17172 12.1679L11.1945 15.6098L11.1945 18.9558C11.1945 19.5921 11.6995 20.125 12.3359 20.1376C12.9874 20.1477 13.5177 19.625 13.5177 18.976L13.5177 15.0013C13.5177 14.6174 13.3283 14.2588 13.0126 14.0442L9.79041 11.8346L12.5025 8.95836L13.8914 12.1225C14.0758 12.5442 14.4949 12.817 14.9546 12.817L19.1844 12.817C19.8207 12.817 20.3536 12.3119 20.3662 11.6755C20.3763 11.024 19.8536 10.4937 19.2046 10.4937L15.7172 10.4937C15.2576 9.44824 14.7677 8.41288 14.3409 7.35228C14.1237 6.81693 14.0025 6.5846 13.6036 6.21592C13.5227 6.14016 12.9596 5.62501 12.4571 5.16541C11.995 4.74619 11.2828 4.77397 10.8586 5.22599Z"
                                             fill="#1EA7C5"
                                          />
                                          <path
                                             d="M15.6162 5.80681C17.0861 5.80681 18.2778 4.61517 18.2778 3.1452C18.2778 1.67523 17.0861 0.483582 15.6162 0.483582C14.1462 0.483582 12.9545 1.67523 12.9545 3.1452C12.9545 4.61517 14.1462 5.80681 15.6162 5.80681Z"
                                             fill="#1EA7C5"
                                          />
                                          <path
                                             d="M4.89899 23.5164C7.60463 23.5164 9.79798 21.3231 9.79798 18.6174C9.79798 15.9118 7.60463 13.7184 4.89899 13.7184C2.19335 13.7184 -1.81927e-07 15.9118 -2.13831e-07 18.6174C-2.45735e-07 21.3231 2.19335 23.5164 4.89899 23.5164Z"
                                             fill="#1EA7C5"
                                          />
                                          <path
                                             d="M19.101 23.5164C21.8066 23.5164 24 21.3231 24 18.6174C24 15.9118 21.8066 13.7184 19.101 13.7184C16.3954 13.7184 14.202 15.9118 14.202 18.6174C14.202 21.3231 16.3954 23.5164 19.101 23.5164Z"
                                             fill="#1EA7C5"
                                          />
                                       </g>
                                       <defs>
                                          <clipPath id="clip4">
                                             <rect
                                                width={24}
                                                height={24}
                                                fill="white"
                                             />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </small>
                              </div>
                              <div>
                                 <h4 className="fs-18 text-black">
                                    Cycling (66%)
                                 </h4>
                                 <span>69km/20km</span>
                              </div>
                           </div>
                           <div className="d-flex">
                              <div className="d-inline-block relative donut-chart-sale mr-3">
                                 <svg className="peity" height="90" width="90">
                                    <path
                                       d="M 45 0 A 45 45 0 1 1 0 45.00000000000001 L 11 45.00000000000001 A 34 34 0 1 0 45 11"
                                       data-value="6"
                                       fill="rgb(30, 167, 197)"
                                    ></path>
                                    <path
                                       d="M 0 45.00000000000001 A 45 45 0 0 1 44.99999999999999 0 L 44.99999999999999 11 A 34 34 0 0 0 11 45.00000000000001"
                                       data-value="2"
                                       fill="rgba(236, 236, 236, 1)"
                                    ></path>
                                 </svg>
                                 <small>
                                    <svg
                                       width={24}
                                       height={24}
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <g clipPath="url(#clip5)">
                                          <path
                                             d="M11.9997 5.9999C13.6565 5.9999 14.9997 4.65677 14.9997 2.99995C14.9997 1.34312 13.6565 1.61033e-07 11.9997 1.41496e-07C10.3429 1.21959e-07 8.99977 1.34312 8.99977 2.99995C8.99977 4.65677 10.3429 5.9999 11.9997 5.9999Z"
                                             fill="#C046D3"
                                          />
                                          <path
                                             d="M17.8305 21.8297L14.136 23.2153L15.9733 23.9042C16.7639 24.1978 17.6171 23.791 17.9046 23.0261C18.0576 22.618 18.0124 22.1905 17.8305 21.8297Z"
                                             fill="#C046D3"
                                          />
                                          <path
                                             d="M5.02674 16.5949C4.2526 16.3078 3.38687 16.6974 3.0954 17.473C2.80464 18.2486 3.19796 19.1128 3.97351 19.4043L5.59177 20.0111L9.86409 18.4088L5.02674 16.5949Z"
                                             fill="#C046D3"
                                          />
                                          <path
                                             d="M20.9045 17.473C20.613 16.6974 19.7473 16.3078 18.9732 16.5949L6.97342 21.0948C6.19778 21.3863 5.8045 22.2505 6.09527 23.0262C6.38275 23.7908 7.23569 24.198 8.02661 23.9043L20.0263 19.4044C20.802 19.1129 21.1953 18.2487 20.9045 17.473Z"
                                             fill="#C046D3"
                                          />
                                          <path
                                             d="M22.4997 11.9998L18.9271 11.9998L16.3417 6.82899C16.073 6.29213 15.5264 5.98627 14.9631 5.99991L11.9997 5.9999L9.0366 5.99991C8.4734 5.98627 7.92754 6.29217 7.65825 6.82899L5.07286 11.9998L1.50019 11.9998C0.671868 11.9998 0.000243991 12.6714 0.000243981 13.4997C0.000243972 14.328 0.671868 14.9997 1.50019 14.9997L6.00009 14.9997C6.56845 14.9997 7.08773 14.6789 7.34184 14.1706L8.99999 10.8543L8.99999 16.483L11.9998 17.6079L14.9999 16.4827L14.9999 10.8543L16.658 14.1706C16.9122 14.6789 17.4315 14.9997 17.9998 14.9997L22.4997 14.9997C23.328 14.9997 23.9996 14.328 23.9996 13.4997C23.9996 12.6714 23.3281 11.9998 22.4997 11.9998Z"
                                             fill="#C046D3"
                                          />
                                       </g>
                                       <defs>
                                          <clipPath id="clip5">
                                             <rect
                                                width={24}
                                                height={24}
                                                fill="white"
                                             />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                 </small>
                              </div>
                              <div>
                                 <h4 className="fs-18 text-black">
                                    Yoga (78%)
                                 </h4>
                                 <span>56min/1hr</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12 col-md-6">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <h4 className="text-black fs-20 mb-0">Charts</h4>
                        </div>
                        <div className="card-body text-center">
                           <div className="man-chart">
                              <ApexPie width={100} height={400} />
                              <svg
                                 width={39}
                                 height={74}
                                 viewBox="0 0 39 74"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M30.5324 18.9448C27.792 15.402 23.576 13.6 18 13.6C12.424 13.6 8.20798 15.402 5.46758 18.9448C0.0819769 25.908 2.86998 36.9376 2.99238 37.4C3.34496 38.8603 4.81444 39.7583 6.27474 39.4057C7.71974 39.0568 8.617 37.6123 8.28958 36.1624C8.28958 36.0808 6.69838 27.8596 10.3296 23.3988L10.5268 23.1676V36.6588L9.16678 65.1508C9.09198 66.6164 10.1932 67.8771 11.6556 68H11.88C13.2658 68.0095 14.4371 66.9758 14.6 65.5996L17.5308 40.8H18.4624L21.4 65.5996C21.5628 66.9758 22.7341 68.0095 24.12 68H24.3512C25.8135 67.8771 26.9148 66.6164 26.84 65.1508L25.48 36.6588V23.1744L25.6636 23.392C29.3356 27.88 27.7036 36.074 27.7036 36.176C27.3656 37.6407 28.2789 39.1021 29.7436 39.44C31.2083 39.778 32.6696 38.8647 33.0076 37.4C33.13 36.9376 35.918 25.908 30.5324 18.9448Z"
                                    fill="#D8D8D8"
                                 />
                                 <path
                                    d="M17.9999 12.24C21.3799 12.24 24.12 9.49998 24.12 6.12C24.12 2.74002 21.3799 0 17.9999 0C14.62 0 11.8799 2.74002 11.8799 6.12C11.8799 9.49998 14.62 12.24 17.9999 12.24Z"
                                    fill="#D8D8D8"
                                 />
                                 <mask
                                    id="mask0"
                                    maskUnits="userSpaceOnUse"
                                    x={0}
                                    y={21}
                                    width={39}
                                    height={53}
                                 >
                                    <path
                                       d="M0 28.6827C0 26.841 1.39216 25.2974 3.22404 25.1079L3.29046 25.101C4.246 25.0022 5.11673 24.5084 5.69211 23.7392L6.17041 23.0997C7.53814 21.2711 10.3705 21.5997 11.2832 23.6929L11.4012 23.9634C12.2643 25.9427 14.9458 26.2466 16.2299 24.5106V24.5106C17.3481 22.9991 19.6073 22.9931 20.7335 24.4987L21.5805 25.6312C22.4095 26.7395 23.7687 27.3189 25.1423 27.1496L28.3724 26.7515C34.0189 26.0554 39 30.4603 39 36.1495V54.5C39 65.2696 30.2696 74 19.5 74V74C8.73045 74 0 65.2696 0 54.5V28.6827Z"
                                       fill="#C4C4C4"
                                    />
                                 </mask>
                                 <g mask="url(#mask0)">
                                    <path
                                       d="M30.5324 18.9448C27.792 15.402 23.576 13.6 18 13.6C12.424 13.6 8.20798 15.402 5.46758 18.9448C0.0819769 25.908 2.86998 36.9376 2.99238 37.4C3.34496 38.8603 4.81444 39.7583 6.27474 39.4057C7.71974 39.0568 8.617 37.6123 8.28958 36.1624C8.28958 36.0808 6.69838 27.8596 10.3296 23.3988L10.5268 23.1676V36.6588L9.16678 65.1508C9.09198 66.6164 10.1932 67.8771 11.6556 68H11.88C13.2658 68.0095 14.4371 66.9758 14.6 65.5996L17.5308 40.8H18.4624L21.4 65.5996C21.5628 66.9758 22.7341 68.0095 24.12 68H24.3512C25.8135 67.8771 26.9148 66.6164 26.84 65.1508L25.48 36.6588V23.1744L25.6636 23.392C29.3356 27.88 27.7036 36.074 27.7036 36.176C27.3656 37.6407 28.2789 39.1021 29.7436 39.44C31.2083 39.778 32.6696 38.8647 33.0076 37.4C33.13 36.9376 35.918 25.908 30.5324 18.9448Z"
                                       fill="#6EC51E"
                                    />
                                    <path
                                       d="M17.9999 12.24C21.3799 12.24 24.12 9.49998 24.12 6.12C24.12 2.74002 21.3799 0 17.9999 0C14.62 0 11.8799 2.74002 11.8799 6.12C11.8799 9.49998 14.62 12.24 17.9999 12.24Z"
                                       fill="#6EC51E"
                                    />
                                 </g>
                              </svg>
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

export default Statistic;
