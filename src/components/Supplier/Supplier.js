import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Supplier = (props) => {
    const{serviceName,serviceSummary,barandImage} = props.supplier;
    return (
        <Col className='mx-2'>
          <Card className="shadow-lg" style={{"borderTop":"5px solid red"}}>
            <Card.Img variant="top" style={{height:"150px", backgroundSize:'contain'}} src={barandImage} />
            <Card.Body>
              <Card.Title className='bg-dark p-2 text-info'>{serviceName}</Card.Title>
              <Card.Text>
               {serviceSummary.length < 100 ? serviceSummary: `${serviceSummary.slice(0, 100)}`}
              </Card.Text>
           
              
            </Card.Body>
          </Card>
        </Col> 
  );
};

export default Supplier;