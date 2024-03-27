import React, { useEffect, useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { MdCelebration } from "react-icons/md";

function Registrar() {
  const { width, height } = useWindowSize()

  useEffect(()=>{
    checkBooks()
  },[])
  const [checked, setchecked] = useState(false)
  const [loading, setloading] = useState(false)
  const id = localStorage.getItem("userid")
  const checkBooks = async ()=>{
    setloading(true)
    const response = await fetch(`https://online-clear.onrender.com/student/checkAll/${id}`,{
      method: 'GET',
    });
    const data = await response.json()
    console.log(data)
    if(data.faculty == true && data.finance && data.library && data.studentaffairs)
    {setchecked(true)
      console.log('You are cleared')
      setloading(false)
}  
    
  else{
    setchecked(false)
    setloading(false)
  }
    
  }

  
  return (
    <div className='p-4 w-full h-full  flex justify-center items-center flex-1 flex-col'>
          <Confetti
      width={width}
      height={height}
      run={checked}
      recycle={false}
    />

      <p className='font-semibold text-xl text-blue-500'>Registrar clearance</p>
      {loading ? <p>Loading...</p> : 
      <div className='justify-center mt-8 items-center flex flex-col gap-3'>
      {checked &&    
        <p className='flex justify-center items-center flex-col'>      
      <MdCelebration size={48} />
          <span>You are cleared.You can pick your gown</span>
          </p>
     }
     {!checked && <p>You are not cleared!! Recheck the areas</p>}
      </div>
     }
    </div>
  )
}

export default Registrar
