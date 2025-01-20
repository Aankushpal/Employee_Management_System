import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const SubmitHandler = (e) => {
    e.preventDefault()
    
    if(password.length<8){
      toast.error('Password must be atleast 8 characters long!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }

    if(!/[!@$%&().,]/.test(password)){
      toast.error('Password must contain atleast one special characters!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      return;
    }

    console.log('Form Submitted')
    console.log("Username: ", username)
    setUsername("")
    console.log("Password : ", password)
    setPassword("") 

    toast(' Login Successfully', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-[#333]'>
        <div className='border-2 border-gray-300 px-10 py-16 rounded-lg'>
          <form
            onSubmit={SubmitHandler}
            className='flex flex-col gap-2 items-center justify-center'>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='outline-none border-b-2 text-2xl px-3 py-2 bg-transparent text-white'
              type="text"
              placeholder='Enter Username' />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='outline-none border-b-2 text-2xl px-3 py-2 bg-transparent text-white'
              type="password"
              placeholder='Enter Password' />
            <button
              className='text-2xl text-white bg-emerald-600 px-4 py-2 mt-10 rounded-xl'>Submit</button>
          </form>
        </div>
      </div>
        
      <ToastContainer />
    </>
  )
}

export default Login