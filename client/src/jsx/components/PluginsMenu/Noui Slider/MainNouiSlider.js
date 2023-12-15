import React, { Fragment } from "react";
import Nouislider from "nouislider-react";
// import "nouislider/distribute/nouislider.css";

import NouiColorPicker from "./NouiColor";

import PageTitle from "../../../layouts/PageTitle";
import Toggle from "./Toggle";
import SnappingTOValues from "./SnappingToValues";
import NonlinerSlider from "./Nonlinearslider";
import SlideDragable from "./SlideDragable";
import ClickAblePips from "./ClickablePips";
import Disabling from "./Disabling";

const MainNouiSlider = () => {
   return (
      <Fragment>
         <PageTitle motherMenu="Components" activeMenu="UI Slider" />
         <div className="row">
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Basic slider</h4>
                  </div>
                  <div className="card-body">
                     <div id="basic-slider">
                        <Nouislider
                           accessibility
                           start={10}
                           step={10}
                           range={{
                              min: 0,
                              max: 100,
                           }}
                           // onUpdate={this.onUpdate(index)}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Stepping and snapping to values
                     </h4>
                  </div>
                  <div className="card-body">
                     <div className="stepping-slider">
                        <div id="slider-step">
                           <SnappingTOValues />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider margin</h4>
                  </div>
                  <div className="card-body">
                     <div className="margin-slider">
                        <div id="slider-margin">
                           <NonlinerSlider />
                        </div>
                        <span
                           className="example-val"
                           id="slider-margin-value-min"
                        ></span>
                        <span
                           className="example-val"
                           id="slider-margin-value-max"
                        ></span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Slider behaviour (Drag)</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-behaviour">
                        <div id="behaviour">
                           <SlideDragable />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Slider Range (Left To Right)
                     </h4>
                  </div>
                  <div className="card-body pb-5">
                     <div className="combined">
                        <div id="combined">
                           <Nouislider
                              start={0}
                              pips={{ mode: "count", values: 5 }}
                              snap
                              clickablePips
                              range={{
                                 min: 0,
                                 "10%": 3000,
                                 "20%": 4000,
                                 "30%": 5000,
                                 "50%": 6000,
                                 "60%": 7000,
                                 "70%": 8000,
                                 "90%": 9000,
                                 max: 1000,
                              }}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">
                        Slider Range (Right To Left)
                     </h4>
                  </div>
                  <div className="card-body pb-5">
                     <div className="combined">
                        <div id="combined">
                           <ClickAblePips />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pip Positions</h4>
                  </div>
                  <div className="card-body">
                     <div className="pip-position mb-5">
                        <div id="pips-positions-stepped">
                           <ClickAblePips />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Pip position stepped</h4>
                  </div>
                  <div className="card-body">
                     <div className="pip-position mb-5">
                        <div id="pips-positions-stepped">
                           <Nouislider
                              start={0}
                              pips={{ mode: "count", values: 5 }}
                              clickablePips
                              range={{
                                 min: 0,
                                 max: 1000,
                              }}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Disabling a slider</h4>
                  </div>
                  <div className="card-body">
                     <div className="slider-disabled ">
                        <Disabling />
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Creating a toggle</h4>
                  </div>
                  <div className="card-body">
                     <div className="toggle-slider">
                        <div id="slider-toggle">
                           <Toggle />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-4">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Color picker</h4>
                  </div>
                  <div className="card-body">
                     <div className="extra-padding">
                        <NouiColorPicker />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default MainNouiSlider;
