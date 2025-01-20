import React from 'react'
import Login from './components/Auth/Login'
import EmployeeD from './components/Dashboards/EmployeeD'
import AdminD from './components/Dashboards/AdminD'

const App = () => {
  return (
    <>
      <div className='w-full h-screen bg-[#333]'>
         {/* <Login /> */}
       {/* <EmployeeD /> */}
       <AdminD />
      </div>
    </>
  )
}

export default App