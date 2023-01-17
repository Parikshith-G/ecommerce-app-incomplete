import { Spinner } from "react-bootstrap";
import { Form,Button,Container, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage=()=>{
   const [validated, setValidated] = useState(false);
   
  


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

            <Col md={6}><h1>Login</h1>
            
               <Form noValidate validated={validated} onSubmit={handleSubmit}>
               
                  <Row>
                     <Form.Group  controlId="formBasicEmail">
                        <Form.Label>Your email address</Form.Label>
                        <Form.Control
                           
                           name="regEmail"
                           type="email"
                           placeholder="beans@email.com" />
                        
                     </Form.Group>
                  </Row>

                  <Row>
                     <Form.Group  controlId="formBasicPassword_1">
                        <Form.Label>Enter Password</Form.Label>
                        <Form.Control
                           name="regPassword"   
                           minLength={9}
                           type="password"/>
                        <Form.Check 
                           name="noLogout"
                           type="checkbox"
                           label="Don't log out">   
                        </Form.Check>
                     </Form.Group>
                  </Row>
                           
                  <Row>
                     <Col className="mt-1">
                        <div>Don't have an account? <Link to={'/register'}>Register</Link></div>
                     </Col>
                  </Row>
               
               <Button type="submit">
                  <Spinner
                     as="span"
                     animation="border"
                     size="sm"
                     role="status"
                     aria-hidden="true"/>
                     Login
               </Button>
               <Alert show={true} className="mt-1"variant="danger">Wrong email or password</Alert>
               
            </Form>
         </Col>
      </Row>
      
    </Container>
    );
   }
   
   export default LoginPage;