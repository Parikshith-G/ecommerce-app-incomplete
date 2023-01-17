import { Col,Row,Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const UserOrder=()=>{
    return(
      <Row className="m-5"> 
         
         <Col md={12}>
            <h1>My Orders</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Date</th>
          <th>Total</th>
          <th>Delivered</th>
          <th>Order Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>You</td>
          <td>03-08-2000</td>
          <td>100</td>
          <td><i className="bi bi-check-lg text-success"></i></td>
          <td><Link to='/user/user-order-details'>Go to order</Link></td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>You</td>
          <td>04-08-2000</td>
          <td>200</td>
          <td><i className="bi bi-check-lg text-success"></i></td>
          <td><Link to='/user/user-order-details'>Go to order</Link></td>
        </tr>
        
        <tr>
          <td>3</td>
          <td>You</td>
          <td>05-08-2000</td>
          <td>300</td>
          <td><i className="bi bi-check-lg text-success"></i></td>
          <td><Link to='/user/user-order-details'>Go to order</Link></td>
        </tr>
        
        <tr>
          <td>4</td>
          <td>You</td>
          <td>07-08-2000</td>
          <td>500</td>
          <td><i className="bi bi-check-lg text-success"></i></td>
          <td><Link to='/user/user-order-details'>Go to order</Link></td>
        </tr>
        
        <tr>
          <td>5</td>
          <td>You</td>
          <td>10-08-2000</td>
          <td>1000</td>
          <td><i className="bi bi-check-lg text-success"></i></td>
          <td><Link to='/user/user-order-details'>Go to order</Link></td>
        </tr>
        
        <tr>
          <td>6</td>
          <td>You</td>
          <td>15-08-2000</td>
          <td>1010</td>
          <td><i className="bi bi-check-lg text-success"></i></td>
          <td><Link to='/user/user-order-details'>Go to order</Link></td>
        </tr>
        
        <tr>
          <td>7</td>
          <td>You</td>
          <td>18-08-2000</td>
          <td>780</td>
          <td><i className="bi bi-check-lg text-success"></i></td>
          <td><Link to='/user/user-order-details'>Go to order</Link></td>
        </tr>
        
        
      </tbody>
    </Table>

         </Col>
      
      
      
      
      </Row>
    );
   }
   
   export default  UserOrder;