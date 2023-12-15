import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import PageTItle from "../../../layouts/PageTitle";
import { SplitButton, ButtonGroup, Dropdown } from "react-bootstrap";

const Element = () => {
   return (
      <Fragment>
         <PageTItle activeMenu="Element" motherMenu="Form" />

         <div className="row">
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Input Style</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control input-default "
                                 placeholder="input-default"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 type="text"
                                 className="form-control input-rounded"
                                 placeholder="input-rounded"
                              />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Checkbox</h4>
                  </div>
                  <div className="card-body">
                     <div className="row">
                        <div className="col-6 col-xl-4 col-lg-6 col-sm-4">
                           <div className="custom-control custom-checkbox mb-3">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox1"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox1"
                              >
                                 Checkbox 1
                              </label>
                           </div>
                        </div>
                        <div className="col-6 col-xl-4 col-lg-6 col-sm-4">
                           <div className="custom-control custom-checkbox mb-3 checkbox-info">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox2"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox2"
                              >
                                 Checkbox 2
                              </label>
                           </div>
                        </div>

                        <div className="col-6 col-xl-4 col-lg-6 col-sm-4">
                           <div className="custom-control custom-checkbox mb-3 checkbox-success">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox3"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox3"
                              >
                                 Checkbox 3
                              </label>
                           </div>
                        </div>
                        <div className="col-6 col-xl-4 col-lg-6 col-sm-4">
                           <div className="custom-control custom-checkbox mb-3 checkbox-warning">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox4"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox4"
                              >
                                 Checkbox 4
                              </label>
                           </div>
                        </div>
                        <div className="col-6 col-xl-4 col-lg-6 col-sm-4">
                           <div className="custom-control custom-checkbox mb-3 checkbox-danger">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox5"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox5"
                              >
                                 Checkbox 5
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col">
                           <div className="custom-control custom-checkbox mb-3 check-xs">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox6"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox6"
                              ></label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="custom-control custom-checkbox mb-3 checkbox-info">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox7"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox7"
                              ></label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="custom-control custom-checkbox mb-3 checkbox-success check-lg">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox8"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox8"
                              ></label>
                           </div>
                        </div>
                        <div className="col">
                           <div className="custom-control custom-checkbox mb-3 checkbox-warning check-xl">
                              <input
                                 type="checkbox"
                                 className="custom-control-input"
                                 id="customCheckBox9"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox9"
                              ></label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Textarea</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <textarea
                                 className="form-control"
                                 rows="4"
                                 id="comment"
                              ></textarea>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Input Size</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <input
                                 className="form-control form-control-lg"
                                 type="text"
                                 placeholder="form-control-lg"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 className="form-control"
                                 type="text"
                                 placeholder="Default input"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 className="form-control form-control-sm"
                                 type="text"
                                 placeholder="form-control-sm"
                              />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Select Size</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <select className="form-control form-control-lg">
                                 <option>Option 1</option>
                                 <option>Option 2</option>
                                 <option>Option 3</option>
                              </select>
                           </div>
                           <div className="form-group">
                              <select className="form-control">
                                 <option>Option 1</option>
                                 <option>Option 2</option>
                                 <option>Option 3</option>
                              </select>
                           </div>
                           <div className="form-group">
                              <select className="form-control form-control-sm">
                                 <option>Option 1</option>
                                 <option>Option 2</option>
                                 <option>Option 3</option>
                              </select>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Select List</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <label>Select list (select one):</label>
                              <select className="form-control" id="sel1">
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                              </select>
                           </div>
                           <div className="form-group">
                              <label>
                                 Mutiple select list (hold shift to select more
                                 than one):
                              </label>
                              <select
                                 multiple
                                 className="form-control"
                                 id="sel2"
                              >
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                              </select>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Horizontal Form</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-row">
                              <div className="form-group col-md-6">
                                 <label>First Name</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="1234 Main St"
                                 />
                              </div>
                              <div className="form-group col-md-6">
                                 <label>Email</label>
                                 <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                 />
                              </div>
                              <div className="form-group col-md-6">
                                 <label>Password</label>
                                 <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                 />
                              </div>
                              <div className="form-group col-md-6">
                                 <label>City</label>
                                 <input type="text" className="form-control" />
                              </div>
                           </div>
                           <div className="form-row">
                              <div className="form-group col-md-4">
                                 <label>State</label>
                                 <select
                                    id="inputState"
                                    className="form-control"
                                 >
                                    <option selected>Choose...</option>
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                 </select>
                              </div>
                              <div className="form-group col-md-2">
                                 <label>Zip</label>
                                 <input type="text" className="form-control" />
                              </div>
                           </div>
                           <div className="form-group">
                              <div className="form-check">
                                 <input
                                    className="form-check-input"
                                    type="checkbox"
                                 />
                                 <label className="form-check-label">
                                    Check me out
                                 </label>
                              </div>
                           </div>
                           <button type="submit" className="btn btn-primary">
                              Sign in
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Vertical Form</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                 Email
                              </label>
                              <div className="col-sm-9">
                                 <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                 />
                              </div>
                           </div>
                           <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                 Password
                              </label>
                              <div className="col-sm-9">
                                 <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                 />
                              </div>
                           </div>
                           <fieldset className="form-group">
                              <div className="row">
                                 <label className="col-form-label col-sm-3 pt-0">
                                    Radios
                                 </label>
                                 <div className="col-sm-9">
                                    <div className="form-check">
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          name="gridRadios"
                                          value="option1"
                                          checked
                                       />
                                       <label className="form-check-label">
                                          First radio
                                       </label>
                                    </div>
                                    <div className="form-check">
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          name="gridRadios"
                                          value="option2"
                                       />
                                       <label className="form-check-label">
                                          Second radio
                                       </label>
                                    </div>
                                    <div className="form-check disabled">
                                       <input
                                          className="form-check-input"
                                          type="radio"
                                          name="gridRadios"
                                          value="option3"
                                          disabled
                                       />
                                       <label className="form-check-label">
                                          Third disabled radio
                                       </label>
                                    </div>
                                 </div>
                              </div>
                           </fieldset>
                           <div className="form-group row">
                              <div className="col-sm-3">Checkbox</div>
                              <div className="col-sm-9">
                                 <div className="form-check">
                                    <input
                                       className="form-check-input"
                                       type="checkbox"
                                    />
                                    <label className="form-check-label">
                                       Example checkbox
                                    </label>
                                 </div>
                              </div>
                           </div>
                           <div className="form-group row">
                              <div className="col-sm-10">
                                 <button
                                    type="submit"
                                    className="btn btn-primary"
                                 >
                                    Sign in
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Checkboxes</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <div className="form-check mb-2">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="check1"
                                    value=""
                                    checked
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="check1"
                                 >
                                    Option 1
                                 </label>
                              </div>
                              <div className="form-check mb-2">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="check2"
                                    value=""
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="check2"
                                 >
                                    Option 2
                                 </label>
                              </div>
                              <div className="form-check disabled">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="check3"
                                    value=""
                                    disabled
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="check3"
                                 >
                                    Disabled
                                 </label>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Inline Checkboxes</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <div className="form-check form-check-inline">
                                 <label className="form-check-label">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       value=""
                                       checked
                                    />
                                    Option 1
                                 </label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <label className="form-check-label">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       value=""
                                    />
                                    Option 2
                                 </label>
                              </div>
                              <div className="form-check form-check-inline disabled">
                                 <label className="form-check-label">
                                    <input
                                       type="checkbox"
                                       className="form-check-input"
                                       value=""
                                       disabled
                                    />
                                    Disabled
                                 </label>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Radio Buttons</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group mb-0">
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="optradio" />{" "}
                                    Option 1
                                 </label>
                              </div>
                              <div className="radio">
                                 <label>
                                    <input type="radio" name="optradio" />{" "}
                                    Option 2
                                 </label>
                              </div>
                              <div className="radio disabled">
                                 <label>
                                    <input
                                       type="radio"
                                       name="optradio"
                                       disabled
                                    />{" "}
                                    Option 3
                                 </label>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Inline Radio </h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group mb-0">
                              <label className="radio-inline mr-3">
                                 <input type="radio" name="optradio" /> Option 1
                              </label>
                              <label className="radio-inline mr-3">
                                 <input type="radio" name="optradio" /> Option 2
                              </label>
                              <label className="radio-inline mr-3">
                                 <input type="radio" name="optradio" /> Option 3
                              </label>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Readonly</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <input
                                 className="form-control"
                                 type="text"
                                 placeholder="Readonly input here…"
                                 readonly
                              />
                           </div>
                           <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                 Email
                              </label>
                              <div className="col-sm-9">
                                 <input
                                    type="text"
                                    readonly
                                    className="form-control-plaintext"
                                    value="email@example.com"
                                 />
                              </div>
                           </div>
                           <div className="form-group row">
                              <label className="col-sm-3 col-form-label">
                                 Password
                              </label>
                              <div className="col-sm-9">
                                 <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                 />
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Inline Form</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form
                           className="form-inline"
                           onSubmit={(e) => e.preventDefault()}
                        >
                           <div className="form-group mb-2">
                              <label className="sr-only">Email</label>
                              <input
                                 type="text"
                                 readonly
                                 className="form-control-plaintext"
                                 value="email@example.com"
                              />
                           </div>
                           <div className="form-group mx-sm-3 mb-2">
                              <label className="sr-only">Password</label>
                              <input
                                 type="password"
                                 className="form-control"
                                 placeholder="Password"
                              />
                           </div>
                           <button
                              type="submit"
                              className="btn btn-primary mb-2"
                           >
                              Confirm identity
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Form grid</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="row">
                              <div className="col-sm-6">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                 />
                              </div>
                              <div className="col-sm-6 mt-2 mt-sm-0">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                 />
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Form Row</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-row">
                              <div className="col-sm-6">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                 />
                              </div>
                              <div className="col-sm-6 mt-2 mt-sm-0">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                 />
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Form Label Size</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group row">
                              <label className="col-sm-2 col-form-label col-form-label-sm">
                                 Email
                              </label>
                              <div className="col-sm-10">
                                 <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="col-form-label-sm"
                                 />
                              </div>
                           </div>
                           <div className="form-group row">
                              <label className="col-sm-2 col-form-label">
                                 Email
                              </label>
                              <div className="col-sm-10">
                                 <input
                                    type="email"
                                    className="form-control"
                                    placeholder="col-form-label"
                                 />
                              </div>
                           </div>
                           <div className="form-group row">
                              <label className="col-sm-2 col-form-label col-form-label-lg">
                                 Email
                              </label>
                              <div className="col-sm-10">
                                 <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="col-form-label-lg"
                                 />
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Column size</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-row">
                              <div className="col-sm-7">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                 />
                              </div>
                              <div className="col mt-2 mt-sm-0">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="State"
                                 />
                              </div>
                              <div className="col mt-2 mt-sm-0">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Zip"
                                 />
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Auto-sizing</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-row align-items-center">
                              <div className="col-auto">
                                 <label className="sr-only">Name</label>
                                 <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Jane Doe"
                                 />
                              </div>
                              <div className="col-auto">
                                 <label className="sr-only">Username</label>
                                 <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                       <div className="input-group-text">@</div>
                                    </div>
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Username"
                                    />
                                 </div>
                              </div>
                              <div className="col-auto">
                                 <div className="form-check mb-2">
                                    <input
                                       className="form-check-input"
                                       type="checkbox"
                                    />
                                    <label className="form-check-label">
                                       Remember me
                                    </label>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <button
                                    type="submit"
                                    className="btn btn-primary mb-2"
                                 >
                                    Submit
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Custom Select</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-row align-items-center">
                              <div className="col-auto my-1">
                                 <div className="form-group d-flex align-items-center">
                                    <label className="mr-sm-2">
                                       Preference
                                    </label>
                                    <select
                                       className="form-control form-control-lg"
                                       id="inlineFormCustomSelect"
                                    >
                                       <option selected>Choose...</option>
                                       <option value="1">One</option>
                                       <option value="2">Two</option>
                                       <option value="3">Three</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Disabled forms</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <fieldset disabled>
                              <div className="form-group">
                                 <label>Disabled input</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Disabled input"
                                 />
                              </div>
                              <div className="form-group">
                                 <label>Disabled select menu</label>
                                 <select className="form-control">
                                    <option>Disabled select</option>
                                 </select>
                              </div>
                              <div className="form-check">
                                 <input
                                    className="form-check-input"
                                    type="checkbox"
                                    disabled
                                 />
                                 <label className="form-check-label">
                                    Can't check this
                                 </label>
                              </div>
                              <button
                                 type="submit"
                                 className="btn btn-primary mt-3"
                              >
                                 Submit
                              </button>
                           </fieldset>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Input Group</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group mb-3 input-warning-o">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">@</span>
                              </div>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Username"
                              />
                           </div>
                           <div className="input-group mb-3 input-success-o">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">@</span>
                              </div>
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Username"
                              />
                           </div>
                           <div className="input-group mb-3 input-primary">
                              <input
                                 type="text"
                                 className="form-control"
                                 placeholder="Recipient's username"
                              />
                              <div className="input-group-append">
                                 <span className="input-group-text">
                                    @example.com
                                 </span>
                              </div>
                           </div>

                           <label>Your vanity URL</label>
                           <div className="input-group mb-3  input-success">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">
                                    https://example.com
                                 </span>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group mb-3  input-info">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">$</span>
                              </div>
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                 <span className="input-group-text">.00</span>
                              </div>
                           </div>

                           <div className="input-group   input-danger">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">
                                    With textarea
                                 </span>
                              </div>
                              <textarea className="form-control"></textarea>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Input Group Size</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group input-group-sm mb-3">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">Small</span>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">
                                    Default
                                 </span>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group input-group-lg">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">Large</span>
                              </div>
                              <input type="text" className="form-control" />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Checkboxes and radios</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <div className="input-group-text">
                                    <input type="checkbox" />
                                 </div>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <div className="input-group-text">
                                    <input type="radio" />
                                 </div>
                              </div>
                              <input type="text" className="form-control" />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Multiple inputs</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">
                                    First and last name
                                 </span>
                              </div>
                              <input type="text" className="form-control" />
                              <input type="text" className="form-control" />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Multiple addons</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">$</span>
                                 <span className="input-group-text">0.00</span>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group">
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                 <span className="input-group-text">$</span>
                                 <span className="input-group-text">0.00</span>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Button addons</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group mb-3">
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                              </div>
                           </div>

                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group">
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Buttons with dropdowns</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                 >
                                    Dropdown
                                 </button>
                                 <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                       Action
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                       Another action
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                       Something else here
                                    </Link>
                                    <div
                                       role="separator"
                                       className="dropdown-divider"
                                    ></div>
                                    <Link className="dropdown-item" to="#">
                                       Separated link
                                    </Link>
                                 </div>
                              </div>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group">
                              <input type="text" className="form-control" />
                              <div className="input-group-append">
                                 <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    data-toggle="dropdown"
                                 >
                                    Dropdown
                                 </button>
                                 <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">
                                       Action
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                       Another action
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                       Something else here
                                    </Link>
                                    <div
                                       role="separator"
                                       className="dropdown-divider"
                                    ></div>
                                    <Link className="dropdown-item" to="#">
                                       Separated link
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Segmented buttons</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group mb-3">
                              <SplitButton
                                 className="input-group-prepend"
                                 as={ButtonGroup}
                                 variant="primary"
                                 id="dropdown-button-drop-dwon"
                                 className="ml-1"
                                 drop="dwon"
                                 title="Action"
                              >
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Action
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Another action
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Something else here
                                 </Dropdown.Item>
                                 <div
                                    role="separator"
                                    className="dropdown-divider"
                                 ></div>
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Separated link
                                 </Dropdown.Item>
                              </SplitButton>
                              <input type="text" className="form-control" />
                           </div>

                           <div className="input-group">
                              <input type="text" className="form-control" />
                              <SplitButton
                                 className="input-group-prepend"
                                 as={ButtonGroup}
                                 variant="primary"
                                 id="dropdown-button-drop-dwon"
                                 className="ml-1"
                                 drop="dwon"
                                 title="Action"
                              >
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Action
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Another action
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Something else here
                                 </Dropdown.Item>
                                 <div
                                    role="separator"
                                    className="dropdown-divider"
                                 ></div>
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                 >
                                    Separated link
                                 </Dropdown.Item>
                              </SplitButton>{" "}
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Custom select</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form action="#">
                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <label className="input-group-text">
                                    Options
                                 </label>
                              </div>
                              <select className="form-control form-control-lg">
                                 <option selected>Choose...</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </select>
                           </div>

                           <div className="input-group mb-3">
                              <select className="form-control form-control-lg">
                                 <option selected>Choose...</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </select>
                              <div className="input-group-append">
                                 <label className="input-group-text">
                                    Options
                                 </label>
                              </div>
                           </div>

                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                              </div>
                              <select className="form-control form-control-lg">
                                 <option selected>Choose...</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </select>
                           </div>

                           <div className="input-group">
                              <select className="form-control form-control-lg">
                                 <option selected>Choose...</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </select>
                              <div className="input-group-append">
                                 <button
                                    className="btn btn-primary"
                                    type="button"
                                 >
                                    Button
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Custom file input</h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form custom_file_input">
                        <form action="#">
                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <span className="input-group-text">
                                    Upload
                                 </span>
                              </div>
                              <div className="custom-file">
                                 <input
                                    type="file"
                                    className="custom-file-input"
                                 />
                                 <label className="custom-file-label">
                                    Choose file
                                 </label>
                              </div>
                           </div>

                           <div className="input-group mb-3">
                              <div className="custom-file">
                                 <input
                                    type="file"
                                    className="custom-file-input"
                                 />
                                 <label className="custom-file-label">
                                    Choose file
                                 </label>
                              </div>
                              <div className="input-group-append">
                                 <span className="input-group-text">
                                    Upload
                                 </span>
                              </div>
                           </div>

                           <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                 <button
                                    className="btn btn-primary btn-sm"
                                    type="button"
                                 >
                                    Button
                                 </button>
                              </div>
                              <div className="custom-file">
                                 <input
                                    type="file"
                                    className="custom-file-input"
                                 />
                                 <label className="custom-file-label">
                                    Choose file
                                 </label>
                              </div>
                           </div>

                           <div className="input-group">
                              <div className="custom-file">
                                 <input
                                    type="file"
                                    className="custom-file-input"
                                 />
                                 <label className="custom-file-label">
                                    Choose file
                                 </label>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Element;
