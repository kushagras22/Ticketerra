import React from 'react'

const Spinner = () => {
const message = "Hang tight, we're just there";
  return (
    <div className='flex flex-col justify-center items-center min-h-[200px] gap-4'>
        <div className='w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin'></div>
        {message && <p className="text-[17px] web-light text-zinc-800">{message}</p>}
    </div>
  )
}

export default Spinner