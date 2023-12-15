import React, { Fragment } from "react";

import PageTitle from "../../../layouts/PageTitle";

import data from "../../table/tableData";
import { Badge, Dropdown, Table } from "react-bootstrap";

const ProductOrder = () => {
   return (
      <div className="h-80">
         <PageTitle activeMenu="Product Order" motherMenu="Shop" />
         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <Table responsive size="sm" className="table-responsive-xl mb-0">
                        <thead>
                           <tr>
                              <th className="align-middle">
                                 <div className="custom-control custom-checkbox ml-1">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="checkAll"
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="checkAll"
                                    ></label>
                                 </div>
                              </th>
                              {data.productData.columns.map((p, i) => (
                                 <th className="align-middle" key={i}>
                                    <strong> {p}</strong>
                                 </th>
                              ))}
                              <th></th>
                           </tr>
                        </thead>
                        <tbody id="orders">
                           {data.productData.data.map((d, i) => (
                              <tr key={i}>
                                 {d.map((da, ii) => (
                                    <td key={ii}>
                                       {ii === 0 ? (
                                          <div
                                             className={`custom-control custom-checkbox checkbox-${
                                                da === "Completed"
                                                   ? "success"
                                                   : da === "On Hold"
                                                   ? "secondary"
                                                   : da === "Pending"
                                                   ? "warning"
                                                   : ""
                                             }`}
                                          >
                                             <input
                                                type="checkbox"
                                                className="custom-control-input "
                                                id={`checkAll${i}`}
                                                required=""
                                             />
                                             <label
                                                className="custom-control-label"
                                                htmlFor={`checkAll${i}`}
                                             ></label>
                                          </div>
                                       ) : da === "Completed" ? (
                                          <Badge variant="success">
                                             Completed
                                             <span className="ml-1 fa fa-check"></span>
                                          </Badge>
                                       ) : da === "On Hold" ? (
                                          <Badge variant="secondary">
                                             On Hold
                                             <span className="ml-1 fa fa-ban"></span>
                                          </Badge>
                                       ) : da === "Pending" ? (
                                          <Badge variant="warning">
                                             Pending
                                          </Badge>
                                       ) : da === "Processing" ? (
                                          <Badge variant="primary">
                                             Processing
                                          </Badge>
                                       ) : ii === 6 ? (
                                          <Dropdown>
                                             <Dropdown.Toggle
                                                variant=""
                                                className="table-dropdown icon-false"
                                             >
                                                <svg
                                                   width="24px"
                                                   height="24px"
                                                   viewBox="0 0 24 24"
                                                   version="1.1"
                                                >
                                                   <g
                                                      stroke="none"
                                                      strokeWidth="1"
                                                      fill="none"
                                                      fillRule="evenodd"
                                                   >
                                                      <rect
                                                         x="0"
                                                         y="0"
                                                         width="24"
                                                         height="24"
                                                      ></rect>
                                                      <circle
                                                         fill="#000000"
                                                         cx="5"
                                                         cy="12"
                                                         r="2"
                                                      ></circle>
                                                      <circle
                                                         fill="#000000"
                                                         cx="12"
                                                         cy="12"
                                                         r="2"
                                                      ></circle>
                                                      <circle
                                                         fill="#000000"
                                                         cx="19"
                                                         cy="12"
                                                         r="2"
                                                      ></circle>
                                                   </g>
                                                </svg>
                                             </Dropdown.Toggle>
                                             <Dropdown.Menu>
                                                <Dropdown.Item href="#">
                                                   Completed
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                   Processing
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                   On Hold
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#">
                                                   Pending
                                                </Dropdown.Item>
                                                <div className="dropdown-divider"></div>
                                                <Dropdown.Item
                                                   href="#"
                                                   className="text-danger"
                                                >
                                                   Delete
                                                </Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       ) : ii === 1 ? (
                                          da.map((ddd, iii) => (
                                             <Fragment>
                                                {iii === 0 ? (
                                                   <strong>{ddd}</strong>
                                                ) : iii === 2 ? (
                                                   <strong>{ddd}</strong>
                                                ) : (
                                                   ddd
                                                )}
                                             </Fragment>
                                          ))
                                       ) : (
                                          da
                                       )}
                                    </td>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                     </Table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductOrder;
