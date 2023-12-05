import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTaskList } from '../slices/taskSlice'

function AddTask() {

  const [title,setTitle]=useState("")
  const [desc,setDesc]=useState("")

  const dispatch =useDispatch()


  const addTasks=(e)=>{
    e.preventDefault();
    console.log({title,desc})
    dispatch(addTaskList({title,desc}))
    setTitle('')
    setDesc('')
  }



  return (
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
    <Button variant="primary" type="submit" onClick={(e)=>addTasks(e)}>
      Add Task
    </Button>

    </div>
  </Form>
  )
}

export default AddTask
