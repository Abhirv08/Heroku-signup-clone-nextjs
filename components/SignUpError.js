
import React from 'react'

export default function SignUpError(props) {
  return (
    <div className='bg-[#fdf6f6] text-sm text-[#c20707] w-10/12 lg:w-[302px] p-4 pt-[10px] m-auto border-[1px] rounded-md rounded-b-none border-[#de7575] border-b-0 text-center'>
        {props.signupError === "Firebase: Error (auth/email-already-in-use)." ? 
           "Already Registered." : props.signupError
        }
    </div>
  )
}
