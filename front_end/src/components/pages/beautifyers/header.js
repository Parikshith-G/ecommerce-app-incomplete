import 
{   Nav,
    NavDropdown,
    Navbar,
    Badge,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    Button,
    InputGroup
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from 'react-router-dom';

const PageHeader=()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
            <Navbar.Brand href="/">Online-Shop</Navbar.Brand>
        </LinkContainer>

        <InputGroup>
                <DropdownButton id="dropdown-basic-button" title="All">
                    <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Furniture</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Fashion</Dropdown.Item>

                </DropdownButton>
                <Form.Control type="text" placeholder="Search in shop..."/>
                <Button variant="warning"><i className="bi bi-search"></i></Button>
            </InputGroup>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className="me-auto">

            <LinkContainer to="/admin/admin-order">
                <Nav.Link>Admin</Nav.Link> 
            </LinkContainer>

        </Nav>

            <Nav>
            <NavDropdown title="Beans_Sama" id="collasible-nav-dropdown">
              <NavDropdown.Item eventKey="/user/user-order" as={Link} to="/user/user-order">My Orders</NavDropdown.Item>

              <NavDropdown.Item eventKey="/user/user-profile"as={Link}to="/user/user-profile"> Profile</NavDropdown.Item>

              <NavDropdown.Item >Logout</NavDropdown.Item>
              
            </NavDropdown>
            <Nav className="me-auto">

                <LinkContainer to='/login'>
                    <Nav.Link >Login</Nav.Link>
                </LinkContainer>
            
            </Nav>
        <Nav className="me-auto">
            <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            
        </Nav>
            <Nav.Link href="/user/user-cart">
            <Badge pill bg="danger">
              2
            </Badge><i class="bi bi-cart"> </i>Cart</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
   };
   
   export default PageHeader;