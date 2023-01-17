import { Container, Form,Row ,Col, ListGroup, Alert, Button} from "react-bootstrap";
import CartItems from "../cart/cart-items";



const UserOrderDetails=()=>{
    return(
      <Container fluid>
         <Row className="mt-4">
            <h1>Order Summary</h1>
            <Col md={8}>

               <Row>
                  <Col md={6}>
                     <ListGroup>
                        <ListGroup.Item>
                           <h2>Shipping</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <b>Name</b>:Beans Sama
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <b>Address</b>:Beans Sama Street
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <b>Phone number</b>:80085
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Alert variant="danger">Not Delivered</Alert>
                        </ListGroup.Item>
                     </ListGroup>
                  </Col>

                  <Col md={6}>
                     <ListGroup>
                        <ListGroup.Item><h3>Payment Method</h3></ListGroup.Item>
                        <ListGroup.Item>
                          <Form.Select disabled>
                              <option value="paypal" defaultValue={"paypal"}>PayPal</option>
                              <option value="e-bank">E-banking</option>
                              <option value="card">Card</option>
                              <option value="cash-on-delivery">Cash on delivery</option>
                           </Form.Select> 
                          </ListGroup.Item> 
                          <ListGroup.Item>
                              <Alert variant="success">paid on 03-08-2000</Alert>
                          </ListGroup.Item>
                     
                     </ListGroup>
                  </Col>
                  <Row>
                     <Col>
                        <ListGroup variant="flush">
                           {
                              Array.from({length:3}).map((item,idx)=>{
                                 return(
                                    <CartItems key={idx}></CartItems>
                                 );
                              })
                           }
                        </ListGroup>
                     </Col>
                  </Row>
               </Row>
            </Col>
            <Col md={4}>
               <ListGroup>

                  <ListGroup.Item>
                     <h3>Order Summary</h3>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     Items price(after tax): <b>$100</b>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     Shipping: <b>included</b>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     Tax: <b>included</b>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <div style={{color:'red'}}>Total Price: <b>$100</b></div>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <div className="d-grid">
                        <Button size="lg" variant="danger">Pay for Order</Button>
                     </div>
                  </ListGroup.Item>

                </ListGroup>
            </Col>
         </Row>
      </Container>
    );
   }
   
   export default  UserOrderDetails;