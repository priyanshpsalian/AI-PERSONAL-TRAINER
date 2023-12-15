// import { createContext } from "react";
import { Link } from "react-router-dom";


const SingleProductList = (props) => {

   const {
      key,
      previewImg,
      title,
      difficulty,
      impact,
      calories,
      s_des,
   } = props.product;

   return (
      <div className="col-lg-12 col-xl-6">
         <div className="card">
            <div className="card-body">
               <div className="row m-b-30">
                  <div className="col-md-5 col-xxl-12">
                     <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                        <div className="new-arrivals-img-contnent">
                           <img className="img-fluid" src={previewImg} alt="" />
                        </div>
                     </div>
                  </div>
                  <div className="col-md-7 col-xxl-12">
                     <div className="new-arrival-content position-relative">
                        <h4>
                           <Link to={`/ecom-product-detail/${key}`}>
                              {title}
                           </Link>
                        </h4>
						<div className="comment-review star-rating">
                           <span className="review-text">Difficulty </span>
                           {difficulty}
							<p className="price">{calories}cal</p>
                        </div>
                        <p>
                           Impact :{" "}
                           <span className="item">
                              {impact}{" "}
                              <i className="fa fa-check-circle text-success"></i>
                           </span>
                        </p>
                        <p className="text-content">{s_des}</p>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleProductList;