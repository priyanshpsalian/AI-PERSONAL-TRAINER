import React from "react";
import { Link } from "react-router-dom";

const StepFour = () => {
   return (
      <section>
         <div className="row emial-setup">
            <div className="col-lg-3 col-sm-6 col-6">
               <div className="form-group">
                  <label
                     htmlFor="mailclient11"
                     className="mailclinet mailclinet-gmail"
                  >
                     <input
                        type="radio"
                        className="redio-false"
                        name="emailclient"
                        id="mailclient11"
                     />
                     <span className="mail-icon">
                        <i
                           className="mdi mdi-google-plus"
                           aria-hidden="true"
                        ></i>
                     </span>
                     <span className="mail-text">I'm using Gmail</span>
                  </label>
               </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
               <div className="form-group">
                  <label
                     htmlFor="mailclient12"
                     className="mailclinet mailclinet-office"
                  >
                     <input
                        type="radio"
                        className="redio-false"
                        name="emailclient"
                        id="mailclient12"
                     />
                     <span className="mail-icon">
                        <i className="mdi mdi-office" aria-hidden="true"></i>
                     </span>
                     <span className="mail-text">I'm using Office</span>
                  </label>
               </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
               <div className="form-group">
                  <label
                     htmlFor="mailclient13"
                     className="mailclinet mailclinet-drive"
                  >
                     <input
                        type="radio"
                        className="redio-false"
                        name="emailclient"
                        id="mailclient13"
                     />
                     <span className="mail-icon">
                        <i
                           className="mdi mdi-google-drive"
                           aria-hidden="true"
                        ></i>
                     </span>
                     <span className="mail-text">I'm using Drive</span>
                  </label>
               </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-6">
               <div className="form-group">
                  <label
                     htmlFor="mailclient14"
                     className="mailclinet mailclinet-another"
                  >
                     <input
                        type="radio"
                        className="redio-false"
                        name="emailclient"
                        id="mailclient14"
                     />
                     <span className="mail-icon">
                        <i
                           className="fa fa-question-circle-o"
                           aria-hidden="true"
                        ></i>
                     </span>
                     <span className="mail-text">Another Service</span>
                  </label>
               </div>
            </div>
         </div>

         <div className="row">
            <div className="col-12">
               <div className="skip-email text-center pt-5 pb-2">
                  <p>Or if want skip this step entirely and setup it later</p>
                  <Link to="#" className="wizard-four-color">
                     Skip step
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default StepFour;
