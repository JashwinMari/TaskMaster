import React, { useState } from 'react'
import {API_BASE_URL} from '../config';
import AddNote from './AddNote';
import EditNote from './EditNote';

const NoteOptions = ({tasks, setTasks, index, deletedTask, setDeletedTask, rotate, setRotate, noteOptions, setNoteOptions, editedTask, setEditedTask, lastAddedDate, setLastAddedDate}) => {
   const [showEditWindow, setShowEditWindow] = useState(false);
   const today = new Date();
  const formatted = today.getFullYear()+ '-'  +
                    String(today.getMonth() + 1).padStart(2, '0')+ '-' +
                    String(today.getDate()).padStart(2, '0');
   const deleteTask = async () => {
      try {
          await fetch(`${API_BASE_URL}/taskOp/deleteTask/${tasks[index].id}/`, {
            method: "DELETE", 
            headers: {
            "Content-Type": "application/json",
            },
          })
          setDeletedTask(!deletedTask);
          setRotate(!rotate);
          setNoteOptions(!noteOptions);
          setLastAddedDate(formatted);
        } catch (error) {
          console.error(error);
        }
    };
    const editTask = async () => {
      try {
          await fetch(`${API_BASE_URL}/taskOp/updateTask/${tasks[index].id}/`, {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  task: "blahblahblah",
                  taskDate: "2026-03-05",
                  isCompleted: false,
              }),
          });
          setRotate(!rotate);
          setEditedTask(!editedTask);
          setNoteOptions(!noteOptions);
          setLastAddedDate(tasks[index].fullDate.getFullYear()+"-"+(tasks[index].fullDate.getMonth()+1)+"-"+tasks[index].fullDate.getDate());
      } catch (error) {
          console.error("Failed to update task:", error);
      }
    };
    return (
    <div className='absolute inset-0 backdrop-blur-sm z-10 flex flex-col items-center justify-center'>
        <div className='bg-white p-6 rounded-xl w-4/5 h-1/6 min-w-[220px] shadow-[0_0_10px_rgba(0,0,0,0.2)] gap-5 flex justify-center items-center'>
          <div onClick={() => setShowEditWindow(!showEditWindow)} className='cursor-pointer w-2/5 h-3/5 min-w-[90px] min-h-[40px] bg-black rounded-xl bg-white border bitcountPropSingleFont text-2xl flex justify-center items-center hover:border-black hover:ring-2 hover:ring-black/20 outline-none transition-all'>Edit</div>
          <div onClick={deleteTask} className='cursor-pointer w-2/5 h-3/5 min-w-[90px] min-h-[40px] bg-black rounded-xl bg-white border bitcountPropSingleFont text-2xl flex justify-center items-center hover:border-black hover:ring-2 hover:ring-black/20 outline-none transition-all'>Delete</div>
        </div>
        {
          showEditWindow && (<EditNote tasks={tasks} setTasks={setTasks} index={index} rotate={rotate} setRotate={setRotate} noteOptions={noteOptions} setNoteOptions={setNoteOptions} editedTask={editedTask} setEditedTask={setEditedTask} lastAddedDate={lastAddedDate} setLastAddedDate={setLastAddedDate}/>)
        }
    </div>
  )
}

export default NoteOptions