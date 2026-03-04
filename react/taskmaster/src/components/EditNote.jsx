import React, { useState } from 'react'
import { API_BASE_URL } from '../config';

const EditNote = ({tasks, setTasks, index, rotate, setRotate, noteOptions, setNoteOptions, editedTask, setEditedTask, lastAddedDate, setLastAddedDate}) => {
    const [dateField, setDateField] = useState(`${tasks[index].fullDate.getFullYear()}-${String(tasks[index].fullDate.getMonth() + 1).padStart(2, "0")}-${String(tasks[index].fullDate.getDate()).padStart(2, "0")}`);
    const [taskField, setTaskField] = useState(tasks[index].task);

    const editTask = async () => {
        try {
            await fetch(`${API_BASE_URL}/updateTask/${tasks[index].id}/`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    task: taskField,
                    taskDate: dateField,
                    isCompleted: false,
                }),
            });
            setRotate(!rotate);
            setEditedTask(!editedTask);
            setNoteOptions(!noteOptions);
            setLastAddedDate(dateField);
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };
  return (
    <div className='absolute inset-0 backdrop-blur z-10 flex flex-col items-center justify-center'>
        <div className='bg-white p-3 rounded-xl w-4/5 h-4/6 min-h-[230px] shadow-[0_0_10px_rgba(0,0,0,0.2)] flex flex-col gap-3'>
          <div className="relative w-full h-auto">
            <input
            value={dateField}
            onChange={(e) => setDateField(e.target.value)}
            type="date" className="cursor-pointer box-border h-auto shrink-0 block max-w-full w-full appearance-none peer px-3 pt-6 pb-2 rounded-xl border border-black/30 hover:border-black hover:ring-2 hover:ring-black/20 outline-none transition-all bitcountPropSingleFont"/>
            <label className="absolute left-4 top-2 text-sm text-black/60 peer-focus:text-black transition-all">
            <h2 className='text-md'>Select Date</h2>
            </label>
          </div>
          <div className='flex-1 rounded-xl shadow-lg p-3 border border-black/30 hover:border-black hover:ring-2 hover:ring-black/20 outline-none transition-all'>
            <textarea value={taskField} onChange={(e) => setTaskField(e.target.value)} className='w-full h-full outline-none bitcountPropSingleFont text-lg resize-none'/>
          </div>
          <div className='cursor-pointer h-auto bg-black rounded-xl bg-white border bitcountPropSingleFont text-2xl flex justify-center items-center hover:border-black hover:ring-2 hover:ring-black/20 outline-none transition-all' onClick={editTask}>
            Add
          </div>
        </div>
    </div>
  )
}

export default EditNote