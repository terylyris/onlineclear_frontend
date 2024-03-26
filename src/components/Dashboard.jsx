import React from 'react'
import DashboardStats from './DashboardStats'

function Dashboard({selectItem}) {
  const name= localStorage.getItem("name").split(" ")[0]
  return (
    <div className='p-4  flex justify-center items-center flex-1 flex-col'>
      <div className='text-blue-500 w-full justify-center items-center flex flex-col'>
        <h1 className=' font-semibold tracking-widest'>Dashboard</h1>
        <h2>Welcome {name}, see your clearance Status</h2>
      </div>
      <DashboardStats selectItem={selectItem} />
    </div>
  )
}

export default Dashboard
