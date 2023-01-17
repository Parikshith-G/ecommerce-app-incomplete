import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const AdminLinks=()=>{

    return(
        <Navbar bg="light" variant="light">
            <Nav className="flex-column">

                <LinkContainer to='/admin/admin-order'>
                    <Nav.Link>Orders</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/admin/admin-user'>
                    <Nav.Link>Users</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/admin/admin-analytics'>
                    <Nav.Link>Analytics</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/admin/admin-products'>
                    <Nav.Link>Products</Nav.Link>
                </LinkContainer>

                <LinkContainer to='/admin/admin-chat'>
                    <Nav.Link>Chats</Nav.Link>
                </LinkContainer>


                <Nav.Link>Logout</Nav.Link>

            </Nav>
        </Navbar>
       

    );
}

export default AdminLinks;