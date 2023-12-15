import React, { useState, Fragment } from "react";

import { RangeDatePicker, DatePicker } from "@y0c/react-datepicker";
import "../../../index.css";

import "moment/locale/ko";

///
import MetarialDate from "./MetarialDate";
import MetarialDateAndTime from "./MetarialDateAndTime";
import MetarialTime from "./MetarialTime";
import ColorPicker from "./Color";
import Gradient from "./LinearGradientPicker";

import PageTitle from "../../../layouts/PageTitle";

const Pickers = () => {
   const [colorChange, setColorChange] = useState(null);

   return (
      <Fragment>
         <PageTitle activeMenu="Pickers" motherMenu="Form" />

         <div className="row">
            <div className="col-xl-9">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Date Picker</h4>
                  </div>
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-6 mb-3">
                           <div className="example">
                              <p className="mb-1">Date Range Pick</p>
                              <RangeDatePicker
                                 startText="Start"
                                 endText="End"
                                 startPlaceholder="Start Date"
                                 endPlaceholder="End Date"
                              />
                           </div>
                        </div>
                        <div className="col-md-6 mb-3">
                           <div className="example">
                              <p className="mb-1">Date Range With Time</p>
                              <RangeDatePicker
                                 startText="Start"
                                 endText="End"
                                 startPlaceholder="Start Date"
                                 endPlaceholder="End Date"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pick-Date picker</h4>
                  </div>
                  <div className="card-body">
                     <p className="mb-1">Default picker</p>
                     <DatePicker />
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Date picker</h4>
                  </div>
                  <div className="card-body">
                     <div className="row">
                        <div className="col-xl-3 col-xxl-6 mb-3">
                           <label>Default Clock Picker</label>
                           <div className="input-group clockpicker">
                              <MetarialTime />
                              <span className="input-group-append">
                                 <span className="input-group-text">
                                    <i className="fa fa-clock-o"></i>
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className="col-xl-3 col-xxl-6 mb-3">
                           <label>Auto close Clock Picker</label>
                           <div
                              className="input-group clockpicker"
                              data-placement="bottom"
                              data-align="top"
                              data-autoclose="true"
                           >
                              <MetarialTime />
                              <span className="input-group-append">
                                 <span className="input-group-text">
                                    <i className="fa fa-clock-o"></i>
                                 </span>
                              </span>
                           </div>
                        </div>
                        <div className="col-xl-3 col-xxl-6 mb-3">
                           <label>Now time</label>
                           <div className="input-group">
                              <MetarialTime />
                           </div>
                        </div>
                        <div className="col-xl-3 col-xxl-6">
                           <label>Left Placement</label>
                           <div
                              className="input-group clockpicker"
                              data-placement="left"
                              data-align="top"
                              data-autoclose="true"
                           >
                              <MetarialTime />
                              <span className="input-group-append">
                                 <span className="input-group-text">
                                    <i className="fa fa-clock-o"></i>
                                 </span>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Material Date picker</h4>
                  </div>
                  <div className="card-body">
                     <div className="row form-material">
                        <div className="col-xl-3 col-xxl-6 col-md-6 mb-3">
                           <label>Default Material Date Picker</label>
                           <MetarialDate />
                        </div>
                        <div className="col-xl-3 col-xxl-6 col-md-6 mb-3">
                           <label>Default Material Date Timepicker</label>
                           <MetarialDateAndTime />
                        </div>
                        <div className="col-xl-3 col-xxl-6 col-md-6 mb-3">
                           <label>Time Picker</label>
                           <MetarialTime />
                        </div>
                        <div className="col-xl-3 col-xxl-6 col-md-6">
                           <label>Min Date set</label>
                           <MetarialDateAndTime />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Color Picker</h4>
                  </div>
                  <div className="card-body">
                     <div className="row">
                        <div className="col-xl-4 col-lg-6 mb-3">
                           <div className="example">
                              <p className="mb-1">Simple mode</p>
                              <input
                                 type="color"
                                 className="as_colorpicker form-control"
                                 value={colorChange}
                                 onChange={(e) =>
                                    setColorChange(e.target.value)
                                 }
                              />
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-3">
                           <div className="example">
                              <p className="mb-1">Complex mode</p>

                              <ColorPicker />
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 mb-3">
                           <div className="example">
                              <p className="mb-1">Gradiant mode</p>
                              <Gradient />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Pickers;
