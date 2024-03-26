import React, { useState } from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscError } from "react-icons/vsc";

function Navbar({onselectItem}) {
  const [hidden, setHidden] = useState(true)
  const name= localStorage.getItem("name").split(" ")[0]
  const handleItemClick =(item)=>{
    onselectItem(item)
    setHidden(prev=>!prev)
  }
  return (
    <div className='w-screen'>
      <div className='w-screen sticky top-0 flex flex-row justify-between py-2 px-4 md:px-12 lg:px-20 bg-white'>
     <div className='flex gap-3 flex-row justify-center items-center divide-x-2'>
     <img width={48}  src="/logo.png" alt="logo" />
     <div className='md:hidden'>
     {hidden? 
     <GiHamburgerMenu  size={32} onClick={()=>setHidden(prev=>!prev)} />
     :
     <VscError size={32} onClick={()=>setHidden(prev=>!prev)} /> 
     }
     </div>
     </div>
      <div>
        <p className='font-semibold flex-row flex gap-2 divide-x-2'>
        <IoPersonSharp size={24}/>
           Hi, {name}
        </p>
      </div>
    </div>
    <ul className={`w-full flex-col justify-center items-center gap-1 ${hidden ? 'hidden': 'flex'} `}>
    <li onClick={()=>handleItemClick('Dashboard')}>Dashboard</li>
      <li onClick={()=>handleItemClick('Faculty')}>Faculty</li>
      <li onClick={()=>handleItemClick('Library')}>Library</li>
      <li onClick={()=>handleItemClick('StudentAffairs')}>Student Affairs</li>
      <li onClick={()=>handleItemClick('Finance')}>Finance</li>
      <li onClick={()=>handleItemClick('Registrar')}>Registrar</li>
      <li onClick={()=>window.location.replace("/Login")}>Log Out</li>
    </ul>
    </div>
  )
}

export default Navbar
