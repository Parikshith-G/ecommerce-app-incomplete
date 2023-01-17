import { Button, Col,Row,Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import AdminLinks from "../adminlinks/adminlink";
import { useState, useEffect } from "react";





const ProductComponent=({fetchProducts,deleteProduct})=>{
    const [products, setProducts] = useState([]);


    const [delProd,setDelProd]=useState(false);

    const deleteHandler = async(productId) => {
        if (window.confirm("Are you sure?")){
            const data=await deleteProduct(productId)
            if(data.message === "Product removed"){
                setDelProd(!delProd)
            }
        }
      };
  useEffect(() => {
    const abctrl = new AbortController();
    fetchProducts(abctrl)
      .then((res) => setProducts(res))
      .catch((er) =>
       setProducts([
          { name: er.response.data.message ? er.response.data.message : er.response.data}
       ])
      );
      return () => abctrl.abort();
  }, [delProd]);

    return(
        <Row className="m-5">
        <Col md={2}>
          <AdminLinks/>
        </Col>
        <Col md={10}>
          <h1>
            Product List{" "}
            <LinkContainer to='/admin/admin-create-products'>
            <Button variant="primary" size="lg">
              Create new
            </Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
            <td>
            <LinkContainer to='/admin/admin-edit-products'>
            <Button className="btn-sm">
    <i className="bi bi-pencil-square"></i>
</Button>
                </LinkContainer>
                  {" / "}
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={()=>deleteHandler(item._id)}
                  >
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ProductComponent;