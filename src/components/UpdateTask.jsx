import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const [title,setTitle]=useState("")
    const [desc,setDesc]=useState("")



    const updateTask=(e)=>{
        e.preventDefault();
        console.log({title,desc})

    }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Task Description</Form.Label>
      <Form.Control type="text" placeholder="Enter Task Description" value={desc} onChange={(e)=>setDesc(e.target.value)} />
    </Form.Group>
    <div className='text-end'>
    <Button variant="primary" type="submit" onClick={(e)=>updateTask(e)}>
      UpdateTask
    </Button>

    </div>
  </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
