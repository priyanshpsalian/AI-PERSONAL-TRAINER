import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalContent = ({ onClick, active }) => {
   return (
      <Modal className=" fade" id="aAddDietMenus" show={active}>
         <div className="modal-content">
            <Modal.Header className="modal-header">
               <Modal.Title className="modal-title">Diet Menus</Modal.Title>
               <Button
                  variant=""
                  className="close"
                  data-dismiss="modal"
                  onClick={() => onClick()}
               >
                  <span>×</span>
               </Button>
            </Modal.Header>
            <Modal.Body className="modal-body">
               <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                     <label>Running</label>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Km"
                     />
                  </div>
                  <div className="form-group">
                     <label>Cycling</label>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Km"
                     />
                  </div>
                  <div className="form-group">
                     <label>Yoga</label>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="hr"
                     />
                  </div>
                  <button className="btn btn-primary">Submit</button>
               </form>
            </Modal.Body>
         </div>
      </Modal>
   );
};

export default ModalContent;
