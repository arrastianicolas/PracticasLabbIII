import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useState } from "react";
const AddList = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setTask(value);
  };

  const submitTask = (e) => {
    e.preventDefault();
    const newTask = {
      taskText: task,
      taskCompleted: false,
    };
    if (task.trim() !== "") {
      addTask(newTask);
    }
    setTask("");
  };
  return (
    <>
      <Card className="mt-5 mx-3 p-3 px-5 shadow">
        <Card.Body>
          <Form onSubmit={submitTask}>
            <FormGroup>
              <Form.Control
                type="text"
                placeholder="ingrese una tarea"
                onChange={handleChange}
                value={task}
              ></Form.Control>
            </FormGroup>
            <Row>
              <Col />
              <Col md={6} className="mt-3 d-flex justify-content-end">
                <Button variant="secondary" type="submit">
                  Agregar Tarea
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddList;
