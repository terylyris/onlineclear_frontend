import React from 'react'
import { IoPersonSharp } from "react-icons/io5";


function Navbar() {
  return (
    <div className='w-screen flex flex-row justify-between py-2 px-4 md:px-12 lg:px-20 bg-white'>
      <img width={48}  src="/logo.png" alt="logo" />
      <div>
        <p className='font-semibold flex-row flex gap-2 divide-x-2'>
        <IoPersonSharp size={24}/>
           Hi, Terry
        </p>
      </div>
    </div>
  )
}

export default Navbar
