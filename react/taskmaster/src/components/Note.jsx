import React, { useState } from 'react'
import { API_BASE_URL } from '../config';
import NoteOptions from './NoteOptions';

const Note = ({noteOptions, setNoteOptions, tasks, setTasks, index, deletedTask, setDeletedTask, rotate, setRotate, editedTask, setEditedTask, lastAddedDate, setLastAddedDate}) => {
    const updateTask = async () => {
        try {
            await fetch(`${API_BASE_URL}/taskOp/updateTask/${tasks[index].id}/`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    task: tasks[index].task,
                    taskDate: tasks[index].fullDate.getFullYear()+"-"+(tasks[index].fullDate.getMonth()+1)+"-"+tasks[index].fullDate.getDate(),
                    isCompleted: !tasks[index].isCompleted,
                }),
            });
            setEditedTask(!editedTask);
            setLastAddedDate(`${tasks[index].fullDate.getFullYear()}-${tasks[index].fullDate.getMonth()+1}-${tasks[index].fullDate.getDate()}`);
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    }
    return (
    <div>
        <div className='horizontal-line'/>
        <div className='flex items-center gap-5'>
            <label className="flex items-center gap-5 cursor-pointer">
                <input type="checkbox" className="hidden peer" checked={tasks[index].isCompleted} onChange={(e) => {
                    updateTask()
                }}/>
                <div className="w-6 h-6 shrink-0 bg-white flex items-center justify-center text-white border-2 border-gray-400 rounded peer-checked:bg-black peer-checked:border-black transition -mt-1" >
                        <p className='text-white'>&#10003;</p>    
                </div>
            </label>
            <h2 className={`text-md w-full transition-all cursor-pointer ${tasks[index].isCompleted && ("line-through")}`} onClick={() => {
                setNoteOptions(!noteOptions);
            }}>{tasks[index].task}</h2>
            {noteOptions &&
                (
                <NoteOptions tasks={tasks} setTasks={setTasks} index={index} deletedTask={deletedTask} setDeletedTask={setDeletedTask} rotate={rotate} setRotate={setRotate} noteOptions={noteOptions} setNoteOptions={setNoteOptions} editedTask={editedTask} setEditedTask={setEditedTask} lastAddedDate={lastAddedDate} setLastAddedDate={setLastAddedDate}/>
                )
            }
        </div>
    </div>
    )
}

export default Note