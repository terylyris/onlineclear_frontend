import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Homepage() {
  return (
    <div className='w-screen h-screen flex flex-col' >
      <Navbar/>
      <div className='flex-1 flex flex-row bg-gray-100'>
         <Sidebar/>
         <div className='min-w-1/4 '>
            Hello
         </div>
      </div>
    </div>
  )
}

export default Homepage
