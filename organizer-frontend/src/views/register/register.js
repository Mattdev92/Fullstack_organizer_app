import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { userRegister } from "../../actions";
import styles from './register.module.scss';

const Register = ({ userRegister, type, ...props }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={styles.title}>
        <Modal.Title id="contained-modal-title-vcenter" className={styles.title}>Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            userRegister(name,email,password,setSuccess,setFailure);
          }}
        >
          <Form.Group controlId="name">
            <Form.Label>name</Form.Label>
            <Form.Control
            required
              type="text"
              placeholder="name"
              onChange={(event) => setName(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
            required
              type="email"
              placeholder="meail@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
            required
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <div className={styles.registerButton}>
              <Button type="submit" variant="success" size="lg" block>Register</Button>
          </div>
          
          {success && (
            <Alert variant="success">
              Congratulation ! Registration complete !
            </Alert>
          )}
          {failure && (
            <Alert variant="danger">
              Sorry ! Registration denied
            </Alert>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{setSuccess(false);setFailure(false); props.onHide()}} variant="danger">Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapDipatchToProps = (dispatch) => ({
    userRegister: (userName, email, password,success,failure) =>
    dispatch(userRegister(userName, email, password,success,failure)),
});
export default connect(null, mapDipatchToProps)(Register);
