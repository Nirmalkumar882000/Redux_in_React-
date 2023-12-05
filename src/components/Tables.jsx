import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector } from "react-redux";

function Tables() {
  const [modalShow, setModalShow] = useState(false);

  const { taskList } = useSelector((state) => state.tasks);

  const deleteTask = (e) => {};

  const updateTask = (e) => {
    setModalShow(true);
  };

  return (
    <Table className="my-5" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {taskList &&
          taskList.map((task, index) => {
            return (
              <tr className="text-center" key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.desc}</td>
                <td>
                  <Button
                    className="mx-3"
                    variant="primary"
                    onClick={(e) => updateTask(e)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="primary" onClick={(e) => deleteTask(e)}>
                    <i className="bi bi-trash"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Table>
  );
}

export default Tables;
