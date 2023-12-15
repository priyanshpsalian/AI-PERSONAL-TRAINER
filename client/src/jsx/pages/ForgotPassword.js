import React from "react";

const ForgotPassword = () => {
   return (
      <div className="authincation">
         <div className="container p-0">
            <div className="row justify-content-center align-items-center authincation-page-area">
               <div className="col-lg-6 col-md-9">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                                 Forgot Password
                              </h4>
                              <form onSubmit={(e) => e.preventDefault()}>
                                 <div className="form-group">
                                    <label>
                                       <strong>Email</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       placeholder="hello@example.com"
                                    />
                                 </div>
                                 <div className="text-center">
                                    <button
                                       type="submit"
                                       className="btn btn-primary btn-block"
                                    >
                                       SUBMIT
                                    </button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForgotPassword;
