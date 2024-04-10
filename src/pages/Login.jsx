import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function Login() {
  const [regNo,setRegNo] = useState('')
  const [password,setPassword] = useState('')


  const handleLogin = async (e) => {
    e.preventDefault();
  
    console.log(regNo);
    console.log(password);
  
    try {
      const formData = new FormData();
      formData.append('regno', regNo);
      formData.append('password', password);
      toast.warn('Loging in...')
      const response = await fetch("https://online-clear.onrender.com/student/login/", {
        method: "POST",
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Failed to login');
        toast.error('Invalid credentials')
      }
      console.log(response.status)
      const data = await response.json();
      console.log(data);
      localStorage.setItem("name",data.name)
      localStorage.setItem("userid",data.id)
      localStorage.setItem("regno",data.regNo)
      console.log(localStorage.getItem("name"))
      console.log(localStorage.getItem("userid"))
      console.log(localStorage.getItem("regno"))
      toast.success('Success redirecting...')
      PushDelay()
      
    } catch (error) {
      console.error('Login error:', error.message);
      toast.error('An error occured check credentials')
      // Handle error (e.g., display error message to user)
    }
  }
  const PushDelay = ()=>{
    setTimeout(()=>{
      window.location.href = '/'
    }, 2000)
  }
  

  return (
    <div className='bg-gray-200 h-screen w-screen flex justify-center items-center'>
      <ToastContainer/>
      <div className='w-[60vw] max-w-[350px] '>
        <h1 className='text-blue-500 text-2xl font-semibold mb-6 w-full text-center'>Please Log in</h1>
        <form onSubmit={handleLogin} className='p-2 '>
            <div>
                <p className='text-sm mb-2'>Reg No:</p>
                <input className='h-12 w-full rounded-md pl-5 outline-none' name="regno" placeholder='Enter your Reg No' type='text' onChange={(e)=>{setRegNo(e.target.value)}}/>
            </div>
            <div>
                <p>Password</p>
                <input className= 'h-12 w-full rounded-md pl-5 outline-none' name="password" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}} type='password'/>
            </div>
            <div className='my-5 flex md:flex-row justify-between flex-col '>
                <div className='flex flex-row gap-2 mb-3 '>
                    <input className='h-6 w-6'  type="checkbox" name="" id="" />
                    <p className='text-sm first-letter:'>Remember Me</p>
                </div>
                {/* <a className='text-blue-500' href="#">Forgot Password?</a> */}
            </div>
            <button className='h-12 w-full rounded-md bg-blue-500 text-white font-semibold mt-5 text-sm md:text-base'>Log In</button>
        </form>
        
      <a className='mt-12 text-red-500 underine' href="mailto:theresiamutisya33@gmail.com?subject=Error%20Report&body=I%20have%20difficulty%20">Report Error</a>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Login
