import { Col,Row,Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinks from "../../../pages/admin/adminlinks/adminlink";
import { useState,useEffect } from "react";




const OrdersPageComponent = ({ getOrders }) => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      getOrders()
        .then((orders) => setOrders(orders))
        .catch((er) =>
          console.log(
            er.response.data.message ? er.response.data.message : er.response.data
          )
        );
    }, []);


    return (
        <Row className="m-5">
          <Col md={2}>
            <AdminLinks />
          </Col>
          <Col md={10}>
            <h1>Orders</h1>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Delivered</th>
                  <th>Payment Method</th>
                  <th>Order details</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      {order.user !== null ? (
                        <>
                          {order.user.name} {order.user.lastName}
                        </>
                      ) : null}
                    </td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.orderTotal.cartSubtotal}</td>
                    <td>
                      {order.isDelivered ? (
                        <i className="bi bi-check-lg text-success"></i>
                      ) : (
                        <i className="bi bi-x-lg text-danger"></i>
                      )}
                    </td>
                    <td>{order.paymentMethod}</td>
                    <td>
                      <Link to={`/admin/admin-order/${order._id}`}>
                        go to order
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      );
    };
    
    export default OrdersPageComponent;
    
    