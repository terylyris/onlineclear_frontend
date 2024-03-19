import React from 'react'

function StudentAffairs() {
  const [checked, setchecked] = useState(false)
  return (
    <div className='p-4  flex justify-center items-center flex-1 flex-col max-w-[750px]'>
      <div className='w-full tracking-widest px-4 text-xl text-blue-500 flex justify-center items-center font-semibold'>
      StudentAffairs
      </div>
      <div className='w-full  gap-3 flex flex-col py-3 justify-start md:justify-center'>
      <div className='w-full items-center md:my-6 md:px-3 flex flex-row  justify-around  md:justify-evenly'>
        <p>DeansOffice</p>
        <button className='font-semibold py-2 bg-blue-500 rounded-md text-white px-6'>Check</button>
      </div>
      <div className='w-full  items-center md:my-6 md:px-3 flex flex-row  md:justify-evenly justify-around'>
        <p>Hostel</p>
        <button className='font-semibold py-2 md:py-3  bg-blue-500 rounded-md text-white px-6'>Check</button>
      </div>
      <div className='w-full  items-center md:my-6 md:px-3 flex flex-row  md:justify-evenly justify-around'>
        <p>Games</p>
        <button className='font-semibold py-2 md:py-3  bg-blue-500 rounded-md text-white px-6'>Check</button>
      </div>
      <div className='w-full justify-center flex mt-5'>
        {checked? <div className='bg-green-500 font-semibold w-fit px-6 py-3 rounded-md text-white'>Successfull</div> : <div className='bg-red-500 font-semibold w-fit px-6 py-3 rounded-md text-white'>
          Failed
          </div>}
      </div>
      </div>
    </div>
    
  )
}
export default StudentAffairs
