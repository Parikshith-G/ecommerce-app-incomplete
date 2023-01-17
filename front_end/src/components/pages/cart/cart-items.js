import { Image,Col,Row,ListGroup,Form, Button } from "react-bootstrap";

import React from "react";
const CartItems=()=>{

    return(
        <React.Fragment>

            <ListGroup>

                <ListGroup.Item>
                    <Row>

                        <Col md={2}>
                            <Image crossOrigin="anonymous" fluid src="/images/others/games-category.png"></Image>
                        </Col>
                        <Col md={2}>Product:<br/>This is the best product</Col>
                        <Col md={2}><span className="fw-bold">$455</span></Col>
                        <Col md={3}>
                            <Form.Select>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                            </Form.Select>
                        </Col>
                        <Col md={3}>
                            <Button variant="secondary"><i className="bi bi-trash"></i></Button>
                        </Col>

                    </Row>

                    
                </ListGroup.Item>

            </ListGroup>

        </React.Fragment>
    );

}
export default CartItems;