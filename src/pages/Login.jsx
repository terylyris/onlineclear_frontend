import React, { useState } from 'react'


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
  
      const response = await fetch("https://online-clear.onrender.com/student/login/", {
        method: "POST",
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Failed to login');
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
      window.location.href = '/'
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle error (e.g., display error message to user)
    }
  }
  

  return (
    <div className='bg-gray-200 h-screen w-screen flex justify-center items-center'>

      <div className='w-[60vw] max-w-[350px] '>
        <h1 className='text-blue-500 text-2xl font-semibold mb-6 w-full text-center'>Please Log in</h1>
        <form onSubmit={handleLogin} className='p-2 '>
            <div>
                <p className='text-sm mb-2'>Reg No:</p>
                <input className='h-12 w-full rounded-md pl-5' name="regno" placeholder='Enter your Reg No' type='text' onChange={(e)=>{setRegNo(e.target.value)}}/>
            </div>
            <div>
                <p>Password</p>
                <input className= 'h-12 w-full rounded-md pl-5' name="password" placeholder='Enter password' onChange={(e)=>{setPassword(e.target.value)}} type='password'/>
            </div>
            <div className='my-5 flex md:flex-row justify-between flex-col '>
                <div className='flex flex-row gap-2 mb-3 '>
                    <input className='h-6 w-6'  type="checkbox" name="" id="" />
                    <p className='text-sm first-letter:'>Remember Me</p>
                </div>
                <a className='text-blue-500' href="#">Forgot Password?</a>
            </div>
            <button className='h-12 w-full rounded-md bg-blue-500 text-white font-semibold mt-5 text-sm md:text-base'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
