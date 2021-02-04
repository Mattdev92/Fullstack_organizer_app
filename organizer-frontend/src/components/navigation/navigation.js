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
const Navigation = () => {
  const [createModal, setCreateModal] = useState(false);
  return (
    <>
      <Create show={createModal} onHide={() => setCreateModal(false)} />
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
            <Button variant="success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navigation;
