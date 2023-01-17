import { Row,Container,Col } from "react-bootstrap";


const PageFooter=()=>{
    return(
        <footer>
            <Container fluid>
                <Row className="mt-5">
                    <Col>Copyright &copy; Online-Shop</Col>
                </Row>
            </Container>
            
        </footer>

    );
   }
   
   export default PageFooter;