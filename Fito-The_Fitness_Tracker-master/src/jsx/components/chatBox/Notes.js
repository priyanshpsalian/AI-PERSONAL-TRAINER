import React from "react";

const Notes = ({ toggleTab, PerfectScrollbar, toggleChatBox }) => {
   return (
      <div
         className={`tab-pane fade  ${
            toggleTab === "notes" ? "active show" : ""
         }`}
         id="notes"
      >
         <div className="card mb-sm-3 mb-md-0 note_card">
            <div className="card-header chat-list-header text-center">
               <a href="#">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     width="18px"
                     height="18px"
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
                           fill="#000000"
                           x="4"
                           y="11"
                           width="16"
                           height="2"
                           rx="1"
                        />
                        <rect
                           fill="#000000"
                           opacity="0.3"
                           transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                           x="4"
                           y="11"
                           width="16"
                           height="2"
                           rx="1"
                        />
                     </g>
                  </svg>
               </a>
               <div>
                  <h6 className="mb-1">Notes</h6>
                  <p className="mb-0">Add New Nots</p>
               </div>
               <a href="#">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink"
                     width="18px"
                     height="18px"
                     viewBox="0 0 24 24"
                     version="1.1"
                  >
                     <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                     >
                        <rect x="0" y="0" width="24" height="24" />
                        <path
                           d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                           fill="#000000"
                           fillRule="nonzero"
                           opacity="0.3"
                        />
                        <path
                           d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                           fill="#000000"
                           fillRule="nonzero"
                        />
                     </g>
                  </svg>
               </a>
            </div>
            <PerfectScrollbar
               className={`card-body contacts_body p-0 dz-scroll  ${
                  toggleChatBox ? "ps ps--active-y" : ""
               }`}
               id="DZ_W_Contacts_Body2"
            >
               <ul className="contacts">
                  <li className="active">
                     <div className="d-flex bd-highlight">
                        <div className="user_info">
                           <span>New order placed..</span>
                           <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                           <a
                              href="#"
                              className="btn btn-primary btn-xs sharp mr-1"
                           >
                              <i className="fa fa-pencil"></i>
                           </a>
                           <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                           </a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="d-flex bd-highlight">
                        <div className="user_info">
                           <span>Youtube, a video-sharing website..</span>
                           <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                           <a
                              href="#"
                              className="btn btn-primary btn-xs sharp mr-1"
                           >
                              <i className="fa fa-pencil"></i>
                           </a>
                           <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                           </a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="d-flex bd-highlight">
                        <div className="user_info">
                           <span>john just buy your product..</span>
                           <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                           <a
                              href="#"
                              className="btn btn-primary btn-xs sharp mr-1"
                           >
                              <i className="fa fa-pencil"></i>
                           </a>
                           <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                           </a>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="d-flex bd-highlight">
                        <div className="user_info">
                           <span>Athan Jacoby</span>
                           <p>10 Aug 2020</p>
                        </div>
                        <div className="ml-auto">
                           <a
                              href="#"
                              className="btn btn-primary btn-xs sharp mr-1"
                           >
                              <i className="fa fa-pencil"></i>
                           </a>
                           <a href="#" className="btn btn-danger btn-xs sharp">
                              <i className="fa fa-trash"></i>
                           </a>
                        </div>
                     </div>
                  </li>
               </ul>
            </PerfectScrollbar>
         </div>
      </div>
   );
};

export default Notes;
