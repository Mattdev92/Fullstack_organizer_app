import React from "react";
import { Card,Button } from "react-bootstrap";
import styles from './note.module.scss';
import {connect} from 'react-redux';
import {DeleteNote} from '../../actions'
const Note = ({ item,DeleteNote }) => {
  return (
      <div className={styles.wrapper}>
          <Card bg="dark" text="light" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>{item.category}</Card.Header>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.note}</Card.Text>
      </Card.Body>
      <Button variant="info">Watch</Button>
      <Button variant="warning" onClick={()=>DeleteNote(item.id)}>Delete</Button>
    </Card>
      </div>
  );
};
const mapDispatchToProps=(dispatch)=>({
  DeleteNote: (id)=>dispatch(DeleteNote(id))
})
export default connect(null,mapDispatchToProps)(Note);
