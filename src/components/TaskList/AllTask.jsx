import React from 'react'

const AllTask = () => {
  return (
    <>
        <div id='task' className='bg-[#181818e4] mt-5 p-4 rounded-lg flex flex-col gap-4 overflow-y-auto h-48 w-full'>
            <div className='w-full p-4 rounded flex items-center justify-between bg-slate-500'>
                <h2>Ankush</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className='w-full p-4 rounded flex items-center justify-between bg-green-600'>
                <h2>Ankush</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className='w-full p-4 rounded flex items-center justify-between bg-yellow-500'>
                <h2>Ankush</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className='w-full p-4 rounded flex items-center justify-between bg-purple-700'>
                <h2>Ankush</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
            <div className='w-full p-4 rounded flex items-center justify-between bg-red-600'>
                <h2>Ankush</h2>
                <h3>Make a UI Design</h3>
                <h5>Status</h5>
            </div>
        </div>
    </>
  )
}

export default AllTask;