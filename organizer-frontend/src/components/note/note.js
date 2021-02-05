import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./note.module.scss";
import Delete from "../../views/delete/delete";

const Note = ({ item }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Card bg="light" text="dark" style={{ width: "18rem", height:"300px",}} className="mb-2">
        <Card.Header className={styles.category}>{item.category}</Card.Header>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.note}</Card.Text>
        </Card.Body>
        <Button variant="info">Watch</Button>
        <Button variant="outline-danger" onClick={() => setOpenDeleteModal(true)}>
          Delete
        </Button>
      </Card>
      <Delete show={openDeleteModal} onHide={() => setOpenDeleteModal(false)} item={item} />
    </div>
  );
};

export default Note;
