import React from 'react'
import Header from '../HeFoo/Header'
import TaskListNumber from '../HeFoo/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeD = () => {
  return (
   <>
      <div className='h-screen p-12 bg-[#333] text-white'>
         <Header />
         <TaskListNumber />
         <TaskList />
      </div>
   </>
  )
}

export default EmployeeD