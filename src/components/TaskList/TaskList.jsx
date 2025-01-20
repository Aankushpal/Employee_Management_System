import React from 'react'

const TaskList = () => {
    return (
        <>
            <div id='task' className='w-full h-[58%] gap-5  mt-16 rounded-lg py-7 px-2 flex items-center justify-start flex-nowrap overflow-x-auto'>
                <div className='flex-shrink-0 h-full w-1/4 bg-yellow-600 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-500 px-4 py-1 rounded-md'>High</h1>
                        <h2>20 jan 2024</h2>   
                    </div>
                    <h5 className='mt-5 text-2xl font-semibold'>Task Name</h5>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi ab nulla maiores optio deserunt illo autem impedit laudantium tempore?</p>
                </div>
                <div className='flex-shrink-0 h-full w-1/4 bg-blue-600 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-500 px-4 py-1 rounded-md'>High</h1>
                        <h2>20 jan 2024</h2>   
                    </div>
                    <h5 className='mt-5 text-2xl font-semibold'>Task Name</h5>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi ab nulla maiores optio deserunt illo autem impedit laudantium tempore?</p>
                </div>
                <div className='flex-shrink-0 h-full w-1/4 bg-green-600 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-500 px-4 py-1 rounded-md'>High</h1>
                        <h2>20 jan 2024</h2>   
                    </div>
                    <h5 className='mt-5 text-2xl font-semibold'>Task Name</h5>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi ab nulla maiores optio deserunt illo autem impedit laudantium tempore?</p>
                </div>
                <div className='flex-shrink-0 h-full w-1/4 bg-pink-600 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-500 px-4 py-1 rounded-md'>High</h1>
                        <h2>20 jan 2024</h2>   
                    </div>
                    <h5 className='mt-5 text-2xl font-semibold'>Task Name</h5>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi ab nulla maiores optio deserunt illo autem impedit laudantium tempore?</p>
                </div>
                <div className='flex-shrink-0 h-full w-1/4 bg-slate-600 rounded-xl p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='bg-red-500 px-4 py-1 rounded-md'>High</h1>
                        <h2>20 jan 2024</h2>   
                    </div>
                    <h5 className='mt-5 text-2xl font-semibold'>Task Name</h5>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas commodi ab nulla maiores optio deserunt illo autem impedit laudantium tempore?</p>
                </div>
            </div>
        </>
    )
}

export default TaskList