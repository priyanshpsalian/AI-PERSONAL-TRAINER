import React, { Fragment } from "react";
// 1.639 TBW , 511,594 F

/// Components
import Markup from "./jsx";

/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";

import { withResizeDetector } from "react-resize-detector";

const App = ({ width }) => {
   const body = document.querySelector("body");

   width >= 1300
      ? body.setAttribute("data-sidebar-style", "full")
      : width <= 1299 && width >= 767
      ? body.setAttribute("data-sidebar-style", "mini")
      : body.setAttribute("data-sidebar-style", "overlay");

   return (
      <Fragment>
         <Markup />
      </Fragment>
   );
};
export default withResizeDetector(App);
