import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between items-center gap-5'>
        <div className=' w-[40%] mt-6 px-12 py-8 rounded-lg bg-rose-400'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h1 className='text-xl'>New Task</h1>
        </div>
         <div className=' w-[40%] mt-6 px-12 py-8 rounded-lg bg-emerald-500'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h1 className='text-xl'>New Task</h1>
        </div> 
        <div className=' w-[40%] mt-6 px-12 py-8 rounded-lg bg-yellow-500'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h1 className='text-xl'>New Task</h1>
        </div> 
        <div className=' w-[40%] mt-6 px-12 py-8 rounded-lg bg-blue-600'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h1 className='text-xl'>New Task</h1>
        </div>
    </div>
  )
}

export default TaskListNumber