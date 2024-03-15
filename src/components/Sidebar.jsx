import React from 'react'

function Sidebar() {
  return (
    <div className='h-full bg-blue-500 text-white flex flex-col justify-center gap-4 w-1/6'>
      <button>Dashboard</button>
      <button>Faculty</button>
      <button>Library</button>
      <button>Student Affairs</button>
      <button>Finance</button>
      <button>Registrar</button>
      <button>Log Out</button>
    </div>
  )
}

export default Sidebar
