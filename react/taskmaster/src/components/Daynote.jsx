import React, {useState} from 'react'
import Note from './Note'

const Daynote = ({selDate, dates, createNote, noteOptions, setNoteOptions, tasks, setTasks, deletedTask, setDeletedTask, rotate, setRotate, editedTask, setEditedTask, lastAddedDate, setLastAddedDate}) => {
    const selectedDate = dates[selDate]?.fullDate?.toDateString();
    const filteredTasks = tasks.filter(
    task => task.fullDate.toDateString() === selectedDate
    );
    return (   
        <div className= {`relative p-3 bg-white border rounded-xl border-gray-200 h-full shadow-[0_0_10px_rgba(0,0,0,0.2)] flex flex-col ${createNote ? "overflow-hidden" : "overflow-y-auto"}`}>
            <div className='p-1 flex flex-col'>
                <h2 className='text-sm'>{dates[selDate]?.fullDate?.toDateString()}</h2>
            </div>
            <div>
                {filteredTasks.map((filTask, index) => ( <Note key={filTask.id} noteOptions={noteOptions} setNoteOptions={setNoteOptions} filTask={filTask} tasks={tasks} setTasks={setTasks} index={
                    tasks.findIndex(task => task.id === filTask.id)
                } deletedTask={deletedTask} setDeletedTask={setDeletedTask} rotate={rotate} setRotate={setRotate} editedTask={editedTask} setEditedTask={setEditedTask} lastAddedDate={lastAddedDate} setLastAddedDate={setLastAddedDate}/>
                ))}
            </div>
        </div>
    )
}

export default Daynote