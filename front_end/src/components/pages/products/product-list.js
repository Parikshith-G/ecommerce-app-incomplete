import {
   Container, 
   ListGroup, 
   Row,
   Col,
   Button
}
from "react-bootstrap"

import SortOptionsComponent from "../queries/SortOptionsComponent"
import PriceFilterComponent from "../queries/filterQueryResultOptions/PriceFilterComponent"
import RatingFilterComponent from "../queries/filterQueryResultOptions/RatingFilterComponent"
import CategoryFilterComponent from "../queries/filterQueryResultOptions/CategoryFilterComponent"
import AttributeFilterComponent from "../queries/filterQueryResultOptions/AttributesFilterComponent"
import PaginationComponent from '../queries/PaginationComponent'
import ProductForListComponent from "../queries/ProductForListComponent"

import axios from "axios"

const ProductsListPage=()=>{
   
    return(
      
      <Container fluid>

         <Row>

            <Col md={3}>

               <ListGroup variant="flush">
                  
                  <ListGroup.Item className="mb-3 mt-3">
                     <SortOptionsComponent/>
                  </ListGroup.Item>

                  Filter:<br/>
                  <ListGroup.Item>
                     <PriceFilterComponent/>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <RatingFilterComponent/>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <CategoryFilterComponent/>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <AttributeFilterComponent/>
                  </ListGroup.Item>

                  <ListGroup.Item>
                     <Button variant="primary">Filter</Button>{"  "}
                     <Button variant="danger">Reset Filter</Button>
                  </ListGroup.Item>

                  

               </ListGroup>

            </Col>
            <Col md={9}>
               {
                  Array.from({length:5}).map((_,idx)=>{
                     return( <ProductForListComponent
                     key={idx}
                     images={["games","monitors","tablets","games","monitors"]}
                     idx={idx}
                     />);
                  }
                  )
               }
              

               <PaginationComponent/>
            </Col>
         </Row>

      </Container>
    );
   }
   
   export default  ProductsListPage;
