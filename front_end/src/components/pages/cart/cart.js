import { Alert, Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItems from "./cart-items";



const CartPage=()=>{
   const route=()=>{
console.log("test")
   }
 return(
   <Container>
      <Row>
         <Col md={8}>
            <h1>Shopping cart</h1>
            {
               Array.from({length:3}).map((item,idx)=>{
                  return(
                     <CartItems key={idx}></CartItems>
                  );
               })
            }
         <Alert variant="info">Your cart is empty</Alert>
         </Col>

         <Col md={4}>
            <ListGroup>
               <ListGroup.Item>
                  <h2>SubTotal(2 items)</h2>
               </ListGroup.Item>
               <ListGroup.Item>
                  Price : <span className="mt-5 fw-bold">$500</span>
               </ListGroup.Item>
               <ListGroup.Item>
                  <LinkContainer to='/user/user-cart'>
                     <Button style={{cursor:'pointer'}} onClick={route} type="button">Proceed to checkout</Button>
                  </LinkContainer>
               </ListGroup.Item>
            </ListGroup>
         </Col>
      </Row>

   </Container>
 );
}

export default CartPage;