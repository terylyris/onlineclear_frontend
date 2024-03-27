import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Faculty from '../components/Faculty'
import Library from '../components/Library'
import Finance from '../components/Finance'
import StudentAffairs from '../components/StudentAffairs'
import Registrar from '../components/Registrar'
import { Router, redirect } from 'react-router-dom'

function Homepage() {
const userid = localStorage.getItem("userid")

  
    const [selectedItem, setSelecteditem]= useState('Dashboard')
    const selectItem = (item) =>{
        setSelecteditem(item)
        console.log('clicked ',item)
    }
  return (
    <div>
      {userid? (
      <div className='w-screen h-screen flex flex-col' >
      <Navbar onselectItem={selectItem} />
      <div className='flex-1 flex flex-row bg-gray-100'>
         <Sidebar selectItem={selectItem} />
         <div className='md:w-5/6 w-full'>
            {selectedItem === 'Dashboard' && <Dashboard selectItem={selectItem}/>}
            {selectedItem === 'Faculty' && <Faculty/>}
            {selectedItem === 'Finance' && <Finance/>}
            {selectedItem === 'Library' && <Library/>}
            {selectedItem === 'StudentAffairs' && <StudentAffairs/>}
            {selectedItem === 'Registrar' && <Registrar/>}
         </div>
      </div>
    </div>
    ):(window.location.href = '/Login' )}
 
    </div>
    )
}

export default Homepage
