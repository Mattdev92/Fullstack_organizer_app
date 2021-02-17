import React, { useState } from "react";
import styles from "./navigation.module.scss";
import {
  Navbar,
  NavDropdown,
  Form,
  Nav,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Create from "../../views/create/create";
import Register from "../../views/register/register";
import Login from "../../views/login/login";
import {connect} from 'react-redux';
import {logOut} from '../../actions';
const Navigation = ({token,logOut}) => {
  const [createModal, setCreateModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <>
      <Create show={createModal} onHide={() => setCreateModal(false)} />
      <Register show={showRegisterModal} onHide={() => setShowRegisterModal(false)} />
      <Login show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      <Navbar expand="lg" className={styles.customNav} sticky="top">
        <Navbar.Brand href="/">
          <div className={styles.image} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/notes">Notes Manager</Nav.Link>
            <NavDropdown title="Create zone" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>setCreateModal(true)}>
                New note
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Form inline>
            {
              !token&&<Button variant="info" onClick={()=>setShowRegisterModal(true)}>Register</Button>
            }
            
          </Form>
          <Form inline>
            {
              !token?<Button variant="success" onClick={()=>setShowLoginModal(true)}>Login</Button>:<Button variant="danger" onClick={logOut}>Logout</Button>
            }
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
const mapStateToProps = (state)=>{
  const {token}=state;
  return {token};
  }
const mapDispatchToProps = dispatch=>({
  logOut: ()=>dispatch(logOut())
})
export default connect(mapStateToProps,mapDispatchToProps)(Navigation);
