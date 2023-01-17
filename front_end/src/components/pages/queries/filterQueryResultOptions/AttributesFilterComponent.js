import React from "react";
import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {

  return (
    <React.Fragment>
    {
      [
        {Color:["Red","Blue","Green"]},
        {Ram:["1 GB","2 GB","3 GB"]}
      ].map((item,idx)=>{
        return(
            <div key={idx} className="mb-3">
              <Form.Label >

                <b>{Object.keys(item)}</b>

                </Form.Label>
              
              {
                item[Object.keys(item)].map((i,idx)=>{
                return(
                  <React.Fragment key={idx}>
                    <Form.Check 
                      
                      type="checkbox"
                      id="default-checkbox"
                      label={i}
                      />
                    </React.Fragment>
                );
              })}


            </div>
        );
      })
    }

      
      
    </React.Fragment>
  );
};

export default AttributesFilterComponent;
