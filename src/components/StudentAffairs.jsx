import React, { useState } from 'react'

function StudentAffairs() {
  const [checked, setchecked] = useState(false)
  const [games, setGames] = useState(false)
  const [hostel, setHostel] = useState(false)
  const id = localStorage.getItem("userid")
  const url = "https://online-clear.onrender.com/studentaffairs/"
  const checkDean = async ()=>{
    const response = await fetch(url+"disciplinary/"+id,{
      method: 'GET',
    });
    const data = await response.json()
    console.log(data)
    const status = data.clear;
    setchecked(status)
    
  }
  const checkGames = async ()=>{
    const response = await fetch(url+"activities/"+id,{
      method: 'GET',
    });
    const data = await response.json()
    console.log(data)
    const status = data.clear;
    setGames(status)
    
  }
  const checkHostel = async ()=>{
    const response = await fetch(url+"damages/"+id,{
      method: 'GET',
    });
    const data = await response.json()
    console.log(data)
    const status = data.clear;
    setHostel(status)
    
  }
  return (
    <div className='p-4  flex justify-center items-center flex-1 flex-col max-w-[750px]'>
      <div className='w-full tracking-widest px-4 text-xl text-blue-500 flex justify-center items-center font-semibold'>
      StudentAffairs
      </div>
      <div className='w-full  gap-3 flex flex-col py-3 justify-start md:justify-center'>
      <div className='w-full items-center md:my-6 md:px-3 flex flex-row  justify-around  md:justify-evenly'>
        <p>DeansOffice</p>
        {
          checked ? <button onClick={checkDean} className='font-semibold py-2 bg-green-500 rounded-md text-white px-6'>Check</button>:<button onClick={checkDean} className='font-semibold py-2 bg-red-500 rounded-md text-white px-6'>Not cleared</button>
        }
      </div>
      <div className='w-full  items-center md:my-6 md:px-3 flex flex-row  md:justify-evenly justify-around'>
        <p>Hostel</p>
        {
          hostel ? <button onClick={checkHostel} className='font-semibold py-2 bg-green-500 rounded-md text-white px-6'>Check</button>:<button onClick={checkHostel} className='font-semibold py-2 bg-red-500 rounded-md text-white px-6'>Not cleared</button>
        }
      </div>
      <div className='w-full  items-center md:my-6 md:px-3 flex flex-row  md:justify-evenly justify-around'>
        <p>Games</p>
        {
          games ? <button onClick={checkGames} className='font-semibold py-2 bg-green-500 rounded-md text-white px-6'>Check</button>:<button onClick={checkGames} className='font-semibold py-2 bg-red-500 rounded-md text-white px-6'>Not cleared</button>
        } 
      </div>
      <div className='w-full justify-center flex mt-5'>
        {(checked && hostel)? <div className='bg-green-500 font-semibold w-fit px-6 py-3 rounded-md text-white'>Successfull</div> : <div className='bg-red-500 font-semibold w-fit px-6 py-3 rounded-md text-white'>
          Failed
          </div>}
      </div>
      </div> 
      <div className='flex  flex-row justify-center items-center '>
     <img width={400}  src="image.jpeg" alt="image" /></div>
      
    </div>
    
  )
}
export default StudentAffairs
