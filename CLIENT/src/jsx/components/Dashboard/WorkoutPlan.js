import React, { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button, Modal, Dropdown } from "react-bootstrap";

const WorkoutPlan = () => {
   const [value, onChange] = useState(new Date());
   const [addPlan, setAddPlan] = useState(false);
   return (
      <React.Fragment>
         <div className="row">
            <div className="col-xl-3 col-xxl-4">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card flex-xl-column flex-sm-row flex-column">
                        <div className="card-body border-bottom pb-4 p-2 event-calender col-md-6 col-lg-6 col-lg-12">
                           <Calendar onChange={onChange} value={value} />
                        </div>
                        <div className="card-body col-md-6 col-lg-6 col-lg-12">
                           <h6 className="fs-16 text-black mb-4">
                              Next week plan
                           </h6>
                           <div className="d-flex mb-4 align-items-center">
                              <span className="date-icon mr-3">3</span>
                              <div>
                                 <h6 className="fs-16">
                                    <Link to="/workout-statistic" className="text-black">
                                       Cardio Exercise
                                    </Link>
                                 </h6>
                                 <span>12 Sets | 16mins</span>
                              </div>
                           </div>
                           <div className="d-flex mb-4 align-items-center">
                              <span className="date-icon mr-3">5</span>
                              <div>
                                 <h6 className="fs-16">
                                    <Link to="/workout-statistic" className="text-black">
                                       Cycling Routine
                                    </Link>
                                 </h6>
                                 <span>20Km target distances</span>
                              </div>
                           </div>
                           <div className="d-flex mb-4 align-items-center">
                              <span className="date-icon mr-3">16</span>
                              <div>
                                 <h6 className="fs-16">
                                    <Link to="/workout-statistic" className="text-black">
                                       Cycling Routine
                                    </Link>
                                 </h6>
                                 <span>20Km target distances</span>
                              </div>
                           </div>
                           <Button
                              as="a"
                              variant="outline-primary"
                              data-toggle="modal"
                              data-target="#addNewPlan"
                              className=" rounded"
                              onClick={() => setAddPlan(true)}
                           >
                              Add New Plan
                           </Button>
                           {/* Modal */}
                           <Modal show={addPlan} className="fade">
                              <div className="modal-content">
                                 <Modal.Header>
                                    <Modal.Title>Add New Plan</Modal.Title>
                                    <Button
                                       variant=""
                                       onClick={() => setAddPlan(false)}
                                       className="close"
                                    >
                                       <span>×</span>
                                    </Button>
                                 </Modal.Header>
                                 <Modal.Body>
                                    <form
                                       onSubmit={(e) => {
                                          e.preventDefault();
                                          setAddPlan(false);
                                       }}
                                    >
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
               </div>
            </div>
            <div className="col-xl-9 col-xxl-8">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card plan-list">
                        <div className="card-header d-sm-flex d-block pb-0 border-0">
                           <div className="mr-auto pr-3">
                              <h4 className="text-black fs-20">Plan List</h4>
                              <p className="fs-13 mb-0 text-black">
                                 Lorem ipsum dolor sit amet, consectetur
                              </p>
                           </div>
                           <Link
                              to="/workout-statistic"
                              className="btn rounded text-black border border-light mr-4"
                           >
                              <svg
                                 className="mr-2"
                                 width={25}
                                 height={24}
                                 viewBox="0 0 25 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M3.31615 6H14.4744C14.4744 6.53043 14.6882 7.03914 15.0686 7.41421C15.4491 7.78929 15.9651 8 16.5032 8H18.532C19.07 8 19.5861 7.78929 19.9665 7.41421C20.347 7.03914 20.5607 6.53043 20.5607 6H21.5751C21.8442 6 22.1022 5.89464 22.2924 5.70711C22.4827 5.51957 22.5895 5.26522 22.5895 5C22.5895 4.73478 22.4827 4.48043 22.2924 4.29289C22.1022 4.10536 21.8442 4 21.5751 4H20.5607C20.5607 3.46957 20.347 2.96086 19.9665 2.58579C19.5861 2.21071 19.07 2 18.532 2H16.5032C15.9651 2 15.4491 2.21071 15.0686 2.58579C14.6882 2.96086 14.4744 3.46957 14.4744 4H3.31615C3.04711 4 2.7891 4.10536 2.59887 4.29289C2.40863 4.48043 2.30176 4.73478 2.30176 5C2.30176 5.26522 2.40863 5.51957 2.59887 5.70711C2.7891 5.89464 3.04711 6 3.31615 6ZM16.5032 4H18.532V5V6H16.5032V4ZM21.5751 11H12.4456C12.4456 10.4696 12.2319 9.96086 11.8514 9.58579C11.471 9.21071 10.9549 9 10.4169 9H8.38809C7.85002 9 7.334 9.21071 6.95353 9.58579C6.57306 9.96086 6.35931 10.4696 6.35931 11H3.31615C3.04711 11 2.7891 11.1054 2.59887 11.2929C2.40863 11.4804 2.30176 11.7348 2.30176 12C2.30176 12.2652 2.40863 12.5196 2.59887 12.7071C2.7891 12.8946 3.04711 13 3.31615 13H6.35931C6.35931 13.5304 6.57306 14.0391 6.95353 14.4142C7.334 14.7893 7.85002 15 8.38809 15H10.4169C10.9549 15 11.471 14.7893 11.8514 14.4142C12.2319 14.0391 12.4456 13.5304 12.4456 13H21.5751C21.8442 13 22.1022 12.8946 22.2924 12.7071C22.4827 12.5196 22.5895 12.2652 22.5895 12C22.5895 11.7348 22.4827 11.4804 22.2924 11.2929C22.1022 11.1054 21.8442 11 21.5751 11ZM8.38809 13V11H10.4169V12V13H8.38809ZM21.5751 18H18.532C18.532 17.4696 18.3182 16.9609 17.9378 16.5858C17.5573 16.2107 17.0413 16 16.5032 16H14.4744C13.9364 16 13.4203 16.2107 13.0399 16.5858C12.6594 16.9609 12.4456 17.4696 12.4456 18H3.31615C3.04711 18 2.7891 18.1054 2.59887 18.2929C2.40863 18.4804 2.30176 18.7348 2.30176 19C2.30176 19.2652 2.40863 19.5196 2.59887 19.7071C2.7891 19.8946 3.04711 20 3.31615 20H12.4456C12.4456 20.5304 12.6594 21.0391 13.0399 21.4142C13.4203 21.7893 13.9364 22 14.4744 22H16.5032C17.0413 22 17.5573 21.7893 17.9378 21.4142C18.3182 21.0391 18.532 20.5304 18.532 20H21.5751C21.8442 20 22.1022 19.8946 22.2924 19.7071C22.4827 19.5196 22.5895 19.2652 22.5895 19C22.5895 18.7348 22.4827 18.4804 22.2924 18.2929C22.1022 18.1054 21.8442 18 21.5751 18ZM14.4744 20V18H16.5032V19V20H14.4744Z"
                                    fill="black"
                                 />
                              </svg>
                              Filter
                           </Link>
                           <Dropdown className="mt-sm-0 mt-3">
                              <Dropdown.Toggle
                                 variant=""
                                 as="button"
                                 className="btn rounded border text-black border-light dropdown-toggle"
                              >
                                 Unfinished
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu-right">
                                 <Dropdown.Item>Link 1</Dropdown.Item>
                                 <Dropdown.Item>Link 2</Dropdown.Item>
                                 <Dropdown.Item>Link 3</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="card-body">
                           <div className="d-flex px-3 pt-3 list-row flex-wrap align-items-center mb-2">
                              <div className="list-icon mr-3 mb-3">
                                 <p className="fs-24 text-primary mb-0 mt-2">
                                    3
                                 </p>
                                 <span className="fs-14 text-primary">Sun</span>
                              </div>
                              <div className="info mb-3">
                                 <h4 className="fs-20 ">
                                    <Link to="/workout-statistic" className="text-black">
                                       Routine Cardio Burn Workout
                                    </Link>
                                 </h4>
                                 <span className="text-danger font-w600">
                                    UNFINISHED
                                 </span>
                              </div>
                              <div className="d-flex mb-3 mr-auto pl-3 pr-3 align-items-center">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip1)">
                                       <path
                                          d="M10.8586 5.22605L5.87121 10.5543C5.50758 11.0846 5.64394 11.8069 6.17172 12.1679L11.1945 15.6099L11.1945 18.9559C11.1945 19.5922 11.6995 20.1251 12.3359 20.1377C12.9874 20.1477 13.5177 19.625 13.5177 18.9761L13.5177 15.0013C13.5177 14.6175 13.3283 14.2589 13.0126 14.0443L9.79041 11.8347L12.5025 8.95843L13.8914 12.1226C14.0758 12.5443 14.4949 12.817 14.9546 12.817L19.1844 12.817C19.8207 12.817 20.3536 12.312 20.3662 11.6756C20.3763 11.0241 19.8536 10.4938 19.2046 10.4938L15.7172 10.4938C15.2576 9.4483 14.7677 8.41295 14.3409 7.35234C14.1237 6.81699 14.0025 6.58466 13.6036 6.21598C13.5227 6.14022 12.9596 5.62507 12.4571 5.16547C11.995 4.74625 11.2828 4.77403 10.8586 5.22605Z"
                                          fill="#1EA7C5"
                                       />
                                       <path
                                          d="M15.6162 5.80688C17.0861 5.80688 18.2778 4.61523 18.2778 3.14526C18.2778 1.67529 17.0861 0.483643 15.6162 0.483643C14.1462 0.483643 12.9545 1.67529 12.9545 3.14526C12.9545 4.61523 14.1462 5.80688 15.6162 5.80688Z"
                                          fill="#1EA7C5"
                                       />
                                       <path
                                          d="M4.89899 23.5165C7.60463 23.5165 9.79798 21.3231 9.79798 18.6175C9.79798 15.9118 7.60463 13.7185 4.89899 13.7185C2.19335 13.7185 -1.81927e-07 15.9118 -2.13831e-07 18.6175C-2.45735e-07 21.3231 2.19335 23.5165 4.89899 23.5165Z"
                                          fill="#1EA7C5"
                                       />
                                       <path
                                          d="M19.101 23.5165C21.8066 23.5165 24 21.3231 24 18.6175C24 15.9118 21.8066 13.7185 19.101 13.7185C16.3954 13.7185 14.202 15.9118 14.202 18.6175C14.202 21.3231 16.3954 23.5165 19.101 23.5165Z"
                                          fill="#1EA7C5"
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
                                 <span className="text-info ml-2">Cycling</span>
                              </div>
                              <Link
                                 to="/workout-plan"
                                 className="btn mb-3 btn-outline-primary rounded mr-3"
                              >
                                 <i className="las la-caret-right scale-2 mr-3" />
                                 Start Workout
                              </Link>
                              <Dropdown className="dropdown mb-3">
                                 <Dropdown.Toggle
                                    as="button"
                                    variant=""
                                    className="btn rounded border-light icon-false"
                                 >
                                    <svg
                                       width={6}
                                       height={26}
                                       viewBox="0 0 6 26"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z"
                                          fill="#585858"
                                       />
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                           <div className="d-flex px-3 pt-3 list-row flex-wrap align-items-center mb-2">
                              <div className="list-icon mr-3 mb-3">
                                 <p className="fs-24 text-primary mb-0 mt-2">
                                    4
                                 </p>
                                 <span className="fs-14 text-primary">Mon</span>
                              </div>
                              <div className="info mb-3">
                                 <h4 className="fs-20">
                                    <Link to="/workout-statistic" className="text-black">
                                       Weekly Routine Running
                                    </Link>
                                 </h4>
                                 <span className="text-danger font-w600">
                                    UNFINISHED
                                 </span>
                              </div>
                              <div className="d-flex mr-auto mb-3 pl-3 pr-3 align-items-center">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip2)">
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
                                       <clipPath id="clip2">
                                          <rect
                                             width={24}
                                             height={24}
                                             fill="white"
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                                 <span className="text-warning ml-2">
                                    Running
                                 </span>
                              </div>
                              <Link
                                 to="/workout-plan"
                                 className="btn btn-outline-primary rounded mr-3 mb-3"
                              >
                                 <i className="las la-caret-right scale-2 mr-3" />
                                 Start Workout
                              </Link>
                              <Dropdown className="dropdown mb-3">
                                 <Dropdown.Toggle
                                    as="button"
                                    variant=""
                                    className="btn rounded border-light icon-false"
                                 >
                                    <svg
                                       width={6}
                                       height={26}
                                       viewBox="0 0 6 26"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z"
                                          fill="#585858"
                                       />
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                           <div className="d-flex px-3 pt-3 list-row flex-wrap align-items-center mb-2">
                              <div className="list-icon mr-3 mb-3">
                                 <p className="fs-24 text-primary mb-0 mt-2">
                                    5
                                 </p>
                                 <span className="fs-14 text-primary">Tue</span>
                              </div>
                              <div className="info mb-3">
                                 <h4 className="fs-20 ">
                                    <Link to="/workout-statistic" className="text-black">
                                       Total Body Yoga Workout
                                    </Link>{" "}
                                 </h4>
                                 <span className="text-warning font-w600">
                                    On Progress
                                 </span>
                              </div>
                              <div className="d-flex mr-auto pl-3 mb-3 pr-3 align-items-center">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip3)">
                                       <path
                                          d="M12 5.9999C13.6568 5.9999 14.9999 4.65677 14.9999 2.99995C14.9999 1.34312 13.6568 1.61033e-07 12 1.41496e-07C10.3431 1.21959e-07 9.00001 1.34312 9.00001 2.99995C9.00001 4.65677 10.3431 5.9999 12 5.9999Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M17.8307 21.8297L14.1363 23.2153L15.9735 23.9042C16.7642 24.1978 17.6173 23.791 17.9048 23.0261C18.0579 22.618 18.0126 22.1905 17.8307 21.8297Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M5.02699 16.5949C4.25285 16.3078 3.38711 16.6974 3.09565 17.473C2.80488 18.2486 3.19821 19.1128 3.97375 19.4043L5.59202 20.0111L9.86434 18.4088L5.02699 16.5949Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M20.9047 17.473C20.6132 16.6974 19.7475 16.3078 18.9734 16.5949L6.97366 21.0948C6.19803 21.3863 5.80475 22.2505 6.09551 23.0262C6.38299 23.7908 7.23593 24.198 8.02685 23.9043L20.0266 19.4044C20.8023 19.1129 21.1956 18.2487 20.9047 17.473Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M22.5 11.9998L18.9273 11.9998L16.3419 6.82899C16.0732 6.29213 15.5267 5.98627 14.9634 5.99991L12 5.9999L9.03685 5.99991C8.47364 5.98627 7.92779 6.29217 7.65849 6.82899L5.0731 11.9998L1.50044 11.9998C0.672112 11.9998 0.000488132 12.6714 0.000488122 13.4997C0.000488112 14.328 0.672112 14.9997 1.50044 14.9997L6.00034 14.9997C6.56869 14.9997 7.08797 14.6789 7.34208 14.1706L9.00024 10.8543L9.00024 16.483L12.0001 17.6079L15.0001 16.4827L15.0001 10.8543L16.6583 14.1706C16.9124 14.6789 17.4317 14.9997 18 14.9997L22.4999 14.9997C23.3283 14.9997 23.9999 14.328 23.9999 13.4997C23.9999 12.6714 23.3283 11.9998 22.5 11.9998Z"
                                          fill="#C046D3"
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
                                 <span className="text-secondary ml-2">
                                    Yoga
                                 </span>
                              </div>
                              <Link
                                 to="/workout-plan"
                                 className="mb-3 btn btn-primary rounded mr-3"
                              >
                                 <i className="las la-stop scale-2 mr-3" />
                                 Set Finish
                              </Link>
                              <Dropdown className="dropdown mb-3">
                                 <Dropdown.Toggle
                                    as="button"
                                    variant=""
                                    className="btn rounded border-light icon-false"
                                 >
                                    <svg
                                       width={6}
                                       height={26}
                                       viewBox="0 0 6 26"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z"
                                          fill="#585858"
                                       />
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                           <div className="d-flex px-3 pt-3 list-row flex-wrap align-items-center mb-2">
                              <div className="list-icon mr-3 mb-3">
                                 <p className="fs-24 text-black mb-0 mt-2">
                                    28
                                 </p>
                                 <span className="fs-14 text-black">Fri</span>
                              </div>
                              <div className="info mb-3">
                                 <h4 className="fs-20 ">
                                    <Link to="/workout-statistic" className="text-black">
                                       Weekly Routine Cycling
                                    </Link>
                                 </h4>
                                 <span className="text-primary font-w600">
                                    FINISHED
                                 </span>
                                 <span className="pl-3 pr-3">34Km</span>
                                 <span>00:23:45”</span>
                              </div>
                              <div className="d-flex mb-3 mr-auto pl-3 pr-3 align-items-center">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip4)">
                                       <path
                                          d="M10.8586 5.22605L5.87121 10.5543C5.50758 11.0846 5.64394 11.8069 6.17172 12.1679L11.1945 15.6099L11.1945 18.9559C11.1945 19.5922 11.6995 20.1251 12.3359 20.1377C12.9874 20.1477 13.5177 19.625 13.5177 18.9761L13.5177 15.0013C13.5177 14.6175 13.3283 14.2589 13.0126 14.0443L9.79041 11.8347L12.5025 8.95843L13.8914 12.1226C14.0758 12.5443 14.4949 12.817 14.9546 12.817L19.1844 12.817C19.8207 12.817 20.3536 12.312 20.3662 11.6756C20.3763 11.0241 19.8536 10.4938 19.2046 10.4938L15.7172 10.4938C15.2576 9.4483 14.7677 8.41295 14.3409 7.35234C14.1237 6.81699 14.0025 6.58466 13.6036 6.21598C13.5227 6.14022 12.9596 5.62507 12.4571 5.16547C11.995 4.74625 11.2828 4.77403 10.8586 5.22605Z"
                                          fill="#1EA7C5"
                                       />
                                       <path
                                          d="M15.6162 5.80688C17.0861 5.80688 18.2778 4.61523 18.2778 3.14526C18.2778 1.67529 17.0861 0.483643 15.6162 0.483643C14.1462 0.483643 12.9545 1.67529 12.9545 3.14526C12.9545 4.61523 14.1462 5.80688 15.6162 5.80688Z"
                                          fill="#1EA7C5"
                                       />
                                       <path
                                          d="M4.89899 23.5165C7.60463 23.5165 9.79798 21.3231 9.79798 18.6175C9.79798 15.9118 7.60463 13.7185 4.89899 13.7185C2.19335 13.7185 -1.81927e-07 15.9118 -2.13831e-07 18.6175C-2.45735e-07 21.3231 2.19335 23.5165 4.89899 23.5165Z"
                                          fill="#1EA7C5"
                                       />
                                       <path
                                          d="M19.101 23.5165C21.8066 23.5165 24 21.3231 24 18.6175C24 15.9118 21.8066 13.7185 19.101 13.7185C16.3954 13.7185 14.202 15.9118 14.202 18.6175C14.202 21.3231 16.3954 23.5165 19.101 23.5165Z"
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
                                 <span className="text-info ml-2">Cycling</span>
                              </div>
                              <Dropdown className="dropdown mb-3">
                                 <Dropdown.Toggle
                                    as="button"
                                    variant=""
                                    className="btn rounded border-light icon-false"
                                 >
                                    <svg
                                       width={6}
                                       height={26}
                                       viewBox="0 0 6 26"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z"
                                          fill="#585858"
                                       />
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                           <div className="d-flex px-3 pt-3 list-row flex-wrap align-items-center mb-2">
                              <div className="list-icon mr-3 mb-3">
                                 <p className="fs-24 text-black mb-0 mt-2">
                                    21
                                 </p>
                                 <span className="fs-14 text-black">Tue</span>
                              </div>
                              <div className="info mb-3">
                                 <h4 className="fs-20 ">
                                    <Link to="/workout-statistic" className="text-black">
                                       2020 Runner Event Workout
                                    </Link>
                                 </h4>
                                 <span className="text-primary font-w600">
                                    FINISHED
                                 </span>
                                 <span className="pl-3 pr-3">34Km</span>
                                 <span>00:23:45”</span>
                              </div>
                              <div className="d-flex mb-3 mr-auto pl-3 pr-3 align-items-center">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip5)">
                                       <path
                                          d="M12 5.9999C13.6568 5.9999 14.9999 4.65677 14.9999 2.99995C14.9999 1.34312 13.6568 1.61033e-07 12 1.41496e-07C10.3431 1.21959e-07 9.00001 1.34312 9.00001 2.99995C9.00001 4.65677 10.3431 5.9999 12 5.9999Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M17.8307 21.8297L14.1363 23.2153L15.9735 23.9042C16.7642 24.1978 17.6173 23.791 17.9048 23.0261C18.0579 22.618 18.0126 22.1905 17.8307 21.8297Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M5.02699 16.5949C4.25285 16.3078 3.38711 16.6974 3.09565 17.473C2.80488 18.2486 3.19821 19.1128 3.97375 19.4043L5.59202 20.0111L9.86434 18.4088L5.02699 16.5949Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M20.9047 17.473C20.6132 16.6974 19.7475 16.3078 18.9734 16.5949L6.97366 21.0948C6.19803 21.3863 5.80475 22.2505 6.09551 23.0262C6.38299 23.7908 7.23593 24.198 8.02685 23.9043L20.0266 19.4044C20.8023 19.1129 21.1956 18.2487 20.9047 17.473Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M22.5 11.9998L18.9273 11.9998L16.3419 6.82899C16.0732 6.29213 15.5267 5.98627 14.9634 5.99991L12 5.9999L9.03685 5.99991C8.47364 5.98627 7.92779 6.29217 7.65849 6.82899L5.0731 11.9998L1.50044 11.9998C0.672112 11.9998 0.000488132 12.6714 0.000488122 13.4997C0.000488112 14.328 0.672112 14.9997 1.50044 14.9997L6.00034 14.9997C6.56869 14.9997 7.08797 14.6789 7.34208 14.1706L9.00024 10.8543L9.00024 16.483L12.0001 17.6079L15.0001 16.4827L15.0001 10.8543L16.6583 14.1706C16.9124 14.6789 17.4317 14.9997 18 14.9997L22.4999 14.9997C23.3283 14.9997 23.9999 14.328 23.9999 13.4997C23.9999 12.6714 23.3283 11.9998 22.5 11.9998Z"
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
                                 <span className="text-secondary ml-2">
                                    Yoga
                                 </span>
                              </div>
                              <Dropdown className="dropdown mb-3">
                                 <Dropdown.Toggle
                                    as="button"
                                    variant=""
                                    className="btn rounded border-light icon-false"
                                 >
                                    <svg
                                       width={6}
                                       height={26}
                                       viewBox="0 0 6 26"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z"
                                          fill="#585858"
                                       />
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                           <div className="d-flex px-3 pt-3 list-row flex-wrap align-items-center mb-2">
                              <div className="list-icon mr-3 mb-3">
                                 <p className="fs-24 text-black mb-0 mt-2">
                                    18
                                 </p>
                                 <span className="fs-14 text-black">Sat</span>
                              </div>
                              <div className="info mb-3">
                                 <h4 className="fs-20 ">
                                    <Link to="/workout-statistic" className="text-black">
                                       Daily Running Workout
                                    </Link>
                                 </h4>
                                 <span className="text-primary font-w600">
                                    FINISHED
                                 </span>
                                 <span className="pl-3 pr-3">34Km</span>
                                 <span>00:23:45”</span>
                              </div>
                              <div className="d-flex mb-3 mr-auto pl-3 pr-3 align-items-center">
                                 <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip6)">
                                       <path
                                          d="M12 5.9999C13.6568 5.9999 14.9999 4.65677 14.9999 2.99995C14.9999 1.34312 13.6568 1.61033e-07 12 1.41496e-07C10.3431 1.21959e-07 9.00001 1.34312 9.00001 2.99995C9.00001 4.65677 10.3431 5.9999 12 5.9999Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M17.8307 21.8297L14.1363 23.2153L15.9735 23.9042C16.7642 24.1978 17.6173 23.791 17.9048 23.0261C18.0579 22.618 18.0126 22.1905 17.8307 21.8297Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M5.02699 16.5949C4.25285 16.3078 3.38711 16.6974 3.09565 17.473C2.80488 18.2486 3.19821 19.1128 3.97375 19.4043L5.59202 20.0111L9.86434 18.4088L5.02699 16.5949Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M20.9047 17.473C20.6132 16.6974 19.7475 16.3078 18.9734 16.5949L6.97366 21.0948C6.19803 21.3863 5.80475 22.2505 6.09551 23.0262C6.38299 23.7908 7.23593 24.198 8.02685 23.9043L20.0266 19.4044C20.8023 19.1129 21.1956 18.2487 20.9047 17.473Z"
                                          fill="#C046D3"
                                       />
                                       <path
                                          d="M22.5 11.9998L18.9273 11.9998L16.3419 6.82899C16.0732 6.29213 15.5267 5.98627 14.9634 5.99991L12 5.9999L9.03685 5.99991C8.47364 5.98627 7.92779 6.29217 7.65849 6.82899L5.0731 11.9998L1.50044 11.9998C0.672112 11.9998 0.000488132 12.6714 0.000488122 13.4997C0.000488112 14.328 0.672112 14.9997 1.50044 14.9997L6.00034 14.9997C6.56869 14.9997 7.08797 14.6789 7.34208 14.1706L9.00024 10.8543L9.00024 16.483L12.0001 17.6079L15.0001 16.4827L15.0001 10.8543L16.6583 14.1706C16.9124 14.6789 17.4317 14.9997 18 14.9997L22.4999 14.9997C23.3283 14.9997 23.9999 14.328 23.9999 13.4997C23.9999 12.6714 23.3283 11.9998 22.5 11.9998Z"
                                          fill="#C046D3"
                                       />
                                    </g>
                                    <defs>
                                       <clipPath id="clip6">
                                          <rect
                                             width={24}
                                             height={24}
                                             fill="white"
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                                 <span className="text-secondary ml-2">
                                    Yoga
                                 </span>
                              </div>
                              <Dropdown className="dropdown mb-3">
                                 <Dropdown.Toggle
                                    as="button"
                                    variant=""
                                    className="btn rounded border-light icon-false"
                                 >
                                    <svg
                                       width={6}
                                       height={26}
                                       viewBox="0 0 6 26"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 13C6 14.6569 4.65685 16 3 16C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10C4.65685 10 6 11.3431 6 13Z"
                                          fill="#585858"
                                       />
                                       <path
                                          d="M6 23C6 24.6569 4.65685 26 3 26C1.34315 26 0 24.6569 0 23C0 21.3431 1.34315 20 3 20C4.65685 20 6 21.3431 6 23Z"
                                          fill="#585858"
                                       />
                                    </svg>
                                 </Dropdown.Toggle>
                                 <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default WorkoutPlan;
