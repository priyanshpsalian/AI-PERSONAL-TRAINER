import React, { Fragment } from "react";
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";
import PageTitle from "../../layouts/PageTitle";
import JobieNav from "../../layouts/nav";

const UiButton = () => {
   return (
      <Fragment>
         <PageTitle activeMenu="Buttons" motherMenu="Bootstrap" />
         <div className="btn-page">
            <Row>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           Default button style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="success">Success</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="warning">Warning</Button>
                        <Button variant="info">Info</Button>
                        <Button variant="light">Light</Button>
                        <Button variant="dark">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           Button Light style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary light">Primary</Button>
                        <Button variant="secondary light">Secondary</Button>
                        <Button variant="success light">Success</Button>
                        <Button variant="danger light">Danger</Button>
                        <Button variant="warning light">Warning</Button>
                        <Button variant="info light">Info</Button>
                        <Button variant="light light">Light</Button>
                        <Button variant="dark light">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Outline Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           Default outline button style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="outline-primary">Primary</Button>
                        <Button variant="outline-secondary">Secondary</Button>
                        <Button variant="outline-success">Success</Button>
                        <Button variant="outline-danger">Danger</Button>
                        <Button variant="outline-warning">Warning</Button>
                        <Button variant="outline-info">Info</Button>
                        <Button variant="outline-light">Light</Button>
                        <Button variant="outline-dark">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Button Sizes</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-lg .btn-sm .btn-xs</code> to change
                           the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary btn-lg">Large Button</Button>
                        <Button variant="primary">Default Button</Button>
                        <Button variant="primary btn-sm">Small Button</Button>
                        <Button variant="primary btn-xs">
                           Extra Small Button
                        </Button>
                        <Button variant="primary btn-xxs">
                           Extra Small Button
                        </Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Outline Button Sizes</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-lg .btn-sm .btn-xs</code> to change
                           the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="outline-primary btn-lg">
                           Large button
                        </Button>
                        <Button variant="outline-primary">
                           Default button
                        </Button>
                        <Button variant="outline-primary btn-md">
                           Small button
                        </Button>
                        <Button variant="outline-primary btn-sm">
                           Small button
                        </Button>
                        <Button variant="outline-primary btn-xs">
                           Extra small button
                        </Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Rounded Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-rounded</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Card.Title></Card.Title>
                        <Button variant="primary btn-rounded">Primary</Button>
                        <Button variant="secondary btn-rounded">
                           Secondary
                        </Button>
                        <Button variant="success btn-rounded">Success</Button>
                        <Button variant="danger btn-rounded">Danger</Button>
                        <Button variant="warning btn-rounded">Warning</Button>
                        <Button variant="info btn-rounded">Info</Button>
                        <Button variant="light btn-rounded">Light</Button>
                        <Button variant="dark btn-rounded">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Rounded outline Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-rounded</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <div className="rounded-button">
                           <Button variant="outline-primary btn-rounded">
                              Primary
                           </Button>
                           <Button variant="outline-secondary btn-rounded">
                              Secondary
                           </Button>
                           <Button variant="outline-success btn-rounded">
                              Success
                           </Button>
                           <Button variant="outline-danger btn-rounded">
                              Danger
                           </Button>
                           <Button variant="outline-warning btn-rounded">
                              Warning
                           </Button>
                           <Button variant="outline-info btn-rounded">
                              Info
                           </Button>
                           <Button variant="outline-light btn-rounded">
                              Light
                           </Button>
                           <Button variant="outline-dark btn-rounded">
                              Dark
                           </Button>
                        </div>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Button Right icons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-icon-right</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary">
                           Add to cart{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-shopping-cart" />
                           </span>
                        </Button>
                        <Button variant="info">
                           Add to wishlist{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-heart" />
                           </span>
                        </Button>
                        <Button variant="danger">
                           Remove{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-close" />
                           </span>
                        </Button>
                        <Button variant="secondary">
                           Sent message{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-envelope" />
                           </span>
                        </Button>
                        <Button variant="warning">
                           Add bookmark{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-star" />
                           </span>
                        </Button>
                        <Button variant="success">
                           Success{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-check" />
                           </span>
                        </Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Button Left icons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-icon-left</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary btn-rounded">
                           <span className="btn-icon-left text-primary">
                              <i className="fa fa-shopping-cart" />
                           </span>
                           Buy
                        </Button>
                        <Button variant="info btn-rounded">
                           <span className="btn-icon-left text-info">
                              <i className="fa fa-plus color-info" />
                           </span>
                           Add
                        </Button>
                        <Button variant="danger btn-rounded">
                           <span className="btn-icon-left text-danger">
                              <i className="fa fa-envelope color-danger" />
                           </span>
                           Email
                        </Button>
                        <Button variant="secondary btn-rounded">
                           <span className="btn-icon-left text-secondary">
                              <i className="fa fa-share-alt color-secondary" />{" "}
                           </span>
                           Share
                        </Button>
                        <Button variant="warning btn-rounded">
                           <span className="btn-icon-left text-warning">
                              <i className="fa fa-download color-warning" />
                           </span>
                           Download
                        </Button>
                        <Button variant="success btn-rounded">
                           <span className="btn-icon-left text-success">
                              <i className="fa fa-upload color-success" />
                           </span>
                           Upload
                        </Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Square Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-square</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary btn-square">Primary</Button>
                        <Button variant="secondary btn-square">
                           Secondary
                        </Button>
                        <Button variant="success btn-square">Success</Button>
                        <Button variant="danger btn-square">Danger</Button>
                        <Button variant="warning btn-square">Warning</Button>
                        <Button variant="info btn-square">Info</Button>
                        <Button variant="light btn-square">Light</Button>
                        <Button variant="dark btn-square">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Square Outline Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-square</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="outline-primary btn-square">
                           Primary
                        </Button>
                        <Button variant="outline-secondary btn-square">
                           Secondary
                        </Button>
                        <Button variant="outline-success btn-square">
                           Success
                        </Button>
                        <Button variant="outline-danger btn-square">
                           Danger
                        </Button>
                        <Button variant="outline-warning btn-square">
                           Warning
                        </Button>
                        <Button variant="outline-info btn-square">Info</Button>
                        <Button variant="outline-light btn-square">
                           Light
                        </Button>
                        <Button variant="outline-dark btn-square">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Rounded Button</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-rounded</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary btn-rounded">Primary</Button>
                        <Button variant="secondary btn-rounded">
                           Secondary
                        </Button>
                        <Button variant="success btn-rounded">Success</Button>
                        <Button variant="danger btn-rounded">Danger</Button>
                        <Button variant="warning btn-rounded">Warning</Button>
                        <Button variant="info btn-rounded">Info</Button>
                        <Button variant="light btn-rounded">Light</Button>
                        <Button variant="dark btn-rounded">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Rounded outline Buttons</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>.btn-rounded</code> to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="outline-primary btn-rounded">
                           Primary
                        </Button>
                        <Button variant="outline-secondary btn-rounded">
                           Secondary
                        </Button>
                        <Button variant="outline-success btn-rounded">
                           Success
                        </Button>
                        <Button variant="outline-danger btn-rounded">
                           Danger
                        </Button>
                        <Button variant="outline-warning btn-rounded">
                           Warning
                        </Button>
                        <Button variant="outline-info btn-rounded">Info</Button>
                        <Button variant="outline-light btn-rounded">
                           Light
                        </Button>
                        <Button variant="outline-dark btn-rounded">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Dropdown Button</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           Default dropdown button style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <ButtonGroup>
                           <Dropdown>
                              <Dropdown.Toggle variant="primary">
                                 Primary
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </ButtonGroup>
                        <ButtonGroup>
                           <Dropdown>
                              <Dropdown.Toggle variant="secondary">
                                 Secondary
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </ButtonGroup>
                        <ButtonGroup>
                           <Dropdown>
                              <Dropdown.Toggle variant="success">
                                 Success
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </ButtonGroup>
                        <ButtonGroup>
                           <Dropdown>
                              <Dropdown.Toggle variant="warning">
                                 Warning
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </ButtonGroup>

                        <ButtonGroup>
                           <Dropdown>
                              <Dropdown.Toggle variant="danger">
                                 Danger
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                                 <Dropdown.Item href="javascript:void()">
                                    Dropdown link
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </ButtonGroup>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Buttons Transparent</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           Button transparent style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary tp-btn">Primary</Button>
                        <Button variant="secondary tp-btn">Secondary</Button>
                        <Button variant="success tp-btn">Success</Button>
                        <Button variant="danger tp-btn">Danger</Button>
                        <Button variant="warning tp-btn">Warning</Button>
                        <Button variant="info tp-btn">Info</Button>
                        <Button variant="light tp-btn">Light</Button>
                        <Button variant="dark tp-btn">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Buttons Transparent Light</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           Button transparent light style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="primary tp-btn-light">Primary</Button>
                        <Button variant="secondary tp-btn-light">
                           Secondary
                        </Button>
                        <Button variant="success tp-btn-light">Success</Button>
                        <Button variant="danger tp-btn-light">Danger</Button>
                        <Button variant="warning tp-btn-light">Warning</Button>
                        <Button variant="info tp-btn-light">Info</Button>
                        <Button variant="tp-btn-light text-black">Light</Button>
                        <Button variant="dark tp-btn-light">Dark</Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Disabled Button</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add <code>disabled="disabled"</code> to change the
                           style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button
                           variant="primary btn-rounded"
                           disabled="disabled"
                        >
                           Primary
                        </Button>
                        <Button
                           variant="secondary btn-rounded"
                           disabled="disabled"
                        >
                           Secondary
                        </Button>
                        <Button
                           variant="success btn-rounded"
                           disabled="disabled"
                        >
                           Success
                        </Button>
                        <Button
                           variant="danger btn-rounded"
                           disabled="disabled"
                        >
                           Danger
                        </Button>
                        <Button
                           variant="warning btn-rounded"
                           disabled="disabled"
                        >
                           Warning
                        </Button>
                        <Button variant="info btn-rounded" disabled="disabled">
                           Info
                        </Button>
                     </div>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card>
                     <Card.Header className="d-block">
                        <Card.Title>Socia icon Buttons with Name</Card.Title>
                        <Card.Text className="mb-0 subtitle">
                           add{" "}
                           <code>
                              .btn-facebook, .btn-twitter, .btn-youtube...
                           </code>{" "}
                           to change the style
                        </Card.Text>
                     </Card.Header>
                     <div className="card-body">
                        <Button variant="facebook">
                           Facebook{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-facebook" />
                           </span>
                        </Button>
                        <Button variant="twitter">
                           Twitter{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-twitter" />
                           </span>
                        </Button>
                        <Button variant="youtube">
                           Youtube{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-youtube" />
                           </span>
                        </Button>
                        <Button variant="instagram">
                           Instagram{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-instagram" />
                           </span>
                        </Button>
                        <Button variant="pinterest">
                           Pinterest{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-pinterest" />
                           </span>
                        </Button>
                        <Button variant="linkedin">
                           Linkedin{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-linkedin" />
                           </span>
                        </Button>
                        <Button variant="google-plus">
                           Google +{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-google-plus" />
                           </span>
                        </Button>
                        <Button variant="google">
                           Google{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-google" />
                           </span>
                        </Button>
                        <Button variant="snapchat">
                           Snapchat{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-snapchat" />
                           </span>
                        </Button>
                        <Button variant="whatsapp">
                           Whatsapp{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-whatsapp" />
                           </span>
                        </Button>
                        <Button variant="tumblr">
                           Tumblr{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-tumblr" />
                           </span>
                        </Button>
                        <Button variant="reddit">
                           Reddit{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-reddit" />
                           </span>
                        </Button>
                        <Button variant="spotify">
                           Spotify{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-spotify" />
                           </span>
                        </Button>
                        <Button variant="yahoo">
                           Yahoo{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-yahoo" />
                           </span>
                        </Button>
                        <Button variant="dribbble">
                           Dribbble{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-dribbble" />
                           </span>
                        </Button>
                        <Button variant="skype">
                           Skype{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-skype" />
                           </span>
                        </Button>
                        <Button variant="quora">
                           Quora{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-quora" />
                           </span>
                        </Button>
                        <Button variant="vimeo">
                           Vimeo{" "}
                           <span className="btn-icon-right">
                              <i className="fa fa-vimeo" />
                           </span>
                        </Button>
                     </div>
                  </Card>
               </Col>
            </Row>
         </div>
      </Fragment>
   );
};

export default UiButton;
