import React, {useState} from 'react'
import Note from './Note'

const Daynote = ({selDate, dates, createNote, noteOptions, setNoteOptions}) => {
    return (
        <div className= {`relative p-3 bg-white border rounded-xl border-gray-200 h-full shadow-[0_0_10px_rgba(0,0,0,0.2)] flex flex-col ${createNote ? "overflow-hidden" : "overflow-y-auto"}`}>
            <div className='p-1 flex flex-col'>
                <h2 className='text-sm'>{dates[selDate]?.fullDate?.toDateString()}</h2>
            </div>
            <div>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
                <Note noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
            </div>
        </div>
    )
}

export default Daynote