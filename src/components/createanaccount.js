import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function CreateAnAccount() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className="d-grid gap-2 createanaccount-button">
            <Button onClick={handleShow} type='submit' size="sm" >
              Create an Account
            </Button>
        </div>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
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
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="confirm password" style={{backgroundColor: "#F5F5F5"}}/>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button  size="md" style={{backgroundColor: "#41A1F9"}} controlId="submit-button">
                  Submit
                </Button>
              </div>
            </Form>
  
          </Modal.Body>
          <Modal.Footer>
            <p>Already have an account?</p>
            <div className="d-grid gap-2">
                <Button type='submit' size="sm" controlId="login-button">
                  Login
                </Button>
              </div>
              {/* <Link to = {"/logIn"} className={"btn"}>log in</Link> */}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default CreateAnAccount

