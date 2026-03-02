import React, { useState } from 'react'

const Note = ({noteOptions, setNoteOptions}) => {
    const [noteChecked, setNoteChecked] = useState(false);
    return (
    <div>
        <div className='horizontal-line'/>
        <div className='flex items-center gap-5'>
            <label className="flex items-center gap-5 cursor-pointer">
                <input type="checkbox" className="hidden peer" onChange={(e) => setNoteChecked(e.target.checked)}/>
                <div className="w-6 h-6 shrink-0 bg-white flex items-center justify-center text-white border-2 border-gray-400 rounded peer-checked:bg-black peer-checked:border-black transition -mt-1" >
                        <p className='text-white'>&#10003;</p>    
                </div>
            </label>
            <h2 className={`text-md transition-all cursor-pointer ${noteChecked && ("line-through")}`} onClick={() => {
                setNoteOptions(!noteOptions);
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam minus impedit in quo ipsa consequuntur est animi. Dolore quod similique, laudantium harum velit, suscipit nobis excepturi voluptatibus, voluptates modi veritatis?</h2>
        </div>
    </div>
    )
}

export default Note