import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { userLogin } from "../../actions";
import styles from './login.module.scss';

const Login = ({ userLogin, type, ...props }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
        <Modal.Title id="contained-modal-title-vcenter" className={styles.title}>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            userLogin(email,password,setSuccess,setFailure);
          }}
        >
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
              <Button type="submit" variant="success" size="lg" block>Log in</Button>
          </div>
          
          {success && (
            <Alert variant="success">
              Congratulation ! You're log in !
            </Alert>
          )}
          {failure && (
            <Alert variant="danger">
              Sorry ! Login failure. Please check your email or password
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
    userLogin: (email, password,success,failure) =>
    dispatch(userLogin(email, password,success,failure)),
});
export default connect(null, mapDipatchToProps)(Login);
