import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Row, Col, Card } from "react-bootstrap";

const UiTypography = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Typography" motherMenu="Bootstrap" />
         <Row>
            <Col xs={12}>
               <Card>
                  <Card.Body>
                     <Row className="justify-content-between">
                        <Col lg={4} className="mb-3">
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 Typography
                              </h4>
                              <h6>
                                 Use tags <code>h1 to h6</code> for get desire
                                 heading.
                              </h6>
                           </div>
                           <div className="card-content">
                              <h1>h1. Bootstrap heading</h1>
                              <h2>h2. Bootstrap heading</h2>
                              <h3>h3. Bootstrap heading</h3>
                              <h4>h4. Bootstrap heading</h4>
                              <h5>h5. Bootstrap heading</h5>
                              <h6>h6. Bootstrap heading</h6>
                           </div>
                        </Col>
                        <Col lg={3}>
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 Paragraph with justify
                              </h4>
                              <p>
                                 Use tags <code>text-justify</code> for get
                                 desire paragraph.
                              </p>
                           </div>
                           <div className="card-content">
                              <p className="text-justify">
                                 Ambitioni dedisse scripsisse iudicaretur. Cras
                                 mattis iudicium purus sit amet fermentum. Donec
                                 sed odio operae, eu vulputate felis rhoncus.
                                 Praeterea iter est quasdam res quas ex communi.
                                 At nos hinc posthac, sitientis piros Afros.
                                 Petierunt uti sibi concilium totius Galliae in
                                 diem certam indicere. Cras mattis iudicium
                                 purus sit amet fermentum.
                              </p>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 Alignment text
                              </h4>
                              <p>
                                 Use tags{" "}
                                 <code>text-left, text-center, text-right</code>{" "}
                                 for get desire text.
                              </p>
                           </div>
                           <div className="card-content">
                              <p className="text-left">
                                 Left aligned text on all viewport sizes.
                              </p>
                              <p className="text-center">
                                 Center aligned text on all viewport sizes.
                              </p>
                              <p className="text-right">
                                 Right aligned text on all viewport sizes.
                              </p>
                           </div>
                        </Col>
                        <Col xs={12}>
                           <hr />
                           <br />
                        </Col>
                        <Col lg={6}>
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 View port text
                              </h4>
                              <p>
                                 Use tags{" "}
                                 <code>
                                    text-sm-left, text-md-left, text-lg-left,
                                    text-xl-left
                                 </code>{" "}
                                 for get desire text.
                              </p>
                           </div>
                           <div className="card-content">
                              <p className="text-sm-left">
                                 Left aligned text on viewports sized SM (small)
                                 or wider.
                              </p>
                              <p className="text-md-left">
                                 Left aligned text on viewports sized MD
                                 (medium) or wider.
                              </p>
                              <p className="text-lg-left">
                                 Left aligned text on viewports sized LG (large)
                                 or wider.
                              </p>
                              <p className="text-xl-left">
                                 Left aligned text on viewports sized XL
                                 (extra-large) or wider.
                              </p>
                           </div>
                        </Col>
                        <Col lg={6}>
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 Font weight and italics
                              </h4>
                              <p>
                                 Use tags{" "}
                                 <code>
                                    , font-weight-normal, font-weight-italic
                                 </code>{" "}
                                 for get desire text.
                              </p>
                           </div>
                           <div className="card-content">
                              <p className="">Bold text.</p>
                              <p className="font-weight-normal">
                                 Normal weight text.
                              </p>
                              <p className="font-italic">Italic text.</p>
                           </div>
                        </Col>
                        <Col xs={12}>
                           <hr />
                           <br />
                        </Col>
                        <Col lg={4}>
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 Text colors
                              </h4>
                              <p>Use tags below class for get desire text.</p>
                           </div>
                           <div className="card-content">
                              <p className="text-muted">
                                 This is an example of muted text. Add class{" "}
                                 <code>text-muted</code>
                              </p>
                              <p className="text-primary">
                                 This is an example of primary text. Add class{" "}
                                 <code>text-primary</code>
                              </p>
                              <p className="text-success">
                                 This is an example of success text. Add class{" "}
                                 <code>text-success</code>
                              </p>
                              <p className="text-info">
                                 This is an example of info text. Add class{" "}
                                 <code>text-info</code>
                              </p>
                              <p className="text-warning">
                                 This is an example of warning text. Add class{" "}
                                 <code>text-warning</code>
                              </p>
                              <p className="text-danger">
                                 This is an example of danger text. Add class{" "}
                                 <code>text-danger</code>
                              </p>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 Address
                              </h4>
                              <p>
                                 Use <code>address</code> for get desire
                                 address.
                              </p>
                           </div>
                           <div className="card-content">
                              <address>
                                 <strong>Twitter, Inc.</strong>
                                 <br />
                                 795 Folsom Ave, Suite 600
                                 <br />
                                 San Francisco, CA 94107
                                 <br />
                                 <abbr title="Phone">P:</abbr>(123) 456-7890
                              </address>
                              <address>
                                 <strong>George Belly</strong>
                                 <br />
                                 <a href="mailto:#">info@example.com</a>
                              </address>
                           </div>
                        </Col>
                        <Col lg={4}>
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title">
                                 Blockquotes
                              </h4>
                              <p>
                                 Use <code>blockquote</code> for get desire
                                 address.
                              </p>
                           </div>
                           <blockquote>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer posuere erat a ante.
                           </blockquote>
                           <blockquote>
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur
                                 adipiscing elit. Integer posuere erat a ante.
                              </p>
                              <small>
                                 {" "}
                                 - Someone famous in{" "}
                                 <cite title="Source Title">Source Title</cite>
                              </small>
                           </blockquote>
                        </Col>
                        <Col xs={12}>
                           <hr />
                           <br />
                        </Col>
                        <Col lg={4} className=" mb-3">
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title mb-1">
                                 Ol Listing
                              </h4>
                              <p>
                                 Use tags <code>ol {">"} li</code> for get
                                 desire ol list.
                              </p>
                           </div>
                           <ol>
                              <li>Lorem ipsum dolor sit amet</li>
                              <li>Consectetur adipiscing elit</li>
                              <li>Integer molestie lorem at massa</li>
                           </ol>
                        </Col>
                        <Col lg={4} className=" mb-3">
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title mb-1">
                                 Ul Listing
                              </h4>
                              <p>
                                 Use tags <code>ul {">"} li</code> for get
                                 desire ol list.
                              </p>
                           </div>
                           <ul>
                              <li>Lorem ipsum dolor sit amet</li>
                              <li>Consectetur adipiscing elit</li>
                              <li>Integer molestie lorem at massa</li>
                           </ul>
                        </Col>
                        <Col lg={4} className=" mb-3">
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title mb-1">
                                 Description Text
                              </h4>
                              <p>
                                 Use tags <code>dl {">"} dt</code> for get
                                 desire ol list.
                              </p>
                           </div>
                           <dl>
                              <dt>Standard Description List</dt>
                              <dd>Description Text</dd>
                              <dt>Description List Title</dt>
                              <dd>Description List Text</dd>
                           </dl>
                        </Col>
                        <Col xs={12}>
                           <hr />
                           <br />
                        </Col>
                        <Col lg={4} className=" mb-3">
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title mb-1">
                                 Fancy Listing 1
                              </h4>
                              <p>
                                 Use class <code>list-icons</code> to ul for get
                                 desire ol list.
                              </p>
                           </div>
                           <ul className="list-icons">
                              <li>
                                 <span className="align-middle mr-2">
                                    <i className="ti-angle-right"></i>
                                 </span>{" "}
                                 Lorem ipsum dolor sit amet
                              </li>
                              <li>
                                 <span className="align-middle mr-2">
                                    <i className="ti-angle-right"></i>
                                 </span>{" "}
                                 Consectetur adipiscing elit
                              </li>
                              <li>
                                 <span className="align-middle mr-2">
                                    <i className="ti-angle-right"></i>
                                 </span>{" "}
                                 Integer molestie lorem at massa
                              </li>
                           </ul>
                        </Col>
                        <Col lg={4} className=" mb-3">
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title mb-1">
                                 Fancy Listing with href
                              </h4>
                              <p>
                                 Use class <code>list-icons</code> to ul for get
                                 desire ol list.
                              </p>
                           </div>
                           <ul className="list-icons">
                              <li>
                                 <a href="#">
                                    <span className="align-middle mr-2">
                                       <i className="fa fa-check text-info"></i>
                                    </span>{" "}
                                    Lorem ipsum dolor sit amet
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <span className="align-middle mr-2">
                                       <i className="fa fa-check text-info"></i>
                                    </span>
                                    Consectetur adipiscing elit
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <span className="align-middle mr-2">
                                       <i className="fa fa-check text-info"></i>
                                    </span>
                                    Integer molestie lorem at massa
                                 </a>
                              </li>
                           </ul>
                        </Col>
                        <Col lg={4} className=" mb-3">
                           <div className="mb-4">
                              <h4 className="card-title card-intro-title mb-1">
                                 Fancy Listing with href
                              </h4>
                              <p>
                                 Use class <code>list-icons</code> to ul for get
                                 desire ol list.
                              </p>
                           </div>
                           <ul className="list-icons">
                              <li>
                                 <a href="#">
                                    <span className="align-middle mr-2">
                                       <i className="fa fa-chevron-right"></i>
                                    </span>{" "}
                                    Lorem ipsum dolor sit amet
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <span className="align-middle mr-2">
                                       <i className="fa fa-chevron-right"></i>
                                    </span>
                                    Consectetur adipiscing elit
                                 </a>
                              </li>
                              <li>
                                 <a href="#">
                                    <span className="align-middle mr-2">
                                       <i className="fa fa-chevron-right"></i>
                                    </span>
                                    Integer molestie lorem at massa
                                 </a>
                              </li>
                           </ul>
                        </Col>
                     </Row>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
   );
};

export default UiTypography;
