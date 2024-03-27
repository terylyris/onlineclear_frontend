import React, { useState } from 'react'

function Library() {
  const [checked, setchecked] = useState(false)
  const id = localStorage.getItem("userid")
  const checkBooks = async ()=>{
    const response = await fetch(`https://online-clear.onrender.com/library/returned/${id}`,{
      method: 'GET',
    });
    const data = await response.json()
    console.log(data)
    const status = data.clear;
    setchecked(status)
    
  }
  return (
    <div className='p-4  flex justify-center items-center flex-1 flex-col max-w-[750px]'>
      <div className='w-full tracking-widest px-4 text-xl text-blue-500 flex justify-center items-center font-semibold'>
      Library
      </div>
      <div className='w-full  gap-3 flex flex-col py-3 justify-start md:justify-center'>
      <div className='w-full items-center md:my-6 md:px-3 flex flex-row  justify-around  md:justify-evenly'>
        <p>bookreturned</p>
        {
          checked ? <button onClick={checkBooks} className='font-semibold py-2 bg-green-500 rounded-md text-white px-6'>Check</button>:<button onClick={checkBooks} className='font-semibold py-2 bg-blue-500 rounded-md text-white px-6'>Check</button>
        }
      </div>
      <div className='w-full justify-center flex mt-5'>
        {checked? <div className='bg-green-500 font-semibold w-fit px-6 py-3 rounded-md text-white'>Successfull</div> : <div className='bg-red-500 font-semibold w-fit px-6 py-3 rounded-md text-white'>
          Failed
          </div>}
      </div>
      </div>
      <div className='flex  flex-row justify-center items-center '>
     <img width={560}  src="image.jpeg" alt="image" /></div>
      
    </div>
    
  )
}

export default Library
