import React from 'react'

const CreateTask = () => {
    return (
        <>
            <div className='px-12 py-8 mt-5 rounded-lg bg-[#181818e4] text-white'>
                <form className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3>Task Title:</h3>
                            <input className='px-4 py-2 bg-transparent outline-none border-b-2 border-white' type="text" placeholder='Make a UI design' />
                        </div>
                        <div>
                            <h3 className='mt-4'>Date:</h3>
                            <input className='px-4 py-2 bg-transparent outline-none border-b-2 border-white' type="date" />
                        </div>
                        <div>
                            <h3 className='mt-4'>Asign To:</h3>
                            <input className='px-4 py-2 bg-transparent outline-none border-b-2 border-white' type="text" placeholder='Employee name' />
                        </div>
                        <div>
                            <h3 className='mt-4'>Category:</h3>
                            <input className='px-4 py-2 bg-transparent outline-none border-b-2 border-white' type="text" placeholder='design, dev, etc' />
                        </div>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                            <h3 className='mb-2 text-lg'>Description:</h3>
                            <textarea className='w-full h-52 bg-transparent border-2 border-white outline-none' placeholder='' />
                            <button className='w-full text-xl font-semibold bg-emerald-500 hover:bg-emerald-600 rounded-lg px-6 py-3 mt-4'>Create Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateTask