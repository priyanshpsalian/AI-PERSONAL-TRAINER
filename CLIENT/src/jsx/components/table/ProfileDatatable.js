import React, { Fragment, useState, useRef } from "react";
import { Table, Pagination } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./tableData.js";

const ProfileDatatable = () => {
   const sort = 3;
   let jobPagination = Array(Math.ceil(data.profileTable.data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   const activePag = useRef(0);
   const jobData = useRef(
      data.profileTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      )
   );
   const [demo, setdemo] = useState();
   const onClick = (i) => {
      activePag.current = i;

      jobData.current = data.profileTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      );
      setdemo(
         data.profileTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
         )
      );
   };
   return (
      <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">Profile Datatable</h4>
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper">
                     <table id="example" className="display w-100 dataTable">
                        <thead>
                           <tr role="row">
                              {data.profileTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {jobData.current.map((d, i) => (
                              <tr key={i}>
                                 {d.map((da, i) => (
                                    <Fragment key={i}>
                                       <td>
                                          {i === 0 ? (
                                             <img
                                                className="rounded-circle"
                                                width="35"
                                                src={da}
                                                alt=""
                                             />
                                          ) : (
                                             <Fragment>
                                                {da}
                                                {i === 8 && (
                                                   <div className="d-flex">
                                                      <Link
                                                         to="#"
                                                         className="btn btn-primary shadow btn-xs sharp mr-1"
                                                      >
                                                         <i className="fa fa-pencil"></i>
                                                      </Link>
                                                      <Link
                                                         to="#"
                                                         className="btn btn-danger shadow btn-xs sharp"
                                                      >
                                                         <i className="fa fa-trash"></i>
                                                      </Link>
                                                   </div>
                                                )}
                                             </Fragment>
                                          )}
                                       </td>
                                    </Fragment>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                        <tfoot>
                           <tr role="row">
                              {data.profileTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </tfoot>
                     </table>

                     <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="dataTables_info">
                           Showing {activePag.current * sort + 1} to
                           {data.profileTable.data.length <
                           (activePag.current + 1) * sort
                              ? data.profileTable.data.length
                              : (activePag.current + 1) * sort}
                           of {data.profileTable.data.length} entries
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

export default ProfileDatatable;
