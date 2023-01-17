import { Card, Button ,Row,Col} from "react-bootstrap";
import {Rating} from "react-simple-star-rating"
import { LinkContainer } from "react-router-bootstrap";
const ProductForListComponent = ({idx,images}) => {
  return (
    <Card style={{marginTop:"50px",marginBottom:"50px"}} >
      <Row>
        <Col lg={5}>
            <Card.Img variant="top" 
            src={"/images/others/" +images[idx]+"-category.png" }/>
        </Col>

        <Col lg={7}>
            <Card.Body>
                <Card.Title>Good Product lord BEans</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up theSome quick example text to build on the card title and make up thebulk of the card's content. loremSome quick example text to build on the card title and make up thebulk of the card's content. lorembulk of the card's content. lorem
              </Card.Text>
              <Card.Text>

                <Rating readonly size={20} initialValue={5}>
                </Rating>(4)
                
              </Card.Text>
              <Card.Text className="h4">Price- 155$
              <LinkContainer to="/productdetails">
                <Button variant="danger">See Product</Button>
                </LinkContainer>
                </Card.Text>
            </Card.Body>  
        </Col>

      </Row>
     
      
    </Card>
  );
};

export default ProductForListComponent;
