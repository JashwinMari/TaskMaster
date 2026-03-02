import React from 'react'

const NoteOptions = () => {
  return (
    <div className='absolute inset-0 backdrop-blur-sm z-10 flex flex-col items-center justify-center'>
        <div className='bg-white p-6 rounded-xl w-4/5 h-1/6 min-w-[220px] shadow-[0_0_10px_rgba(0,0,0,0.2)] gap-5 flex justify-center items-center'>
          <div className='cursor-pointer w-2/5 h-3/5 min-w-[90px] min-h-[40px] bg-black rounded-xl bg-white border bitcountPropSingleFont text-2xl flex justify-center items-center hover:border-black hover:ring-2 hover:ring-black/20 outline-none transition-all'>Edit</div>
          <div className='cursor-pointer w-2/5 h-3/5 min-w-[90px] min-h-[40px] bg-black rounded-xl bg-white border bitcountPropSingleFont text-2xl flex justify-center items-center hover:border-black hover:ring-2 hover:ring-black/20 outline-none transition-all'>Delete</div>
        </div>
    </div>
  )
}

export default NoteOptions