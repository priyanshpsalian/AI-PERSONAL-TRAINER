import React from "react";
import PageTitle from "../../layouts/PageTitle";
import {
   Row,
   Col,
   Card,
   Popover,
   OverlayTrigger,
   Button,
} from "react-bootstrap";

const UiPopOver = () => {
   return (
      <div className="h-80">
         <PageTitle activeMenu="Popover" motherMenu="Bootstrap" />
         <Row>
            <Col>
               <Card>
                  <Card.Header>
                     <Card.Title>Bootstrap popover</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Card.Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Magnam laborum dolorum culpa a maiores officia ab.
                        Cumque necessitatibus voluptates soluta, ullam numquam
                        nulla. Et a architecto veritatis sint, autem cupiditate
                        iure illo pariatur eum, praesentium numquam ea quaerat
                        ipsam? Corrupti nobis illo itaque quae, qui numquam vero
                        ipsa, reiciendis sit repudiandae molestiae natus vel
                        voluptatibus exercitationem ducimus neque harum ad,
                        commodi excepturi repellat eos fugiat minus eius.
                        Doloremque itaque repudiandae saepe quia temporibus?
                        Vitae, reprehenderit aliquam facilis qui at quis
                        provident in maiores illo laborum, voluptatem recusandae
                        cupiditate nemo. Nulla iusto ad consequatur
                        reprehenderit quod accusamus, vitae, blanditiis quae ut
                        tenetur nobis animi dolorum consectetur dignissimos amet
                        illo provident nam obcaecati eligendi molestias tempora?
                        Ad nam nobis eaque consequatur tempore tenetur eius
                        ipsum reprehenderit dignissimos inventore. Id recusandae
                        nemo dicta rerum. Distinctio itaque, veniam dolore
                        inventore aliquid assumenda neque. Deserunt!
                     </Card.Text>
                     <div className="bootstrap-popover-wrapper">
                        <div className="bootstrap-popover d-inline-block">
                           {["Left", "Top", "Bottom", "Right"].map(
                              (placement, i) => (
                                 <OverlayTrigger
                                    trigger="click"
                                    key={placement}
                                    placement={placement.toLowerCase()}
                                    overlay={
                                       <Popover
                                          id={`popover-positioned-${placement.toLowerCase()}`}
                                       >
                                          <Popover.Title as="h3">{`Popover on ${placement}`}</Popover.Title>
                                          <Popover.Content>
                                             Lorem ipsum dolor sit amet,
                                             consectetur adipisicing elit, sed
                                             do eiusmod tempor.
                                          </Popover.Content>
                                       </Popover>
                                    }
                                 >
                                    <Button
                                       variant="primary"
                                       size="sm"
                                       className="mr-3 mt-3"
                                    >
                                       {placement}
                                    </Button>
                                 </OverlayTrigger>
                              )
                           )}
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
   );
};

export default UiPopOver;
