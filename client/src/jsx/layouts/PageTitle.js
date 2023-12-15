import React from "react";
import { Breadcrumb } from "react-bootstrap";

const PageTitle = ({ motherMenu, activeMenu }) => {
   return (
      <div className="page-titles">
         <Breadcrumb>
            <Breadcrumb.Item>
               <a href="#">{motherMenu}</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
               <a href="#">{activeMenu}</a>
            </Breadcrumb.Item>
         </Breadcrumb>
      </div>
   );
};

export default PageTitle;
