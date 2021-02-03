import React from 'react';
import{Modal, Button,Form} from "react-bootstrap";
const Create = ({type, ...props}) =>{
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {type}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form method="post">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Node.js" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Category</Form.Label>
    <Form.Control as="select">
      <option>Programming</option>
      <option>Wedding</option>
      <option>Climbing</option>
      <option>Hint</option>
      <option>House</option>
      <option>Money</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Describe the {type}</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button type="submit">Create {type}</Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default Create;