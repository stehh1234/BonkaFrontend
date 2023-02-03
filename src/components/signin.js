import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function SignIn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div onClick={handleShow} className="d-grid gap-2">
            <Button type='submit' size="sm" controlId="login-button">
                Login
            </Button>
        </div>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
            <Form>
              <Form.Group className="mb-2" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Phone Number" style={{backgroundColor: "#FFF8DC"}}/>
              </Form.Group>
  
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Your Password" style={{backgroundColor: "#FFF8DC"}}/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button size="md" controlId="login-button">
                  login
                </Button>
              </div>
            </Form>
  
          </Modal.Body>
  
          <Modal.Footer>
            <>
            <p>No account yet?</p>
  
            <div className="d-grid gap-2">
              <Button type='submit' size="sm" controlId="signup-button">
                Create an Account
              </Button> 
            </div>
            {/* <Link to = {"/SignUp"} className={"btn"}>create an account</Link> */}
            </>
  
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default SignIn