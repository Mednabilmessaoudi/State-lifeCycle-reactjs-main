import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

const CounterFunc = () => {
  const [Counter, setCouter] = useState(0);

  const Increase = () => {
    setCouter(Counter + 1);
  };
  const Decrease = () => {
    Counter === 0 ? alert("You just can't") : setCouter(Counter - 1);
  };
  const Reset = () => {
    setCouter(0);
  };
  return (
    <>
      <h2>Counter</h2>
      <p>{Counter}</p>
      <Button onClick={() => Increase()} variant="success">
        Increase
      </Button>{" "}
      <Button onClick={() => Decrease()} variant="danger">
        Decrease
      </Button>{" "}
      <Button onClick={() => Reset()} variant="warning">
        Reset
      </Button>{" "}
      <Card className="text-center mt-4 " style={{ justifyContent: "center" }}>
        <Card.Body>
          <Card.Title>Auto Increment Counter</Card.Title>
          <Card.Text>
            <Badge bg="primary" pill>5</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CounterFunc;
