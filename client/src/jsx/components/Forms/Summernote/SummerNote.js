import React, { Component } from "react";
import Rte from "./Rte";
import PageTitle from "../../../layouts/PageTitle";

class Summernote extends Component {
   render() {
      return (
         <div className="h-80">
            <PageTitle activeMenu="Summernote" motherMenu="Form" />
            <div className="row">
               <div className="col-xl-12 col-xxl-12">
                  <div className="card">
                     <div className="card-header">
                        <h4 className="card-title">Summernote Editor</h4>
                     </div>
                     <div className="card-body">
                        <div className="summernote">
                           <Rte />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Summernote;
