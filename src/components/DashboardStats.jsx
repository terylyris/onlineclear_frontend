import React, { useState } from 'react'
import { GiCheckMark } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

function DashboardStats() {
    const [checked , setChecked] = useState(false)
  return (
    <div className='w-full py-3 md:py-4 px-2 gap-4  rounded-md grid grid-cols-2 md:grid-cols-3'>
        <div className='w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white'>
            <p className='tracking wide'>Faculty</p>
            <div onClick={()=>setChecked(prev=>!prev) }  className='w-full  h-full justify-center flex items-center'>
            {!checked ?
            <RxCross1 className='text-red-500' size={40} />

            : (<GiCheckMark className='text-green-500' size={40} />)}

            </div>

        </div>
         <div className='w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white'>
            <p className='tracking wide'>Library</p>
            <div onClick={()=>setChecked(prev=>!prev) }  className='w-full  h-full justify-center flex items-center'>
            {!checked ?
            <RxCross1 className='text-red-500' size={40} />

            : (<GiCheckMark className='text-green-500' size={40} />)}

            </div>

        </div>
         <div className='w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white'>
            <p className='tracking wide'>Student affairs</p>
            <div onClick={()=>setChecked(prev=>!prev) }  className='w-full  h-full justify-center flex items-center'>
            {!checked ?
            <RxCross1 className='text-red-500' size={40} />

            : (<GiCheckMark className='text-green-500' size={40} />)}

            </div>

        </div>
         <div className='w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white'>
            <p className='tracking wide'>Finance</p>
            <div onClick={()=>setChecked(prev=>!prev) }  className='w-full  h-full justify-center flex items-center'>
            {!checked ?
            <RxCross1 className='text-red-500' size={40} />

            : (<GiCheckMark className='text-green-500' size={40} />)}

            </div>

        </div>
         <div className='w-full shadow-lg md:shadow-xl rounded-md p-2 md:p-4 min-h-[200px] bg-white'>
            <p className='tracking wide'>Registrar</p>
            <div onClick={()=>setChecked(prev=>!prev) }  className='w-full  h-full justify-center flex items-center'>
            {!checked ?
            <RxCross1 className='text-red-500' size={40} />

            : (<GiCheckMark className='text-green-500' size={40} />)}

            </div>

        </div>

      </div>
  )
}

export default DashboardStats
