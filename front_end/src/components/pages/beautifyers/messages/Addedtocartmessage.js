import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Product successfully added to cart</Alert.Heading>
        <p>
          <Button variant='success'>Go back</Button>{' '}
          <Link to='/cart'>
            <Button variant='danger'>Go to cart</Button>
          </Link>
          
        </p>
      </Alert>
    );
  }
  
}

export default AlertDismissibleExample;