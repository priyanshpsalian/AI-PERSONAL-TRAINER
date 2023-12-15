import React from "react";
import { Link } from "react-router-dom";

const Error400 = () => {
   return (
      <div className="row justify-content-center align-items-center error-page-area">
         <div className="col-lg-5 col-md-9">
            <div className="form-input-content text-center error-page">
               <h1 className="error-text font-weight-bold">400</h1>
               <h4>
                  <i className="fa fa-thumbs-down text-danger" /> Bad Request
               </h4>
               <p>Your Request resulted in an error</p>
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

export default Error400;
