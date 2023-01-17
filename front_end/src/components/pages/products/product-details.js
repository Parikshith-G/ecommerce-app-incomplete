import { Fragment } from "react";
import { 
   Row,
   Col,
   Container,
   ListGroup,
   Image,
   Alert,
   Form,
   Button
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessage from "../beautifyers/messages/Addedtocartmessage";
import { useEffect } from "react";
import ImageZoom from "js-image-zoom"

const ProductDetailsPage=()=>{

   var options={
         scale:2
   }
   useEffect(()=>{
      new ImageZoom(document.getElementById("first"),options)
      new ImageZoom(document.getElementById("second"),options)
      new ImageZoom(document.getElementById("third"),options)
      new ImageZoom(document.getElementById("fourth"),options)
      
   }

   );
    return(
      <Container>
         <AddedToCartMessage/>

         <Row className="mt-5">

            <Col style={{zIndex:1}} md={4}>

               <div id="first">
                   <Image fluid src="/images/others/camera-category.png"/>
               </div>
               <br/>
               <div id="second">
                   <Image fluid src="/images/others/games-category.png"/>
               </div>
               <br/>
               <div id="third">
                  <Image fluid src="/images/others/monitors-category.png"/>
                  
               </div>
               <br/>
               <div id="fourth">
                  <Image fluid src="/images/others/tablets-category.png"/>
               </div>

              
              
               
               
               
            </Col>

            <Col>

               <Row>

                  <Col md={8}>
                     <ListGroup variant="fluid">
                        <ListGroup.Item><h1>Product Name</h1></ListGroup.Item>
                        <ListGroup.Item>
                           <Rating readonly size={20} initialValue={5} ></Rating>
                        </ListGroup.Item>
                        <ListGroup.Item>Proudct price- <span className="fw-bold">$345</span></ListGroup.Item>
                        <ListGroup.Item>This is the best product mr beans sama i hope you buy this</ListGroup.Item>
                     </ListGroup>
                  </Col>


                  <Col md={4}>
                     <ListGroup>

                        <ListGroup.Item>Stock : in stock</ListGroup.Item>

                        <ListGroup.Item>Price- <span className="fw-bold">$345</span></ListGroup.Item>

                        <ListGroup.Item>
                        <Form.Select aria-label="Default select example">
                           <option>1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                        </Form.Select>
                        </ListGroup.Item>

                        <ListGroup.Item>
                           <Button variant="danger">Add to cart</Button>
                        </ListGroup.Item>

                       

                     </ListGroup>
                  </Col>



               </Row>

               <Row>
                  <Col className="mt-5">
                     <b>Review</b>
                     <Alert variant="danger" >Login first to write a review</Alert>
                  </Col>
               </Row>
               <hr/>
               <Form>
                  

                  <Form.Group 
                     className="mb-3" 
                     controlId="exampleForm.ControlTextarea1">
                     
                  </Form.Group>
                  <Form.Label>
                     {
                        Array.from({length:10}).map((idx,item)=>{
                           return(
                              <Fragment key={item}>
                                 <div>Jhon Doe</div>
                                 <Rating readonly size={20} initialValue={5}></Rating>
                                 <div>03-08-2000</div>
                                 <div> this is the best product thanks beans sama fod creating this product </div>
                                 <hr/>
                              </Fragment>
                           );
                           
                        })
                        
                     }
                  </Form.Label>
                  <Form.Control 
                     as="textarea" 
                     rows={3}>
                  </Form.Control>
                  
                  <Form.Select aria-label="Default select example">
                     <option>Your Ratings</option>
                     <option value="5">5 (Very Good!)</option>
                     <option value="4">4 (Good!)</option>
                     <option value="3">3 (Average)</option>
                     <option value="2">2 (Bad)</option>
                     <option value="1">1 (Very Bad)</option>
                   </Form.Select>
                  <Button variant="primary" className="mt-5 mb-5" type="submit">
                  Submit
                  </Button>
               </Form>
            
            </Col>

         </Row>


      </Container>
      
    );
   }
   
   export default ProductDetailsPage;