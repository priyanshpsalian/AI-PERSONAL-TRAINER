import React, { Fragment } from "react";
import swal from "sweetalert";
import swalMessage from "@sweetalert/with-react";
import PageTitle from "../../../layouts/PageTitle";

const MainSweetAlert = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Sweet Alert" motherMenu="Components" />

         <div className="row">
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Wrong</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal("Oops", "Something went wrong!", "error")
                              }
                              className="btn btn-danger btn sweet-wrong"
                           >
                              Sweet Wrong
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Message</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swalMessage(
                                    <div>
                                       <h2>Hey, Here's a message !!</h2>
                                    </div>
                                 )
                              }
                              className="btn btn-info btn sweet-message"
                           >
                              Sweet Message
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Text</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swalMessage(
                                    <div>
                                       <h2>Hey, Here's a message !!</h2>
                                       <p>It's pretty, isn't it?</p>
                                    </div>
                                 )
                              }
                              className="btn btn-primary btn sweet-text"
                           >
                              Sweet Text
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Success</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal(
                                    "Good job!",
                                    "You clicked the button!",
                                    "success"
                                 )
                              }
                              className="btn btn-success btn sweet-success"
                           >
                              Sweet Success
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Confirm</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal({
                                    title: "Are you sure?",
                                    text:
                                       "Once deleted, you will not be able to recover this imaginary file!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                 }).then((willDelete) => {
                                    if (willDelete) {
                                       swal(
                                          "Poof! Your imaginary file has been deleted!",
                                          {
                                             icon: "success",
                                          }
                                       );
                                    } else {
                                       swal("Your imaginary file is safe!");
                                    }
                                 })
                              }
                              className="btn btn-warning btn sweet-confirm"
                           >
                              Sweet Confirm
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Confirm Or Cancel</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal({
                                    title: "Are you sure?",
                                    text:
                                       "Once deleted, you will not be able to recover this imaginary file!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                 }).then((willDelete) => {
                                    if (willDelete) {
                                       swal(
                                          "Poof! Your imaginary file has been deleted!",
                                          {
                                             icon: "success",
                                          }
                                       );
                                    } else {
                                       swal("Your imaginary file is safe!");
                                    }
                                 })
                              }
                              className="btn btn-warning btn sweet-success-cancel"
                           >
                              Sweet Confirm Or Cancel
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Image Message</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swalMessage(
                                    <div>
                                       <h2>Hey, Here's a message !!</h2>
                                    </div>
                                 )
                              }
                              className="btn btn-info btn sweet-image-message"
                           >
                              Sweet Image Message
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet HTML</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swalMessage(
                                    <div>
                                       <h2>Sweet !!</h2>
                                       <p>true</p>
                                    </div>
                                 )
                              }
                              className="btn btn-primary btn sweet-html"
                           >
                              Sweet HTML
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-4">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Auto Close</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal(
                                    "Click on either the button or outside the modal."
                                 ).then((value) => {
                                    swal(`The returned value is: ${value}`);
                                 })
                              }
                              className="btn btn-danger btn sweet-auto"
                           >
                              Sweet Auto Close
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Prompt</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal("Are you sure you want to do this?", {
                                    buttons: ["Oh noez!", true],
                                 })
                              }
                              className="btn btn-success btn sweet-prompt"
                           >
                              Sweet Prompt
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Ajax</h4>
                     <div className="card-content"></div>
                     <div className="sweetalert mt-4">
                        <button
                           onClick={() =>
                              swal({
                                 title: "Are you sure?",
                                 text:
                                    "Once deleted, you will not be able to recover this imaginary file!",
                                 icon: "warning",
                                 buttons: true,
                                 dangerMode: true,
                              }).then((willDelete) => {
                                 if (willDelete) {
                                    swal(
                                       "Poof! Your imaginary file has been deleted!",
                                       {
                                          icon: "success",
                                       }
                                    );
                                 } else {
                                    swal("Your imaginary file is safe!");
                                 }
                              })
                           }
                           className="btn btn-info btn sweet-ajax"
                        >
                           Sweet Ajax
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default MainSweetAlert;
