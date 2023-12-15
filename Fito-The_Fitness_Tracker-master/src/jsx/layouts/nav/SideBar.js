import React, { Component } from "react";

/// Link
import { Link } from "react-router-dom";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Menu
import MetisMenu from "metismenujs";

///
import drump from "../../../images/card/drump.png";

class MM extends Component {
   componentDidMount() {
      this.$el = this.el;
      this.mm = new MetisMenu(this.$el);
   }
   componentWillUnmount() {
      this.mm("dispose");
   }
   render() {
      return (
         <div className="mm-wrapper">
            <ul className="metismenu" ref={(el) => (this.el = el)}>
               {this.props.children}
            </ul>
         </div>
      );
   }
}

class SideBar extends Component {
   /// Open menu
   componentDidMount() {
      // sidebar open/close
      var btn = document.querySelector(".nav-control");
      var aaa = document.querySelector("#main-wrapper");

      function toggleFunc() {
         return aaa.classList.toggle("menu-toggle");
      }

      btn.addEventListener("click", toggleFunc);
   }
   render() {
      /// Path
      const path = window.location.pathname;

      /// Active menu
      let deshBoard = [
         "",
         "workout-plan",
         "diet-food-menu",
         "personal-record",
      ],
         app = [
            "app-profile",
            "app-calender",
            "email-compose",
            "email-inbox",
            "email-read",
            "ecom-product-grid",
            "ecom-product-list",
            "ecom-product-list",
            "ecom-product-order",
            "ecom-checkout",
            "ecom-invoice",
            "ecom-customers",
         ],
         charts = [
            "chart-flot",
            "chart-morris",
            "chart-chartjs",
            "chart-chartist",
            "chart-sparkline",
            "chart-peity",
         ],
         bootstrap = [
            "ui-accordion",
            "ui-badge",
            "ui-alert",
            "ui-button",
            "ui-modal",
            "ui-button-group",
            "ui-list-group",
            "ui-media-object",
            "ui-card",
            "ui-carousel",
            "ui-dropdown",
            "ui-popover",
            "ui-progressbar",
            "ui-tab",
            "ui-typography",
            "ui-pagination",
            "ui-grid",
         ],
         plugins = [
            "uc-select2",
            "uc-nestable",
            "uc-sweetalert",
            "uc-toastr",
            "uc-jqvmap",
            "uc-noui-slider",
         ],
         widget = ["widget"],
         forms = [
            "form-element",
            "form-wizard",
            "form-editor-summernote",
            "form-pickers",
            "form-validation-jquery",
         ],
         table = ["table-bootstrap-basic", "table-datatable-basic"];

         console.log(path.slice(1));

      return (
         <div className="deznav">
            <PerfectScrollbar className="deznav-scroll">
               <MM className="metismenu" id="menu">
                  {/* <li
                     className={`${deshBoard.includes(path.slice(1)) ? "mm-active" : ""
                        }`}
                  >
                     <Link
                        className="has-arrow ai-icon"
                        to="#"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-networking"></i>
                        <span className="nav-text">Dashboard</span>
                     </Link>
                     <ul aria-expanded="false">
                        <li>
                           <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                           <Link to="/workout-statistic">
                              Workout Statistic
                           </Link>
                        </li>
                        <li>
                           <Link to="/workout-plan">Workout Plan</Link>
                        </li>
                        <li>
                           <Link to="/distance-map">Distance Map</Link>
                        </li>
                        <li>
                           <Link to="/diet-food-menu">DIet Food Menu</Link>
                        </li>
                        <li>
                           <Link to="/personal-record">Personal Record</Link>
                        </li>
                     </ul>
                  </li> */}


                  <li
                     className= {`${ (path.slice(1) === "react/" ) ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-networking"></i>
                        <span className="nav-text">Dashboard</span>
                     </Link>
                  </li>

                  <li
                     className= {`${ (path.slice(1) === "react/workout-plan" ) ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/workout-plan"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-calendar-1"></i>
                        <span className="nav-text">Routines</span>
                     </Link>
                  </li>

                  <li
                     className= {`${ (path.slice(1) === "react/workout-statistic" ) ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/workout-statistic"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-heart"></i>
                        <span className="nav-text">Workout Statistics</span>
                     </Link>
                  </li>

                  <li
                     className= {`${(path.slice(1) === "react/countdown") ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/countdown/103/10/0/Squat"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-stopwatch"></i>
                        <span className="nav-text">Start Tracking</span>
                     </Link>
                  </li>

                  <li
                     className= {`${ (path.slice(1) === "react/diet-food-menu" ) ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/diet-food-menu"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-target"></i>
                        <span className="nav-text">Diet Plan</span>
                     </Link>
                  </li>

                  <li
                     className= {`${(path.slice(1) === "react/personal-record") ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/personal-record"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-calendar-2"></i>
                        <span className="nav-text">Training history</span>
                     </Link>
                  </li>

                  <li
                     className= {`${(path.slice(1) === "react/app-calender") ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/app-calender"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-calendar-1"></i>
                        <span className="nav-text">Calendar</span>
                     </Link>
                  </li>

                  <li
                     className= {`${(path.slice(1) === "react/ecom-product-list") ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/ecom-product-list"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-funnel"></i>
                        <span className="nav-text">Exrecises</span>
                     </Link>
                  </li>

                  <li
                     className= {`${(path.slice(1) === "react/app-profile") ? "mm-active" : ""
                        }` }
                  >
                     <Link
                        className="ai-icon"
                        to="/app-profile"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-user-7"></i>
                        <span className="nav-text">Profile</span>
                     </Link>
                  </li>


                  {/* <li
                     className={`${widget.includes(path.slice(1)) ? "mm-active" : ""
                        }`}
                  >
                     <Link
                        className="ai-icon"
                        to="distance-map"
                        aria-expanded="false"
                     >
                        <i className="flaticon-381-settings-2"></i>
                        <span className="nav-text">Widget</span>
                     </Link>
                  </li> */}


               </MM>
               <div className="drum-box mt-5">
                  <img src={drump} alt="" />
                  <p className="fs-18 font-w500 mb-4">
                     Start Plan Your Workout
                  </p>
                  <Link className to={"./personal-record"}>
                     Check schedule
                     <svg
                        className="ml-3"
                        width={6}
                        height={12}
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M0 12L6 6L0 0" fill="#BCD7FF" />
                     </svg>
                  </Link>
               </div>

            </PerfectScrollbar>
         </div>
      );
   }
}

export default SideBar;
