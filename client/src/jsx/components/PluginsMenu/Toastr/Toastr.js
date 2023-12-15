import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../../layouts/PageTitle";

const Toastr = () => {
   const notifyTopRight = () => {
      toast.success("✅ Top Right !", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
      });
   };

   const notifyBottomRight = () => {
      toast.warn("✅ Bottom Right !", {
         position: "bottom-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
      });
   };

   const notifyBottomLeft = () => {
      toast.success("✅ Bottom Left !", {
         position: "bottom-left",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const notifyTopLeft = () => {
      toast.warn("✅ Top Left !", {
         position: "bottom-left",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const notifyTopFullWidth = () => {
      toast.warn("✅ Top Full Width !", {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const notifyBottomFullWidth = () => {
      toast.warn("✅ Bottom Full Width !", {
         position: "bottom-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const notifyTopCenter = () => {
      toast.warn("✅ Top Center !", {
         position: "top-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const notifyBottomCenter = () => {
      toast.warn("✅ Bottom Center !", {
         position: "bottom-center",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };
   const notifyInfo = () => {
      toast.info("❓ Info Notify !", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };
   const notifyWarning = () => {
      toast.warn("❗ Warning Notify !", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };

   const notifyError = () => {
      toast.error("❌ Error Notify !", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
      });
   };
   return (
      <div className="h-80">
         <PageTitle activeMenu="Toastr" motherMenu="Advanced" />

         <div className="row">
            <div className="col-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Toastr</h4>
                  </div>
                  <div className="card-body">
                     <button
                        onClick={notifyTopRight}
                        type="button"
                        className="btn btn-dark mb-2 mr-2"
                        id="toastr-success-top-right"
                     >
                        <ToastContainer
                           position="top-right"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Top Right
                     </button>
                     <button
                        onClick={notifyBottomRight}
                        type="button"
                        className="btn btn-dark mb-2  mr-2"
                        id="toastr-success-bottom-right"
                     >
                        <ToastContainer
                           position="bottom-right"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Bottom Right
                     </button>
                     <button
                        onClick={notifyBottomLeft}
                        type="button"
                        className="btn btn-dark mb-2  mr-2"
                        id="toastr-success-bottom-left"
                     >
                        <ToastContainer
                           position="bottom-left"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Bottom Left
                     </button>
                     <button
                        onClick={notifyTopLeft}
                        type="button"
                        className="btn btn-dark mb-2  mr-2"
                        id="toastr-success-top-left"
                     >
                        <ToastContainer
                           position="top-left"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Top Left
                     </button>
                     <button
                        onClick={notifyTopFullWidth}
                        type="button"
                        className="btn btn-dark mb-2  mr-2"
                        id="toastr-success-top-full-width"
                     >
                        <ToastContainer
                           position="top-center"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Top Full Width
                     </button>
                     <button
                        onClick={notifyBottomFullWidth}
                        type="button"
                        className="btn btn-dark mb-2  mr-2"
                        id="toastr-success-bottom-full-width"
                     >
                        <ToastContainer
                           position="bottom-center"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Bottom Full Width
                     </button>
                     <button
                        onClick={notifyTopCenter}
                        type="button"
                        className="btn btn-dark mb-2  mr-2"
                        id="toastr-success-top-center"
                     >
                        <ToastContainer
                           position="top-center"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Top Center
                     </button>
                     <button
                        onClick={notifyBottomCenter}
                        type="button"
                        className="btn btn-dark mb-2  mr-2"
                        id="toastr-success-bottom-center"
                     >
                        <ToastContainer
                           position="bottom-center"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Bottom Center
                     </button>
                     <button
                        onClick={notifyInfo}
                        type="button"
                        className="btn btn-info mb-2  mr-2"
                        id="toastr-info-top-right"
                     >
                        <ToastContainer
                           position="top-right"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Info
                     </button>
                     <button
                        onClick={notifyWarning}
                        type="button"
                        className="btn btn-warning mb-2  mr-2"
                        id="toastr-warning-top-right"
                     >
                        <ToastContainer
                           position="top-right"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Warning
                     </button>
                     <button
                        onClick={notifyError}
                        type="button"
                        className="btn btn-danger mb-2  mr-2"
                        id="toastr-danger-top-right"
                     >
                        <ToastContainer
                           position="top-right"
                           autoClose={5000}
                           hideProgressBar={false}
                           newestOnTop
                           closeOnClick
                           rtl={false}
                           pauseOnFocusLoss
                           draggable
                           pauseOnHover
                        />
                        Error
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Toastr;
