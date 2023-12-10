import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateTaskInList } from "../slices/taskSlice";

function MyVerticallyCenteredModal(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [id, setId] = useState(0);

  const { selectTask } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const updateTask = () => {
    props.onHide();
    dispatch(updateTaskInList({id,title,description}))
  };

  useEffect(() => {
    if (Object.keys(selectTask).length !== 0) {
      setTitle(selectTask.title);
      setDesc(selectTask.desc);
      setId(selectTask.id);
    }
  }, [selectTask]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <div className="text-end">
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => updateTask(e)}
            >
              UpdateTask
            </Button>
          </div>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
