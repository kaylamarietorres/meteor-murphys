import React from 'react';
import { Row, Col } from 'react-bootstrap';

const CenterText = () => (
  <Row id="centerText" className="align-items-center justify-content-center">
    <Col xs={8} className="text-center">
      <h1>Now accepting reservations for St Patrick&apos;s Day</h1>
      <h1>Please call 808-531-0422 for reservations</h1>
      <h1>St Patrick&apos;s Day To-Go Orders can be ordered on our website menu.</h1>
    </Col>
  </Row>
);
export default CenterText;
