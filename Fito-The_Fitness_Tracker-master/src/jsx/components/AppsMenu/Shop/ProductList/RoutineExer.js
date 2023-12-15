import React, { Fragment } from "react";
import RoutineList from "./RoutineList";
// import productData from "../productData";
import exData from "../productData/exerciseData";
import PageTitle from "../../../../layouts/PageTitle";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const RoutineExer = () => {

   const { exer, name } = useParams();

   const keys = exer.split(",");

   exData.map((obj) => console.log(obj.key, " - ", obj.title))
   const filList = exData.filter(({ key }) => keys.includes(key));
   return (
      <>
         <Fragment>
            <PageTitle activeMenu="Exercises" motherMenu="Routine" />

         <div className="mr-auto pr-3 mb-4">
            <h4 className="text-black fs-20">{name} recommended routine</h4>
            <p className="fs-13 mb-0 text-black">
               This is a {name} routine package, contains {filList.length} exercises,
               <br />
               The exercises are as follows :
            </p>
         </div>

            <div className="row">
               {filList.map((product) => (
                  <RoutineList key={product.key} product={product} />
               ))}
            </div>
         </Fragment>
      </>
   );
};

export default RoutineExer;
