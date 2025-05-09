import React from 'react'

const Flag = () => {
  
  return (
    <div className='relative'>
      <div className='bg-black w-10 h-2 rounded-tr-sm'></div>
      <div className='bg-white w-10 h-2'></div>
      <div className='bg-green-500 w-10 h-2 rounded-br-sm'></div>
      <div className='w-0 h-0 border-t-[10px] border-b-[10px] border-l-[15px] border-t-transparent border-b-transparent border-red-500 absolute left-0 bottom-0.25'></div>
    </div>
  )
}

export default Flag