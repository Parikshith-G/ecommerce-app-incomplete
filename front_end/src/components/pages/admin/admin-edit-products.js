
import { 
    Alert,
    Row,
    Col,
    Container,
    Form, 
    Button, 
    CloseButton, 
    Table,
    Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminEditProduct=()=>{
    const cler={
        cursor:'pointer:',
        transform:"scale(2.2)",
        position:'relative',
        left:'60px',
        top:'-50px'
        


    }
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true)};

    return(

        <Container>
            <Row className='mt-5 justify-content-md-center' >
                <Col md={1}>
                    <Link to='/admin/admin-products' className="btn btn-info">Go Back</Link></Col>

                <Col md={6}>
                    <h1>Edit Product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group 
                        className="mb-3" 
                        controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                name="name"
                                defaultValue={"Buffer product"}>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name="description"
                                as="textarea"
                                rows={3}
                                required
                                defaultValue={"Buffer description"}>
                            </Form.Control>
                        </Form.Group>
                            
                        <Form.Group className="mb-3" controlId="formBasicCount">

                            <Form.Label>Count in stock</Form.Label>
                            <Form.Control
                            defaultValue={123}
                                name="count"
                                type="number"
                                required>    
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                            defaultValue={123}
                                name="price"
                                type="number"
                                required>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select 
                                name="category" 
                                required>
                                <option value="" >choose category</option>
                                <option value="1">Laptop</option>
                                
                                <option value="2">TV</option>
                                <option value="3">Games</option>
                                
                            </Form.Select>
                        </Form.Group>

                        

                        <Form.Group>

                            <Row className="mt-2">
                               
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicAttributes">
                                        <Form.Label>
                                            Choose attribute and set values
                                        </Form.Label>
                                        <Form.Select name="attrKey">
                                            <option >Choose value</option>
                                            <option value="red">color</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicAttributesValue">
                                        <Form.Label>Attribute value</Form.Label>
                                        <Form.Select
                                        name="attrVAl">
                                            <option value="">Choose attribute value</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Table hover>
                                    <thead>
                                        <tr>
                                            <td>Attribute</td>
                                            <td>Value</td>
                                            <td>Delete</td>
                                        </tr> 
                                    </thead>

                                    <tbody>
                                        <tr>
                                        <td>attr key</td>
                                        <td>atr value</td>
                                        <td><CloseButton/></td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Row>

                            <Row >

                                <Col md={6} >
                                   <Form.Group  className="mb-3" controlId="formBasicNewAttribute">
                                    <Form.Label>Create new attribute</Form.Label>
                                        <Form.Control
                                        disabled={false}
                                        placeholder="first choose or create category"
                                        name="newAttrValue"
                                        
                                        type="text"></Form.Control>
                                   </Form.Group>
                                </Col>

                                <Col md={6}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicNewAttributeValue"
                                    >
                                    <Form.Label>Attribute value</Form.Label>
                                    <Form.Control
                                        disabled={false}
                                        placeholder="first choose or create category"
                                        required={true}
                                        name="newAttrValue"
                                        type="text"
                                    />
                                </Form.Group>
                                </Col>

                            </Row>
                            <Alert className="mt-2" variant="primary">After typing attribute key and value, press enter on one of the fields</Alert>
                        </Form.Group>
                        
                        
                        <Form.Group controlId="formFileMultiple" className="mb-3 mt-2">
                            <Form.Label >Images</Form.Label>
                                <Form.Control required multiple type="file" />
                            </Form.Group>

                            <Form.Group>
                                <Row>

                                    <Col xs={3} style={{position:'relative'}}>

                                        <Image src="/images/others/games-category.png" fluid>
                                            
                                        </Image>
                                            <i style={cler} className="bi bi-x text-danger"></i>
                                        <Image src="" fluid></Image>
                                        
                                    </Col>

                                    <Col xs={3} style={{position:'relative'}}>

                                        <Image src="/images/others/games-category.png" fluid>
                                            
                                        </Image>
                                            <i style={cler} className="bi bi-x text-danger"></i>
                                        <Image src="" fluid></Image>
                                        
                                    </Col>

                                </Row>

                            </Form.Group>

                            <Button variant="primary" type="submit">Update</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );


}

export default AdminEditProduct;