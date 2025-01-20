import React from 'react'

const Header = () => {
  return (
     <>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg'>Helllo <br />
            <span className='text-2xl font-semibold'>Ankush👋</span></h1>
            <button className='bg-red-500 px-5 py-2 rounded-lg font-semibold text-lg'>Log Out</button>
        </div>
     </>
  )
}

export default Header;