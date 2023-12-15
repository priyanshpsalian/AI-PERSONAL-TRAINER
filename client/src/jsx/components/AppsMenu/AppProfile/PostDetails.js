import React, { useState } from "react";
import { Link } from "react-router-dom";

/// Image
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile from "../../../../images/profile/profile.png";
import { Dropdown, Button, Modal } from "react-bootstrap";
import { SRLWrapper } from "simple-react-lightbox";

const PostDetails = () => {
   const [sendMessage, setSendMessage] = useState(false);

   const options = {
      settings: {
         overlayColor: "#000000",
      },
   };
   return (
      <div>
         <div>
            <div className="page-titles">
               <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                     <Link to="/post-details">App</Link>
                  </li>
                  <li className="breadcrumb-item active">
                     <Link to="/post-details">Profile</Link>
                  </li>
               </ol>
            </div>
            {/* row */}
            <div className="row">
               <div className="col-lg-12">
                  <div className="profile card card-body px-3 pt-3 pb-0">
                     <div className="profile-head">
                        <div className="photo-content">
                           <div className="cover-photo"></div>
                        </div>
                        <div className="profile-info">
                           <div className="profile-photo">
                              <img
                                 src={profile}
                                 className="img-fluid rounded-circle"
                                 alt="profile"
                              />
                           </div>
                           <div className="profile-details">
                              <div className="profile-name px-3 pt-2">
                                 <h4 className="text-primary mb-0">
                                    Mitchell C. Shay
                                 </h4>
                                 <p>UX / UI Designer</p>
                              </div>
                              <div className="profile-email px-2 pt-2">
                                 <h4 className="text-muted mb-0">
                                    hello@email.com
                                 </h4>
                                 <p>Email</p>
                              </div>
                              <Dropdown className="dropdown ml-auto">
                                 <Dropdown.Toggle
                                    variant="primary"
                                    className="btn btn-primary light sharp icon-false"
                                    data-toggle="dropdown"
                                    aria-expanded="true"
                                 >
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       //    xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                 <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                    <Dropdown.Item className="dropdown-item">
                                       <i className="fa fa-user-circle text-primary mr-2" />
                                       View profile
                                    </Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item">
                                       <i className="fa fa-users text-primary mr-2" />
                                       Add to close friends
                                    </Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item">
                                       <i className="fa fa-plus text-primary mr-2" />
                                       Add to group
                                    </Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item">
                                       <i className="fa fa-ban text-primary mr-2" />
                                       Block
                                    </Dropdown.Item>
                                 </Dropdown.Menu>
                              </Dropdown>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>{" "}
            <div className="row">
               <div className="col-xl-4">
                  <div className="card">
                     <div className="card-body">
                        <div className="profile-statistics mb-5">
                           <div className="text-center">
                              <div className="row">
                                 <div className="col">
                                    <h3 className="m-b-0">150</h3>
                                    <span>Follower</span>
                                 </div>
                                 <div className="col">
                                    <h3 className="m-b-0">140</h3>
                                    <span>Place Stay</span>
                                 </div>
                                 <div className="col">
                                    <h3 className="m-b-0">45</h3>
                                    <span>Reviews</span>
                                 </div>
                              </div>
                              <div className="mt-4">
                                 <Link
                                    to="/post-details"
                                    className="btn btn-primary mb-1 mr-1"
                                 >
                                    Follow
                                 </Link>
                                 <Button
                                    as="a"
                                    to="/#"
                                    className="btn btn-primary mb-1 ml-1"
                                    onClick={() => setSendMessage(true)}
                                 >
                                    Send Message
                                 </Button>
                              </div>
                           </div>
                           {/* send Modal */}
                           <Modal className="modal fade" show={sendMessage}>
                              <div className="modal-content">
                                 <div className="modal-header">
                                    <h5 className="modal-title">
                                       Send Message
                                    </h5>
                                    <Button
                                       variant=""
                                       type="button"
                                       className="close"
                                       data-dismiss="modal"
                                       onClick={() => setSendMessage(false)}
                                    >
                                       <span>×</span>
                                    </Button>
                                 </div>
                                 <div className="modal-body">
                                    <form
                                       className="comment-form"
                                       onSubmit={(e) => {
                                          e.preventDefault();
                                          setSendMessage(false);
                                       }}
                                    >
                                       <div className="row">
                                          <div className="col-lg-6">
                                             <div className="form-group">
                                                <label
                                                   htmlFor="author"
                                                   className="text-black font-w600"
                                                >
                                                   Name{" "}
                                                   <span className="required">
                                                      *
                                                   </span>
                                                </label>
                                                <input
                                                   type="text"
                                                   className="form-control"
                                                   defaultValue="Author"
                                                   name="Author"
                                                   placeholder="Author"
                                                />
                                             </div>
                                          </div>
                                          <div className="col-lg-6">
                                             <div className="form-group">
                                                <label
                                                   htmlFor="email"
                                                   className="text-black font-w600"
                                                >
                                                   Email{" "}
                                                   <span className="required">
                                                      *
                                                   </span>
                                                </label>
                                                <input
                                                   type="text"
                                                   className="form-control"
                                                   defaultValue="Email"
                                                   placeholder="Email"
                                                   name="Email"
                                                />
                                             </div>
                                          </div>
                                          <div className="col-lg-12">
                                             <div className="form-group">
                                                <label
                                                   htmlFor="comment"
                                                   className="text-black font-w600"
                                                >
                                                   Comment
                                                </label>
                                                <textarea
                                                   rows={8}
                                                   className="form-control"
                                                   name="comment"
                                                   placeholder="Comment"
                                                   defaultValue={""}
                                                />
                                             </div>
                                          </div>
                                          <div className="col-lg-12">
                                             <div className="form-group">
                                                <input
                                                   type="submit"
                                                   defaultValue="Post Comment"
                                                   className="submit btn btn-primary"
                                                   name="submit"
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </div>
                           </Modal>
                        </div>
                        <div className="profile-blog mb-5">
                           <h5 className="text-primary d-inline">
                              Today Highlights
                           </h5>
                           <img
                              src={profile01}
                              alt="profile"
                              className="img-fluid mt-4 mb-4 w-100"
                           />
                           <Link to="/post-details">
                              <h4>Darwin Creative Agency Theme</h4>
                           </Link>
                           <p className="mb-0">
                              A small river named Duden flows by their place and
                              supplies it with the necessary regelialia. It is a
                              paradisematic country, in which roasted parts of
                              sentences fly into your mouth.
                           </p>
                        </div>
                        <div className="profile-interest mb-5">
                           <h5 className="text-primary d-inline">Interest</h5>
                           <SRLWrapper options={options}>
                              <div className="row mt-4 sp4">
                                 <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                    <a href={profile02}>
                                       <img
                                          src={profile02}
                                          alt="profileImage"
                                          className="img-fluid"
                                       />
                                    </a>
                                 </div>
                                 <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                    <a href={profile03}>
                                       <img
                                          src={profile03}
                                          alt="profile"
                                          className="img-fluid"
                                       />
                                    </a>
                                 </div>

                                 <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                    {" "}
                                    <a href={profile04}>
                                       <img
                                          src={profile04}
                                          alt="profile"
                                          className="img-fluid"
                                       />
                                    </a>
                                 </div>

                                 <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                    {" "}
                                    <a href={profile02}>
                                       <img
                                          src={profile02}
                                          alt="profile"
                                          className="img-fluid"
                                       />
                                    </a>
                                 </div>
                                 <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                    <a
                                       href={profile03}
                                       className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                                    >
                                       <img
                                          src={profile03}
                                          alt="profile"
                                          className="img-fluid"
                                       />
                                    </a>
                                 </div>
                                 <div className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6">
                                    <a
                                       href={profile04}
                                       className="mb-1 col-lg-4 col-xl-4 col-sm-4 col-6"
                                    >
                                       <img
                                          src={profile04}
                                          alt="profile"
                                          className="img-fluid"
                                       />
                                    </a>
                                 </div>
                              </div>
                           </SRLWrapper>
                        </div>
                        <div className="profile-news">
                           <h5 className="text-primary d-inline">
                              Our Latest News
                           </h5>
                           <div className="media pt-3 pb-3">
                              <img
                                 src={profile05}
                                 alt="image"
                                 className="mr-3 rounded"
                                 width={75}
                              />
                              <div className="media-body">
                                 <h5 className="m-b-5">
                                    <Link
                                       to="/post-details"
                                       className="text-black"
                                    >
                                       Collection of textile samples
                                    </Link>
                                 </h5>
                                 <p className="mb-0">
                                    I shared this on my fb wall a few months
                                    back, and I thought.
                                 </p>
                              </div>
                           </div>
                           <div className="media pt-3 pb-3">
                              <img
                                 src={profile06}
                                 alt="image"
                                 className="mr-3 rounded"
                                 width={75}
                              />
                              <div className="media-body">
                                 <h5 className="m-b-5">
                                    <Link
                                       to="/post-details"
                                       className="text-black"
                                    >
                                       Collection of textile samples
                                    </Link>
                                 </h5>
                                 <p className="mb-0">
                                    I shared this on my fb wall a few months
                                    back, and I thought.
                                 </p>
                              </div>
                           </div>
                           <div className="media pt-3 pb-3">
                              <img
                                 src={profile07}
                                 alt="image"
                                 className="mr-3 rounded"
                                 width={75}
                              />
                              <div className="media-body">
                                 <h5 className="m-b-5">
                                    <Link
                                       to="/post-details"
                                       className="text-black"
                                    >
                                       Collection of textile samples
                                    </Link>
                                 </h5>
                                 <p className="mb-0">
                                    I shared this on my fb wall a few months
                                    back, and I thought.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-8">
                  <div className="card">
                     <div className="card-body">
                        <div className="post-details">
                           <h3 className="mb-2 text-black">
                              Collection of textile samples lay spread
                           </h3>
                           <ul className="mb-4 post-meta">
                              <li className="post-author">By Admin</li>
                              <li className="post-date">
                                 <i className="fa fa-calender" />
                                 18 Nov 2020
                              </li>
                              <li className="post-comment">
                                 <i className="fa fa-comments-o" /> 28
                              </li>
                           </ul>
                           <img
                              src={profile08}
                              alt
                              className="img-fluid mb-3"
                           />
                           <p>
                              A wonderful serenity has take possession of my
                              entire soul like these sweet morning of spare
                              which enjoy whole heart.A wonderful serenity has
                              take possession of my entire soul like these sweet
                              morning of spare which enjoy whole heart.
                           </p>
                           <p>
                              A collection of textile samples lay spread out on
                              the table - Samsa was a travelling salesman - and
                              above it there hung a picture that he had recently
                              cut out of an illustrated magazine and housed in a
                              nice, gilded frame.
                           </p>
                           <blockquote>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Has been the industry's
                              standard text ever since the 1500s, when an
                              unknown printer took a galley of type and
                              scrambled it to make a type specimencenturies.
                           </blockquote>
                           <p>
                              A wonderful serenity has taken possession of my
                              entire soul, like these sweet mornings of spring
                              which I enjoy with my whole heart. I am alone, and
                              feel the charm of existence was created for the
                              bliss of souls like mine.I am so happy, my dear
                              friend, so absorbed in the exquisite sense of mere
                              tranquil existence, that I neglect my talents.
                           </p>
                           <div className="profile-skills mt-5 mb-5">
                              <h4 className="text-primary mb-2">Skills</h4>
                              <Link
                                 to="/post-details"
                                 className="btn btn-primary light btn-xs mb-1 mr-1"
                              >
                                 Admin
                              </Link>
                              <Link
                                 to="/post-details"
                                 className="btn btn-primary light btn-xs mb-1 mr-1"
                              >
                                 Dashboard
                              </Link>
                              <Link
                                 to="/post-details"
                                 className="btn btn-primary light btn-xs mb-1 mr-1"
                              >
                                 Photoshop
                              </Link>
                              <Link
                                 to="/post-details"
                                 className="btn btn-primary light btn-xs mb-1 mr-1"
                              >
                                 Bootstrap
                              </Link>
                              <Link
                                 to="/post-details"
                                 className="btn btn-primary light btn-xs mb-1 mr-1"
                              >
                                 Responsive
                              </Link>
                              <Link
                                 to="/post-details"
                                 className="btn btn-primary light btn-xs mb-1 mr-1"
                              >
                                 Crypto
                              </Link>
                           </div>
                           <div className="comment-respond" id="respond">
                              <h4
                                 className="comment-reply-title text-primary mb-3"
                                 id="reply-title"
                              >
                                 Leave a Reply{" "}
                              </h4>
                              <form
                                 className="comment-form"
                                 id="commentform"
                                 onSubmit={(e) => e.preventDefault()}
                              >
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="form-group">
                                          <label
                                             htmlFor="author"
                                             className="text-black font-w600"
                                          >
                                             Name{" "}
                                             <span className="required">*</span>
                                          </label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             defaultValue="Author"
                                             name="Author"
                                             placeholder="Author"
                                             id="author"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="form-group">
                                          <label
                                             htmlFor="email"
                                             className="text-black font-w600"
                                          >
                                             Email{" "}
                                             <span className="required">*</span>
                                          </label>
                                          <input
                                             type="text"
                                             className="form-control"
                                             defaultValue="Email"
                                             placeholder="Email"
                                             name="Email"
                                             id="email"
                                          />
                                       </div>
                                    </div>
                                    <div className="col-lg-12">
                                       <div className="form-group">
                                          <label
                                             htmlFor="comment"
                                             className="text-black font-w600"
                                          >
                                             Comment
                                          </label>
                                          <textarea
                                             rows={8}
                                             className="form-control"
                                             name="comment"
                                             placeholder="Comment"
                                             id="comment"
                                             defaultValue={""}
                                          />
                                       </div>
                                    </div>
                                    <div className="col-lg-12">
                                       <div className="form-group">
                                          <input
                                             type="submit"
                                             defaultValue="Post Comment"
                                             className="submit btn btn-primary"
                                             id="submit"
                                             name="submit"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PostDetails;
