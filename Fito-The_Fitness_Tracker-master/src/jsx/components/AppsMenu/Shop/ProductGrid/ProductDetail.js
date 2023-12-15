import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
// import productData from "../productData";
import exData from "../productData/exerciseData";
import PageTitle from "../../../../layouts/PageTitle";
// import { obj } from "../ProductList/SingleProductList";


const ProductDetail = ({ match }) => {

   const { details } = useParams();

   const singleProductData = exData.find(({ key }) => key === details);
   const {
      key,
      previewImg,
      title,
      difficulty,
      impact,
      calories,
      target_muscle,
      l_des,
      link,
   } = singleProductData;

   const [min, setMin] = useState(1);
   const [sec, setSec] = useState(0);

   return (
      <div className="h-80">
         <PageTitle activeMenu={title} motherMenu="Exercise" />
         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-xl-3 col-lg-6  col-md-5 col-xxl-5 ">
                           <div className="tab-content">
                              <div
                                 role="tabpanel"
                                 className="tab-pane fade show active"
                                 id="first"
                              >
                                 <img
                                    className="img-fluid"
                                    src={previewImg}
                                    alt=""
                                 />
                              </div>
                           </div>

                        </div>
                        <div className="col-xl-9 col-lg-6  col-md-7 col-xxl-7 col-sm-12">
                           <div className="product-detail-content">
                              <div className="new-arrival-content pr">
                                 <h2>{title}
                                 </h2>

                                 <div className="star-rating mt-4 mb-2 d-flex">
                                    {difficulty}{" "}
                                    <span className="review-text">
                                       {" "}
                                       Difficulty
                                    </span>
                                    <Link
                                       className="product-review"
                                       to="/ecom-product-detail"
                                    >
                                    </Link>
                                 </div>
                                 <p className="price mb-4">{calories} cal/set</p>

                                 <p>
                                    Impact:{" "}
                                    <span className="item">
                                       {impact}{" "}
                                       <i className="fa fa-shopping-basket"></i>
                                    </span>
                                 </p>

                                 <p className="mt-2 mb-4">
                                    Target muscle:&nbsp;&nbsp;
                                    {target_muscle.map((target_muscle, i) => (
                                       <span
                                          className="badge badge-success light mr-1"
                                          key={i}
                                       >
                                          {target_muscle}
                                       </span>
                                    ))}
                                 </p>
                                 <div class="ml-0 row">
                                    <div className="col-sm-2 px-0 m-0 mx-1">
                                       <p>Minutes</p>
                                       <input
                                          type="number"
                                          name="num"
                                          className="form-control input-btn input-number"
                                          defaultValue="1"
                                          onChange={(e)=>(setMin(e.target.value))}
                                       />
                                    </div>

                                    <div className="col-sm-2 px-0 m-0">

                                       <p>Seconds</p>
                                       <input
                                          type="number"
                                          name="num"
                                          className="form-control input-btn input-number"
                                          defaultValue="00"
                                          onChange={(e)=>(setSec(e.target.value))}
                                       />
                                    </div>
                                 </div>

                                 <div className="shopping-cart mt-4 mb-4">
                                    <Link
                                       className="btn btn-primary btn-lg"
                                       to={`/countdown/${key}/${min}/${sec}/${title}`}
                                    >
                                       {/* <i className="fa fa-shopping-basket mr-2"></i> */}
                                       Start Now
                                       <i className="flaticon-381-stopwatch ml-2"></i>
                                    </Link>
                                 </div>
                                 <p className="text-content">{l_des}</p>
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

export default ProductDetail;
