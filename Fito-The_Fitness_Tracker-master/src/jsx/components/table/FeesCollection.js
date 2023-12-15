import React, { useState, useRef } from "react";
import { Table, Pagination, Badge } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./tableData.js";

const FeesCollection = () => {
   const sort = 3;
   let jobPagination = Array(Math.ceil(data.feeTable.data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   const activePag = useRef(0);
   const jobData = useRef(
      data.feeTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      )
   );
   const [demo, setdemo] = useState();
   const onClick = (i) => {
      activePag.current = i;

      jobData.current = data.feeTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      );
      setdemo(
         data.feeTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
         )
      );
   };
   return (
      <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">Fees Collection</h4>
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper">
                     <table id="example" className="display w-100 dataTable">
                        <thead>
                           <tr role="row">
                              {data.feeTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {jobData.current.map((d, i) => (
                              <tr key={i}>
                                 {d.map((da, ii) => (
                                    <td key={ii}>
                                       {da === "Paid" ? (
                                          <Badge variant="success light">
                                             Paid
                                          </Badge>
                                       ) : da === "Unpaid" ? (
                                          <Badge variant="danger light">
                                             Unpaid
                                          </Badge>
                                       ) : da === "Panding" ? (
                                          <Badge variant="warning light">
                                             Panding
                                          </Badge>
                                       ) : (
                                          da
                                       )}
                                    </td>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                        <tfoot>
                           <tr role="row">
                              {data.feeTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </tfoot>
                     </table>
                     <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="dataTables_info">
                           Showing {activePag.current * sort + 1} to
                           {data.feeTable.data.length <
                           (activePag.current + 1) * sort
                              ? data.feeTable.data.length
                              : (activePag.current + 1) * sort}
                           of {data.feeTable.data.length} entries
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers">
                           <Pagination
                              className="pagination-primary pagination-circle"
                              size="lg"
                           >
                              <li
                                 className="page-item page-indicator "
                                 onClick={() =>
                                    activePag.current > 1 &&
                                    onClick(activePag.current - 1)
                                 }
                              >
                                 <Link className="page-link" to="#">
                                    <i className="la la-angle-left" />
                                 </Link>
                              </li>
                              {jobPagination.map((number, i) => (
                                 <Pagination.Item
                                    className={
                                       activePag.current === i ? "active" : ""
                                    }
                                    onClick={() => onClick(i)}
                                 >
                                    {number}
                                 </Pagination.Item>
                              ))}
                              <li
                                 className="page-item page-indicator"
                                 onClick={() =>
                                    activePag.current + 1 <
                                       jobPagination.length &&
                                    onClick(activePag.current + 1)
                                 }
                              >
                                 <Link className="page-link" to="#">
                                    <i className="la la-angle-right" />
                                 </Link>
                              </li>
                           </Pagination>
                        </div>
                     </div>
                  </div>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default FeesCollection;
