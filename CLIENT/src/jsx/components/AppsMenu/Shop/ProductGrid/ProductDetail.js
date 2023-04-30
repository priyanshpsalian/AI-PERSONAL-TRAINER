import React from "react";
import { Link } from "react-router-dom";
import productData from "../productData";
import PageTitle from "../../../../layouts/PageTitle";
const ProductDetail = ({ match }) => {
   //** Dynamic Key Single Place */
   const singleProductData = productData.find((sinPl) =>
      sinPl.key === match.params.id ? match.params.id : productData[0].key
   );
   const {
      previewImg,
      rating,
      price,
      availability,
      productCode,
      brand,
      tags,
      des,
      imageList,
   } = singleProductData;

   return (
      <div className="h-80">
         <PageTitle activeMenu="Blank" motherMenu="Layout" />
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
                           <div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
                              <ul
                                 className="nav slide-item-list mt-3"
                                 role="tablist"
                              >
                                 {imageList.map((images, i) => (
                                    <li
                                       role="presentation"
                                       className="show"
                                       key={i}
                                    >
                                       <Link
                                          to="#first"
                                          role="tab"
                                          data-toggle="tab"
                                       >
                                          <img
                                             className="img-fluid"
                                             src={images}
                                             alt=""
                                             width="50"
                                          />
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                        <div className="col-xl-9 col-lg-6  col-md-7 col-xxl-7 col-sm-12">
                           <div className="product-detail-content">
                              <div className="new-arrival-content pr">
                                 <h4>Solid Women's V-neck Dark T-Shirt</h4>
                                 <div className="star-rating mb-2 d-flex">
                                    {rating}{" "}
                                    <span className="review-text">
                                       {" "}
                                       (34 reviews) /{" "}
                                    </span>
                                    <Link
                                       className="product-review"
                                       to="/ecom-product-detail"
                                    >
                                       {" "}
                                       Write a review?
                                    </Link>
                                 </div>
								 <p className="price">${price}</p>
                                 <p>
                                    Availability:{" "}
                                    <span className="item">
                                       {availability}{" "}
                                       <i className="fa fa-shopping-basket"></i>
                                    </span>
                                 </p>
                                 <p>
                                    Product code:{" "}
                                    <span className="item">{productCode}</span>
                                 </p>
                                 <p>
                                    Brand: <span className="item">{brand}</span>
                                 </p>
                                 <p>
                                    Product tags:&nbsp;&nbsp;
                                    {tags.map((tag, i) => (
                                       <span
                                          className="badge badge-success light mr-1"
                                          key={i}
                                       >
                                          {tag}
                                       </span>
                                    ))}
                                 </p>
                                 <p className="text-content">{des}</p>
                                 <div className="filtaring-area my-3">
                                    <div className="size-filter">
                                       <h4 className="m-b-15">Select size</h4>

                                       <div
                                          className="btn-group"
                                          data-toggle="buttons"
                                       >
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option5"
                                             />
                                             XS
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option1"
                                             />
                                             SM
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option2"
                                             />
                                             MD
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option3"
                                             />
                                             LG
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option4"
                                             />
                                             XL
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-2 px-0">
                                    <input
                                       type="number"
                                       name="num"
                                       className="form-control input-btn input-number"
                                       defaultValue="1"
                                    />
                                 </div>
                                 <div className="shopping-cart mt-3">
                                    <Link
                                       className="btn btn-primary btn-lg"
                                       to="/ecom-product-detail"
                                    >
                                       <i className="fa fa-shopping-basket mr-2"></i>
                                       Add to cart
                                    </Link>
                                 </div>
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
