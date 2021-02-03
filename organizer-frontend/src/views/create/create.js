import React,{useState} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import {connect} from 'react-redux';
import {CreateNotes} from '../../actions'
const Create = ({CreateNotes, type, ...props }) => {
  const [category,setCategory]=useState('Programming')
  const [note,setNote]=useState('Important Note')
  const [title,setTitle]=useState('About React.js')
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{type}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(event)=>{CreateNotes(title,note,category);  event.preventDefault(); }}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Node.js" onChange={(event)=>setTitle(event.target.value)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" name="category" onChange={(event)=>setCategory(event.target.value)}>
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
            <Form.Control as="textarea" rows={3} name="note" onChange={(event)=>setNote(event.target.value)} />
          </Form.Group>
          <Button type="submit">Create {type}</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDipatchToProps = (dispatch)=>({
  CreateNotes: (title,note,category)=>dispatch(CreateNotes(title,note, category))
})
export default connect(null,mapDipatchToProps)(Create);
