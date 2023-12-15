import React, { Fragment } from "react";
import SingleProductList from "./SingleProductList";
// import productData from "../productData";
import exData from "../productData/exerciseData";
import PageTitle from "../../../../layouts/PageTitle";

const ProductList = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Exercises" motherMenu="Workout" />

         <div className="row">
            {exData.map((product) => (
               <SingleProductList key={product.key} product={product} />
            ))}
         </div>
      </Fragment>
   );
};

export default ProductList;
