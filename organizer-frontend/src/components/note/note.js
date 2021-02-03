import React from "react";
import { Card,Button } from "react-bootstrap";
import styles from './note.module.scss';
const Note = ({ item }) => {
  return (
      <div className={styles.wrapper}>
          <Card bg="dark" text="light" style={{ width: "18rem" }} className="mb-2">
      <Card.Header>{item.category}</Card.Header>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.note}</Card.Text>
      </Card.Body>
      <Button variant="info">Watch</Button>
      <Button variant="warning">Delete</Button>
    </Card>
      </div>
  );
};

export default Note;
