import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      
      
      <Form.Label>
        <span className="fw-bold"> Price no greater than</span> 500$

      </Form.Label>
      <Form.Range min={10} max={500} step={10}></Form.Range>
    </>
  );
};

export default PriceFilterComponent;
