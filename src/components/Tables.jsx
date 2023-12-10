import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import {removeFromList, setSelectedTask} from "../slices/taskSlice"

function Tables() {
  const [modalShow, setModalShow] = useState(false);

  const { taskList } = useSelector((state) => state.tasks);

  const dispatch = useDispatch()

  const deleteTask = (task) => {
    dispatch(removeFromList(task))
    console.log("Task Deleted")
  };

  const updateTask = (task) => {
    setModalShow(true);
    dispatch(setSelectedTask(task))

  };

  return (
    <Table className="my-5" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Description</th>
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
                    onClick={() => updateTask(task)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="primary" onClick={() => deleteTask(task)}>
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
