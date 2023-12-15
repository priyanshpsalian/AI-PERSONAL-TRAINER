import React, { useState } from "react";

/// Images
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import avatar4 from "../../../images/avatar/4.jpg";
import avatar5 from "../../../images/avatar/5.jpg";
import MsgBox from "./MsgBox";

const Chat = ({ PerfectScrollbar, toggleChatBox, toggleTab }) => {
   const [openMsg, setOpenMsg] = useState(false);
   return (
      <div
         className={`tab-pane fade  ${
            toggleTab === "chat" ? "active show" : ""
         }`}
         id="chat"
         role="tabpanel"
      >
         <div
            className={`card mb-sm-3 mb-md-0 contacts_card dz-chat-user-box ${
               openMsg ? "d-none" : ""
            }`}
         >
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
                  <h6 className="mb-1">Chat List</h6>
                  <p className="mb-0">Show All</p>
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
                        <circle fill="#000000" cx="5" cy="12" r="2" />
                        <circle fill="#000000" cx="12" cy="12" r="2" />
                        <circle fill="#000000" cx="19" cy="12" r="2" />
                     </g>
                  </svg>
               </a>
            </div>
            <PerfectScrollbar
               className={`card-body contacts_body p-0 dz-scroll  ${
                  toggleChatBox ? "ps ps--active-y" : ""
               }`}
               id="DZ_W_Contacts_Body"
            >
               <ul className="contacts">
                  <li className="name-first-letter">A</li>
                  <li
                     className="active dz-chat-user"
                     onClick={() => setOpenMsg(true)}
                  >
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar1}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                           <span>Archie Parker</span>
                           <p>Kalid is online</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar2}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Alfie Mason</span>
                           <p>Taherah left 7 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar3}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                           <span>AharlieKane</span>
                           <p>Sami is online</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar4}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Athan Jacoby</span>
                           <p>Nargis left 30 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="name-first-letter">B</li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar5}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Bashid Samim</span>
                           <p>Rashid left 50 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar1}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                           <span>Breddie Ronan</span>
                           <p>Kalid is online</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar2}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Ceorge Carson</span>
                           <p>Taherah left 7 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="name-first-letter">D</li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar3}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                           <span>Darry Parker</span>
                           <p>Sami is online</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar4}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Denry Hunter</span>
                           <p>Nargis left 30 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="name-first-letter">J</li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar5}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Jack Ronan</span>
                           <p>Rashid left 50 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar1}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                           <span>Jacob Tucker</span>
                           <p>Kalid is online</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar2}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>James Logan</span>
                           <p>Taherah left 7 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar3}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon"></span>
                        </div>
                        <div className="user_info">
                           <span>Joshua Weston</span>
                           <p>Sami is online</p>
                        </div>
                     </div>
                  </li>
                  <li className="name-first-letter">O</li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar4}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Oliver Acker</span>
                           <p>Nargis left 30 mins ago</p>
                        </div>
                     </div>
                  </li>
                  <li className="dz-chat-user" onClick={() => setOpenMsg(true)}>
                     <div className="d-flex bd-highlight">
                        <div className="img_cont">
                           <img
                              src={avatar5}
                              className="rounded-circle user_img"
                              alt=""
                           />
                           <span className="online_icon offline"></span>
                        </div>
                        <div className="user_info">
                           <span>Oscar Weston</span>
                           <p>Rashid left 50 mins ago</p>
                        </div>
                     </div>
                  </li>
               </ul>
            </PerfectScrollbar>
         </div>
         <MsgBox
            avatar1={avatar1}
            avatar2={avatar2}
            openMsg={openMsg}
            PerfectScrollbar={PerfectScrollbar}
            offMsg={() => setOpenMsg(false)}
         />
      </div>
   );
};

export default Chat;
