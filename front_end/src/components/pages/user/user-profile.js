import { Spinner } from "react-bootstrap";
import { Form,Button,Container, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";

const UserProfile=()=>{
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
            <Col md={6}><h1>Profile</h1>
            
               <Form noValidate validated={validated} onSubmit={handleSubmit}>

               <Row className="mb-3">
                  <Form.Group controlId="formBasicFirstName">
                     <Form.Label>Your first name</Form.Label>
                        <Form.Control
                        name="first_name"
                  
                        type="text"
                     defaultValue={"Beans"}/>
                        
                  </Form.Group>
               </Row>

               <Row className="mb-3">

                  <Form.Group  controlId="formBasicLastName">
                     <Form.Label>Your last name</Form.Label>
                     <Form.Control
                        name="last_name"
                        required
                        type="text"
                        defaultValue={"sama"}/>
                        
                  </Form.Group>
               </Row>

               <Row>
                  <Form.Group  controlId="formBasicEmail">
                     <Form.Label>Your email address</Form.Label>
                     <Form.Control
                        disabled
                        name="email"
                        type="email"
                        placeholder="beans@email.com : if you want to change email then delete current account annd do so" />

                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group controlId="formBasicFirstName">
                     <Form.Label>Address</Form.Label>
                        <Form.Control
                        name="address"
                  
                        type="text"
                     defaultValue={"Buffer Address"}/>
                        
                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group controlId="formBasicFirstName">
                     <Form.Label>Country</Form.Label>
                        <Form.Control
                        name="country"
                  
                        type="text"
                     defaultValue={"Buffer country"}/>
                        
                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group controlId="formBasicFirstName">
                     <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                        name="zipcode"
                  
                        type="text"
                     defaultValue={"42"}/>
                        
                  </Form.Group>
               </Row>
               
               <Row className="mb-3">
                  <Form.Group controlId="formBasicFirstName">
                     <Form.Label>City</Form.Label>
                        <Form.Control
                        name="city"
                  
                        type="text"
                     defaultValue={"Buffer city"}/>
                        
                  </Form.Group>
               </Row>

               <Row className="mb-3">
                  <Form.Group controlId="formBasicFirstName">
                     <Form.Label>State</Form.Label>
                        <Form.Control
                        name="state"
                  
                        type="text"
                     defaultValue={"buffer state"}/>
                        
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
                        type="password"
                        />
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
                     type="password"
                  />
                     <Form.Control.Feedback type="invalid">Passwords should match</Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
               </Form.Group>
               </Row>
               
               
            
               <Button type="submit" >
                  <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"/>
                  Update
               </Button>

            <Alert className="mt-1" variant="danger">User with that email already exists</Alert>

            <Alert variant="success">User updated succesfsfully</Alert>

         </Form>

      </Col>
   </Row>
      
    </Container>
    );
   }
   
   export default UserProfile;