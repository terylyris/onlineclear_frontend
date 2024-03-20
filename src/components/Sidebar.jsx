import React from 'react'

function Sidebar({selectItem}) {
  return (
    <div className='h-full hidden bg-blue-500 text-white md:flex flex-col justify-center gap-4 w-80% md:w-1/6'>
      <button onClick={() => selectItem('Dashboard')}>Dashboard</button>
      <button onClick={() => selectItem('Faculty')}>Faculty</button>
      <button onClick={() => selectItem('Library')}>Library</button>
      <button onClick={() => selectItem('StudentAffairs')}>Student Affairs</button>
      <button onClick={() => selectItem('Finance')}>Finance</button>
      <button onClick={() => selectItem('Registrar')}>Registrar</button>
      <button>Log Out</button>
    </div>
  )
}

export default Sidebar
