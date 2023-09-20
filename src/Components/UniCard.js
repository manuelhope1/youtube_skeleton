import React from "react";
import { Card, Col } from "react-bootstrap";
import img from "../Assets/images/uni.png";
const UniCard = (props) => {
  const uni = props.uni;
  return (
    <Col lg="3" md="4" sm="12" xs="12">
      <Card className="uni-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card.Img
            variant="top"
            src={img}
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{uni.name}</Card.Title>
          <div>
            <span style={{ fontWeight: "600" }}>country:</span> {uni.country}
          </div>
          <div>
            <span style={{ fontWeight: "600" }}>Website:</span> {uni.domains}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UniCard;
