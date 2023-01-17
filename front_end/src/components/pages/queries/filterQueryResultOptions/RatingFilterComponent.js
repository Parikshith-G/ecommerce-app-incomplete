import {Rating} from "react-simple-star-rating";
import { Form } from "react-bootstrap";
import { Fragment } from "react";
const RatingFilterComponent = () => {
  return (
   <span className="fw-bold">
    Ratings
    {
      Array.from({length:5}).map((_,idx) => {
        return(
          <Fragment key={idx}>
              <Form.Check type="checkbox" id={`check-apt-${idx}`}>
                <Form.Check.Input style={{cursor:"pointer"}} type="checkbox" isValid/>
                <Form.Check.Label style={{cursor:"pointer"}}/>
                <Rating readonly size={20} initialValue={5-idx}/>
              </Form.Check>
            </Fragment>
        );
      }
      )
    }
    
   </span>
  );
};

export default RatingFilterComponent;
