import React from 'react'
import Header from '../HeFoo/Header'
import CreateTask from '../TaskList/CreateTask'
import AllTask from '../TaskList/AllTask'

const AdminD = () => {
  return (
    <div className='h-screen p-12 bg-[#333] text-white'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminD