import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../layouts/PageTitle";

const jQueryValidation = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Validation" motherMenu="Form" />

         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Form Validation</h4>
                  </div>
                  <div className="card-body">
                     <div className="form-validation">
                        <form
                           className="form-valide"
                           action="#"
                           method="post"
                           onSubmit={(e) => e.preventDefault()}
                        >
                           <div className="row">
                              <div className="col-xl-6">
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-username"
                                    >
                                       Username
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-username"
                                          name="val-username"
                                          placeholder="Enter a username.."
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-email"
                                    >
                                       Email{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-email"
                                          name="val-email"
                                          placeholder="Your valid email.."
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-password"
                                    >
                                       Password
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="password"
                                          className="form-control"
                                          id="val-password"
                                          name="val-password"
                                          placeholder="Choose a safe one.."
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-confirm-password"
                                    >
                                       Confirm Password{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="password"
                                          className="form-control"
                                          id="val-confirm-password"
                                          name="val-confirm-password"
                                          placeholder="..and confirm it!"
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-suggestions"
                                    >
                                       Suggestions{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <textarea
                                          className="form-control"
                                          id="val-suggestions"
                                          name="val-suggestions"
                                          rows="5"
                                          placeholder="What would you like to see?"
                                       ></textarea>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-skill"
                                    >
                                       Best Skill
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <select
                                          className="form-control"
                                          id="val-skill"
                                          name="val-skill"
                                       >
                                          <option value="">
                                             Please select
                                          </option>
                                          <option value="html">HTML</option>
                                          <option value="css">CSS</option>
                                          <option value="javascript">
                                             JavaScript
                                          </option>
                                          <option value="angular">
                                             Angular
                                          </option>
                                          <option value="angular">React</option>
                                          <option value="vuejs">Vue.js</option>
                                          <option value="ruby">Ruby</option>
                                          <option value="php">PHP</option>
                                          <option value="asp">ASP.NET</option>
                                          <option value="python">Python</option>
                                          <option value="mysql">MySQL</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-currency"
                                    >
                                       Currency
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-currency"
                                          name="val-currency"
                                          placeholder="$21.60"
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-website"
                                    >
                                       Website
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-website"
                                          name="val-website"
                                          placeholder="http://example.com"
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-phoneus"
                                    >
                                       Phone (US)
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-phoneus"
                                          name="val-phoneus"
                                          placeholder="212-999-0000"
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-digits"
                                    >
                                       Digits{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-digits"
                                          name="val-digits"
                                          placeholder="5"
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-number"
                                    >
                                       Number{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-number"
                                          name="val-number"
                                          placeholder="5.0"
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-range"
                                    >
                                       Range [1, 5]
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-range"
                                          name="val-range"
                                          placeholder="4"
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">
                                       <Link to="/orm-validation-jquery">
                                          Terms &amp; Conditions
                                       </Link>{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-8">
                                       <label
                                          className="css-control css-control-primary css-checkbox"
                                          htmlFor="val-terms"
                                       >
                                          <input
                                             type="checkbox"
                                             className="css-control-input mr-2"
                                             id="val-terms"
                                             name="val-terms"
                                             value="1"
                                          />
                                          <span className="css-control-indicator"></span>{" "}
                                          I agree to the terms
                                       </label>
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-lg-8 ml-auto">
                                       <button
                                          type="submit"
                                          className="btn btn-primary"
                                       >
                                          Submit
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Vertical Forms with icon</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form
                           className="form-valide-with-icon"
                           action="#"
                           method="post"
                           onSubmit={(e) => e.preventDefault()}
                        >
                           <div className="form-group">
                              <label className="text-label">Username</label>
                              <div className="input-group">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text">
                                       {" "}
                                       <i className="fa fa-user"></i>{" "}
                                    </span>
                                 </div>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="val-username1"
                                    name="val-username"
                                    placeholder="Enter a username.."
                                 />
                              </div>
                           </div>
                           <div className="form-group">
                              <label className="text-label">Password *</label>
                              <div className="input-group transparent-append">
                                 <div className="input-group-prepend">
                                    <span className="input-group-text">
                                       {" "}
                                       <i className="fa fa-lock"></i>{" "}
                                    </span>
                                 </div>
                                 <input
                                    type="password"
                                    className="form-control"
                                    id="val-password1"
                                    name="val-password"
                                    placeholder="Choose a safe one.."
                                 />
                                 <div className="input-group-append show-pass">
                                    <span className="input-group-text">
                                       {" "}
                                       <i className="fa fa-eye-slash"></i>
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <div className="form-group">
                              <div className="form-check">
                                 <input
                                    id="checkbox1"
                                    className="form-check-input"
                                    type="checkbox"
                                 />
                                 <label
                                    htmlFor="checkbox1"
                                    className="form-check-label"
                                 >
                                    Check me out
                                 </label>
                              </div>
                           </div>
                           <button
                              type="submit"
                              className="btn mr-2 btn-primary"
                           >
                              Submit
                           </button>
                           <button type="submit" className="btn btn-light">
                              cencel
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default jQueryValidation;
