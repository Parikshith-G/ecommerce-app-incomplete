import { Spinner } from "react-bootstrap";
import { Form,Button,Container, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage=()=>{
   const [validated, setValidated] = useState(false);
   
   const checker=()=>{
      
      const password1=document.querySelector("input[name=password_1]");
      const password2=document.querySelector("input[name=password_2]");
      
      if(password1.value===password2.value){
         password2.setCustomValidity("");
      }
      else{
         password2.setCustomValidity("Passwords don't match")
      }
   
   }


  const handleSubmit = (event) => {
  
   
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    

    setValidated(true);
  };

    return(
      <Container>
         <Row className="mt-5">

            <Col md={6}><h1>Register</h1>
            
               <Form noValidate validated={validated} onSubmit={handleSubmit}>

               <Row className="mb-3">
                  <Form.Group controlId="formBasicFirstName">
                     <Form.Label>Your First name</Form.Label>
                        <Form.Control
                        name="first_name"
                        required
                        type="text"
                        placeholder="Your first name"/>
                     <Form.Control.Feedback type="invalid">Enter first name</Form.Control.Feedback>
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
               </Row>
               
               <Row className="mb-3">
                  <Form.Group  controlId="formBasicLastName">
                     <Form.Label>Your Last name</Form.Label>
                     <Form.Control
                        name="last_name"
                        required
                        type="text"
                        placeholder="Your last name" />
                     <Form.Control.Feedback type="invalid">Enter last name</Form.Control.Feedback>
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
               </Row>

               <Row>
                  <Form.Group  controlId="formBasicEmail">
                     <Form.Label>Your email address</Form.Label>
                     <Form.Control
                        required
                        name="email"
                        type="email"
                        placeholder="beans@email.com" />
                     <Form.Control.Feedback type="invalid">Enter valid email</Form.Control.Feedback>
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
               </Row>

               <Row>
                  <Form.Group  controlId="formBasicPassword_1">
                     <Form.Label>Enter Password</Form.Label>
                     <Form.Control
                     name="password_1"
                     onChange={checker}
                        required
                        minLength={9}
                        type="password"/>
                     <Form.Control.Feedback type="invalid">Enter valid password</Form.Control.Feedback>
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                     <Form.Text>Password must be atleast 9 characters long </Form.Text>
                  </Form.Group>
               </Row>

               <Row>
                  <Form.Group  controlId="formBasicPassword_2">
                     <Form.Label>Confirm Passowrd</Form.Label>
                     <Form.Control
                        required
                        minLength={9}
                        name="password_2"
                        onChange={checker}
                        type="password"/>
                     <Form.Control.Feedback type="invalid">Passwords should match</Form.Control.Feedback>
                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
               </Row>
               
               <Row>
                  <Col className="mt-1">
                     <div>Already have an account? <Link to={'/login'}>Login</Link></div>
                  </Col>
               </Row>
            
            <Button type="submit" >
               <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  />
               Register
            </Button>

            <Alert className="mt-1" show={true} variant="danger">User with that email already exists</Alert>

            <Alert show={true} variant="success">Registered successfully</Alert>

         </Form>
      </Col>
   </Row>
      
    </Container>
    );
   }
   
   export default RegisterPage;