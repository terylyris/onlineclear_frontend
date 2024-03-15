import React from 'react'

function Login() {
  return (
    <div className='bg-gray-200 h-screen w-screen flex justify-center items-center'>

      <div className='w-[60vw] max-w-[350px] '>
        <h1 className='text-blue-500 text-2xl font-semibold mb-6 w-full text-center'>Please Log in</h1>
        <form className='p-2 '>
            <div>
                <p className='text-sm mb-2'>Reg No:</p>
                <input className='h-12 w-full rounded-md pl-5' placeholder='Enter your Reg No' type='text'/>
            </div>
            <div>
                <p>Password</p>
                <input className= 'h-12 w-full rounded-md pl-5' placeholder='Enter password'type='password'/>
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
