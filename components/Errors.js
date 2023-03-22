import React from 'react'

export default function Errors({ errorMessages, isAllFilled }) {

  return (
    <div className='bg-[#fdf6f6] text-sm text-[#c20707] w-10/12 lg:w-[302px] p-4 pt-[10px] m-auto border-[1px] rounded-md rounded-b-none border-[#de7575] border-b-0'>
      {!isAllFilled && <p className='font-bold'>Please fill in all required fields.</p>}
      <ul className='list-disc pl-3 '>
        {errorMessages.map((error, index) => (
          <li className='ml-4' key={index} >{error}</li>
        ))}
      </ul>
    </div>
  )
}
