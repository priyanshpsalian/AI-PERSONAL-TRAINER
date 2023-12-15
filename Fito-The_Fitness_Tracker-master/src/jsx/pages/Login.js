import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
   const [loginData, setLoginData] = useState({});
   const handleBlur = (e) => {
      const newLoginData = { ...loginData };
      newLoginData[e.target.name] = e.target.value;
      setLoginData(newLoginData);
   };
   const submitHandler = (e) => {
      e.preventDefault();
      const submitLogin = { ...loginData };
   };
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
                                 Sign in your account
                              </h4>
                              <form
                                 action=""
                                 onSubmit={(e) =>
                                    e.preventDefault(submitHandler)
                                 }
                              >
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Email</strong>
                                    </label>
                                    <input
                                       type="email"
                                       className="form-control"
                                       defaultValue="hello@example.com"
                                       name="Email"
                                       onChange={handleBlur}
                                    />
                                 </div>
                                 <div className="form-group">
                                    <label className="mb-1">
                                       <strong>Password</strong>
                                    </label>
                                    <input
                                       type="password"
                                       className="form-control"
                                       defaultValue="Password"
                                       name="password"
                                       onChange={handleBlur}
                                    />
                                 </div>
                                 <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                    <div className="form-group">
                                       <div className="custom-control custom-checkbox ml-1">
                                          <input
                                             type="checkbox"
                                             className="custom-control-input"
                                             id="basic_checkbox_1"
                                          />
                                          <label
                                             className="custom-control-label"
                                             htmlFor="basic_checkbox_1"
                                          >
                                             Remember my preference
                                          </label>
                                       </div>
                                    </div>
                                    <div className="form-group">
                                       <Link to="/page-forgot-password">
                                          Forgot Password?
                                       </Link>
                                    </div>
                                 </div>
                                 <div className="text-center">
                                    <button
                                       type="submit"
                                       className="btn btn-primary btn-block"
                                       onClick={() => submitHandler}
                                    >
                                       Sign Me In
                                    </button>
                                 </div>
                              </form>
                              <div className="new-account mt-3">
                                 <p>
                                    Don't have an account?{" "}
                                    <Link
                                       className="text-primary"
                                       to="/page-register"
                                    >
                                       Sign up
                                    </Link>
                                 </p>
                              </div>
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

export default Login;
