import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { DeleteNote } from "../../actions";
const Delete = ({ DeleteNote, item, type, ...props }) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Deleting Note
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure that you want to delete the note ?</p> 
        <Button
          onClick={() => {
            DeleteNote(item.id);
          }}
          variant="danger"
        >
          Delete {type}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary"onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDipatchToProps = (dispatch) => ({
  DeleteNote: (id) => dispatch(DeleteNote(id)),
});
export default connect(null, mapDipatchToProps)(Delete);
