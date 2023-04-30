import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import menu04 from "../../../images/menus/4.png";
import menu05 from "../../../images/menus/5.png";
import menu07 from "../../../images/menus/7.png";
import menu06 from "../../../images/menus/6.png";
import menu08 from "../../../images/menus/8.png";
import menu09 from "../../../images/menus/9.png";
import menu10 from "../../../images/menus/10.png";
import menu11 from "../../../images/menus/11.png";
import menu12 from "../../../images/menus/12.png";
import testimonial01 from "../../../images/testimonial/1.jpg";
import testimonial02 from "../../../images/testimonial/2.jpg";
import testimonial03 from "../../../images/testimonial/3.jpg";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button } from "react-bootstrap";
import ModalContent from "./Modal";

const FoodMenu = () => {
   const [addDietMenu, setAddDietMenu] = useState(false);
   const [activesigleMenu, setActivesigleMenu] = useState(false);
   const data = [
      {
         title: "Fresh or Frozen (No Sugar Added) Fruits",
         img: menu04,
         des:
            "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
         time: "4-6",
         review: "658",
         ingridients: 5,
         author: { name: "Andrew Sceenshaver", img: testimonial01 },
      },
      {
         title: "Fresh or Frozen (No Sugar Added) Fruits",
         img: menu05,
         des:
            "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
         time: "4-6",
         review: "658",
         ingridients: 5,
         author: { name: "Andrew Sceenshaver", img: testimonial02 },
      },
      {
         title: "Fresh or Frozen (No Sugar Added) Fruits",
         img: menu06,
         des:
            "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
         time: "4-6",
         review: "658",
         ingridients: 5,
         author: { name: "Andrew Sceenshaver", img: testimonial03 },
      },
      {
         title: "Fresh or Frozen (No Sugar Added) Fruits",
         img: menu07,
         des:
            "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
         time: "4-6",
         review: "658",
         ingridients: 5,
         author: { name: "Andrew Sceenshaver", img: testimonial01 },
      },
   ];
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-9 col-xxl-8">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header d-sm-flex d-block pb-0 border-0">
                           <div className="mr-auto pr-3 mb-sm-0 mb-3">
                              <h4 className="text-black fs-20">Diet Menus</h4>
                              <p className="fs-13 mb-0 text-black">
                                 Lorem ipsum dolor sit amet, consectetur
                              </p>
                           </div>
                           <Link
                              to="/diet-food-menu"
                              className="btn rounded text-black border border-light"
                           >
                              <svg
                                 width={25}
                                 height={24}
                                 viewBox="0 0 25 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M3.31615 6H14.4744C14.4744 6.53043 14.6882 7.03914 15.0686 7.41421C15.4491 7.78929 15.9651 8 16.5032 8H18.532C19.07 8 19.5861 7.78929 19.9665 7.41421C20.347 7.03914 20.5607 6.53043 20.5607 6H21.5751C21.8442 6 22.1022 5.89464 22.2924 5.70711C22.4827 5.51957 22.5895 5.26522 22.5895 5C22.5895 4.73478 22.4827 4.48043 22.2924 4.29289C22.1022 4.10536 21.8442 4 21.5751 4H20.5607C20.5607 3.46957 20.347 2.96086 19.9665 2.58579C19.5861 2.21071 19.07 2 18.532 2H16.5032C15.9651 2 15.4491 2.21071 15.0686 2.58579C14.6882 2.96086 14.4744 3.46957 14.4744 4H3.31615C3.04711 4 2.7891 4.10536 2.59887 4.29289C2.40863 4.48043 2.30176 4.73478 2.30176 5C2.30176 5.26522 2.40863 5.51957 2.59887 5.70711C2.7891 5.89464 3.04711 6 3.31615 6ZM16.5032 4H18.532V5V6H16.5032V4ZM21.5751 11H12.4456C12.4456 10.4696 12.2319 9.96086 11.8514 9.58579C11.471 9.21071 10.9549 9 10.4169 9H8.38809C7.85002 9 7.334 9.21071 6.95353 9.58579C6.57306 9.96086 6.35931 10.4696 6.35931 11H3.31615C3.04711 11 2.7891 11.1054 2.59887 11.2929C2.40863 11.4804 2.30176 11.7348 2.30176 12C2.30176 12.2652 2.40863 12.5196 2.59887 12.7071C2.7891 12.8946 3.04711 13 3.31615 13H6.35931C6.35931 13.5304 6.57306 14.0391 6.95353 14.4142C7.334 14.7893 7.85002 15 8.38809 15H10.4169C10.9549 15 11.471 14.7893 11.8514 14.4142C12.2319 14.0391 12.4456 13.5304 12.4456 13H21.5751C21.8442 13 22.1022 12.8946 22.2924 12.7071C22.4827 12.5196 22.5895 12.2652 22.5895 12C22.5895 11.7348 22.4827 11.4804 22.2924 11.2929C22.1022 11.1054 21.8442 11 21.5751 11ZM8.38809 13V11H10.4169V12V13H8.38809ZM21.5751 18H18.532C18.532 17.4696 18.3182 16.9609 17.9378 16.5858C17.5573 16.2107 17.0413 16 16.5032 16H14.4744C13.9364 16 13.4203 16.2107 13.0399 16.5858C12.6594 16.9609 12.4456 17.4696 12.4456 18H3.31615C3.04711 18 2.7891 18.1054 2.59887 18.2929C2.40863 18.4804 2.30176 18.7348 2.30176 19C2.30176 19.2652 2.40863 19.5196 2.59887 19.7071C2.7891 19.8946 3.04711 20 3.31615 20H12.4456C12.4456 20.5304 12.6594 21.0391 13.0399 21.4142C13.4203 21.7893 13.9364 22 14.4744 22H16.5032C17.0413 22 17.5573 21.7893 17.9378 21.4142C18.3182 21.0391 18.532 20.5304 18.532 20H21.5751C21.8442 20 22.1022 19.8946 22.2924 19.7071C22.4827 19.5196 22.5895 19.2652 22.5895 19C22.5895 18.7348 22.4827 18.4804 22.2924 18.2929C22.1022 18.1054 21.8442 18 21.5751 18ZM14.4744 20V18H16.5032V19V20H14.4744Z"
                                    fill="black"
                                 />
                              </svg>
                              Filter
                           </Link>
                        </div>
                        <PerfectScrollbar
                           className="card-body loadmore-content pb-4 dz-scroll height750"
                           id="DietMenusContent"
                        >
                           {data.map((d, i) => (
                              <div
                                 className="media mb-3 pb-3 d-md-flex d-block menu-list"
                                 key={i}
                              >
                                 <ModalContent
                                    active={
                                       activesigleMenu === i ? true : false
                                    }
                                    onClick={() => setActivesigleMenu(false)}
                                 />
                                 <Link to="ecom-product-detail.html">
                                    <img
                                       className="rounded mr-3 mb-md-0 mb-3"
                                       src={d.img}
                                       alt
                                       width={130}
                                    />
                                 </Link>
                                 <div className="media-body col-lg-6 pl-0">
                                    <div className="d-flex mb-3 align-items-center">
                                       <img
                                          src={d.author.img}
                                          alt
                                          width={30}
                                          className="rounded-circle mr-2"
                                       />
                                       <span className="fs-14 text-black font-w500">
                                          {d.author.name}
                                       </span>
                                    </div>
                                    <h6 className="fs-16 font-w600">
                                       <Link
                                          to="ecom-product-detail.html"
                                          className="text-black"
                                       >
                                          {d.title}
                                       </Link>
                                    </h6>
                                    <p className="fs-14 mb-md-0 mb-3">
                                       {d.des}
                                    </p>
                                 </div>
                                 <ul className="m-md-auto mt-2 pr-4 mb-2">
                                    <li className="mb-2 text-nowrap">
                                       <i className="las la-clock scale5 mr-3" />
                                       <span className="fs-14 text-black text-nowrap font-w500">
                                          {d.time} mins{" "}
                                       </span>
                                    </li>
                                    <li className="mb-2 text-nowrap">
                                       <i className="las la-prescription-bottle scale5 mr-3" />
                                       <span className="text-nowrap fs-14 text-black font-w500">
                                          {d.ingridients} Ingridients
                                       </span>
                                    </li>
                                    <li className="text-nowrap">
                                       <i
                                          className="fa fa-star-o mr-3 scale5 text-warning"
                                          aria-hidden="true"
                                       />
                                       <span className="text-nowrap fs-14 text-black font-w500">
                                          {d.review} Reviews
                                       </span>
                                    </li>
                                 </ul>
                                 <Button
                                    onClick={() => setActivesigleMenu(i)}
                                    variant=""
                                    data-toggle="modal"
                                    data-target="#aAddDietMenus"
                                    className="rounded border mt-2 text-primary border-primary plus-icon m-sm-auto mt-2 d-flex align-items-center justify-content-center btn"
                                 >
                                    <i className="las la-plus scale-2" />
                                 </Button>
                              </div>
                           ))}
                        </PerfectScrollbar>
                        <div className="card-footer text-center border-0 pt-0 pb-4">
                           <Link
                              className="text-primary dz-load-more"
                              id="DietMenus"
                              to="/ecom-product-list"
                              rel="ajax/food-menu-list.html"
                           >
                              View more
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-4">
               <div className="row">
                  <div className="col-xl-12 col-lg-6">
                     <div className="card">
                        <div className="card-header pb-0 border-0">
                           <div className="mr-auto pr-3">
                              <h4 className="text-black fs-20">
                                 Current Diet Menu
                              </h4>
                              <p className="fs-13 mb-0">
                                 Lorem ipsum dolor sit ame
                              </p>
                           </div>
                           <Button
                              variant=""
                              data-toggle="modal"
                              data-target="#aAddDietMenus"
                              className="plus-icon text-white rounded bg-primary d-flex align-items-center justify-content-center"
                              onClick={() => setAddDietMenu(true)}
                           >
                              <i className="las la-plus scale-2" />
                           </Button>
                           <ModalContent
                              active={addDietMenu}
                              onClick={() => setAddDietMenu(false)}
                           />
                        </div>
                        <div className="card-body">
                           <div className="media mb-3">
                              <Link to="ecom-product-detail.html">
                                 <img
                                    src={menu08}
                                    alt
                                    className="rounded mr-3"
                                    width={86}
                                 />
                              </Link>
                              <div className="media-body">
                                 <h6 className="fs-16 font-w500">
                                    <Link
                                       to="ecom-product-detail.html"
                                       className="text-black"
                                    >
                                       Hearty Italian-Style White Bean Soup
                                    </Link>
                                 </h6>
                                 <span className="fs-14">by Andrew</span>
                              </div>
                           </div>
                           <ul className="m-md-auto mt-2 pr-4">
                              <li className="mb-2 text-nowrap">
                                 <i className="las la-clock scale5 mr-3" />
                                 <span className="fs-14 text-black text-nowrap font-w500">
                                    4-6 mins{" "}
                                 </span>
                              </li>
                              <li className="mb-2 text-nowrap">
                                 <i className="las la-calendar-alt scale5 mr-3" />
                                 <span className="fs-14 text-black  font-w500">
                                    Breakfast (Monday, Tuesday)
                                 </span>
                              </li>
                              <li className="mb-2 text-nowrap">
                                 <i className="las la-prescription-bottle scale5 mr-3" />
                                 <span className="text-nowrap fs-14 text-primary font-w500">
                                    8 Ingridients
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12 col-lg-6">
                     <div className="card">
                        <div className="card-header d-sm-flex d-block border-0 pb-4">
                           <div className="mr-auto pr-3">
                              <h4 className="text-black fs-20">
                                 Trending Ingridients
                              </h4>
                              <p className="fs-13 mb-0">
                                 Lorem ipsum dolor sit amet, consectetur
                              </p>
                           </div>
                        </div>
                        <PerfectScrollbar
                           className="card-body loadmore-content dz-scroll pb-0 pt-0 height340"
                           id="TrendingIngridientsContent"
                        >
                           <div className="media border-bottom py-3">
                              <Link to="ecom-product-detail.html">
                                 <img
                                    src={menu09}
                                    alt
                                    className="rounded mr-3"
                                    width={50}
                                 />
                              </Link>
                              <div className="pr-3 mr-auto media-body">
                                 <h6 className="fs-16 font-w600 mb-0">
                                    <Link
                                       to="ecom-product-detail.html"
                                       className="text-black"
                                    >
                                       Strawberry Fruit
                                    </Link>
                                 </h6>
                                 <span className="fs-12">Vitamin A, B, C</span>
                              </div>
                              <div className="text-center">
                                 <span className="d-block">
                                    <svg
                                       width={19}
                                       height={9}
                                       viewBox="0 0 18 9"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M9 0L0 9H18L9 0Z"
                                          fill="#6EC51E"
                                       />
                                    </svg>
                                 </span>
                                 <span className="d-block fs-16 text-black font-w600">
                                    #1
                                 </span>
                              </div>
                           </div>
                           <div className="media border-bottom py-3">
                              <Link to="ecom-product-detail.html">
                                 <img
                                    src={menu10}
                                    alt
                                    className="rounded mr-3"
                                    width={50}
                                 />
                              </Link>
                              <div className="pr-3 mr-auto media-body">
                                 <h6 className="fs-16 font-w600 mb-0">
                                    <Link
                                       to="ecom-product-detail.html"
                                       className="text-black"
                                    >
                                       Bananas Fruit
                                    </Link>
                                 </h6>
                                 <span className="fs-12">Vitamin A, B, C</span>
                              </div>
                              <div className="text-center">
                                 <span className="d-block">
                                    <svg
                                       width={19}
                                       height={9}
                                       viewBox="0 0 18 9"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M9 0L0 9H18L9 0Z"
                                          fill="#6EC51E"
                                       />
                                    </svg>
                                 </span>
                                 <span className="d-block fs-16 text-black font-w600">
                                    #2
                                 </span>
                              </div>
                           </div>
                           <div className="media border-bottom py-3">
                              <Link to="ecom-product-detail.html">
                                 <img
                                    src={menu11}
                                    alt
                                    className="rounded mr-3"
                                    width={50}
                                 />
                              </Link>
                              <div className="pr-3 mr-auto media-body">
                                 <h6 className="fs-16 font-w600 mb-0">
                                    <Link
                                       to="ecom-product-detail.html"
                                       className="text-black"
                                    >
                                       Orange Fruit
                                    </Link>
                                 </h6>
                                 <span className="fs-12">Vitamin A, B, C</span>
                              </div>
                              <div className="text-center">
                                 <span className="d-block">
                                    <svg
                                       width={19}
                                       height={9}
                                       viewBox="0 0 18 9"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M9 9.00006L18 6.10352e-05H9L0 6.10352e-05L9 9.00006Z"
                                          fill="#C51E1E"
                                       />
                                    </svg>
                                 </span>
                                 <span className="d-block fs-16 text-black font-w600">
                                    #3
                                 </span>
                              </div>
                           </div>
                           <div className="media border-bottom py-3">
                              <Link to="ecom-product-detail.html">
                                 <img
                                    src={menu12}
                                    alt
                                    className="rounded mr-3"
                                    width={50}
                                 />
                              </Link>
                              <div className="pr-3 mr-auto media-body">
                                 <h6 className="fs-16 font-w600 mb-0">
                                    <Link
                                       to="ecom-product-detail.html"
                                       className="text-black"
                                    >
                                       Grapes Fruit
                                    </Link>
                                 </h6>
                                 <span className="fs-12">Vitamin A, B, C</span>
                              </div>
                              <div className="text-center">
                                 <span className="d-block">
                                    <svg
                                       width={19}
                                       height={9}
                                       viewBox="0 0 18 9"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M9 0L0 9H18L9 0Z"
                                          fill="#6EC51E"
                                       />
                                    </svg>
                                 </span>
                                 <span className="d-block fs-16 text-black font-w600">
                                    #4
                                 </span>
                              </div>
                           </div>
                        </PerfectScrollbar>
                        <div className="card-footer text-center border-0 pt-3 pb-4">
                           <Link
                              className="text-primary dz-load-more"
                              id="TrendingIngridients"
                              to="/ecom-product-list"
                           >
                              View more
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default FoodMenu;
