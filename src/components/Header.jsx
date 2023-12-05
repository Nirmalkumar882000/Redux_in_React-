import React from 'react'
import { useSelector } from 'react-redux'

function Header() {

  const {taskList} = useSelector((state) => state.tasks)

  return (
    <>
    <h1 className='text-center my-3 text-primary'> Project Management</h1>
    <p className='text-center my-3'>
     { `Currently ${taskList.length} task(s) pending`}
    </p>
    </>
  )
}

export default Header
