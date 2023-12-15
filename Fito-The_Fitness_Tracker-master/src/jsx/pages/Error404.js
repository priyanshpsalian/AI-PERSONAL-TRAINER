import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
   return (
      <div className="row justify-content-center align-items-center error-page-area">
         <div className="col-lg-5 col-md-9">
            <div className="form-input-content text-center error-page">
               <h1 className="error-text font-weight-bold">404</h1>
               <h4>
                  <i className="fa fa-exclamation-triangle text-warning" /> The
                  page you were looking for is not found!
               </h4>
               <p>
                  You may have mistyped the address or the page may have moved.
               </p>
               <div>
                  <Link className="btn btn-primary" to="/">
                     Back to Home
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Error404;
