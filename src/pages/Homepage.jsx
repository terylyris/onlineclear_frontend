import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Faculty from '../components/Faculty'
import Library from '../components/Library'
import Finance from '../components/Finance'
import StudentAffairs from '../components/StudentAffairs'
import Registrar from '../components/Registrar'

function Homepage() {
    const [selectedItem, setSelecteditem]= useState('Dashboard')
    const selectItem = (item) =>{
        setSelecteditem(item)
        console.log('clicked ',item)
    }
  return (
    <div className='w-screen h-screen flex flex-col' >
      <Navbar/>
      <div className='flex-1 flex flex-row bg-gray-100'>
         <Sidebar selectItem={selectItem} />
         <div className='min-w-1/4 '>
            {selectedItem === 'Dashboard' && <Dashboard/>}
            {selectedItem === 'Faculty' && <Faculty/>}
            {selectedItem === 'Finance' && <Finance/>}
            {selectedItem === 'Library' && <Library/>}
            {selectedItem === 'StudentAffairs' && <StudentAffairs/>}
            {selectedItem === 'Registrar' && <Registrar/>}
         </div>
      </div>
    </div>
  )
}

export default Homepage
