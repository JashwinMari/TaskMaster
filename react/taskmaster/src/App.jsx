import React, { useEffect, useState } from 'react'
import CalendarBadge from './components/CalendarBadge'
import Daynote from './components/Daynote'; 
import plus from './assets/plus.svg'
import AddNote from './components/AddNote';
import NoteOptions from './components/NoteOptions';
import { API_BASE_URL } from './config';

const App = () => {
  const [lastAddedDate, setLastAddedDate] = useState("");
  const [editedTask, setEditedTask] = useState(false);
  const [deletedTask, setDeletedTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [dates, setDates] = useState([]);
  const [selDate, setSelDate] = useState(0);
  const [createNote, setCreateNote] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [noteOptions, setNoteOptions] = useState(false);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // Get tasks and update states
  const fetchTasks = async () => {
    try {
    const taskParse = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const taskDates = [];

    const response = await fetch(`${API_BASE_URL}/getTasks/`, {
      method: 'GET'
    });

      if(!response.ok) {
        throw new Error('Failed to fetch tasks');
      }

      const data = await response.json();
      for (let i=0; i<data.length; i++) {
        const [year, month, day] = data[i].taskDate.split("-").map(Number);
        const date = new Date(year, month - 1, day);
        taskParse.push({
          fullDate: date,
          task: data[i].task,
          isCompleted: data[i].isCompleted,
          id: data[i].id,
        })
        taskDates.push({
          day: days[date.getDay()],
          number: date.getDate(),
          month: months[date.getMonth()],
          fullDate: date,
          id: data[i].id,
        })
      }
      taskDates.push({
        day: days[today.getDay()],
        number: today.getDate(),
        month: months[today.getMonth()],
        fullDate: today,
        id: -1,
      })
      const filTaskDates = [
        ...new Map(
          taskDates.map(item => [
            item.fullDate.getFullYear() +
            "-" +
            item.fullDate.getMonth() +
            "-" +
            item.fullDate.getDate(),
            item
          ])
        ).values()
      ];
      filTaskDates.sort((a, b) => a.fullDate - b.fullDate);
      if (lastAddedDate !== "") {
        const [year, month, day] = lastAddedDate.split("-").map(Number);
        setSelDate(filTaskDates.findIndex(date =>
          date.fullDate.getFullYear() === year &&
          date.fullDate.getMonth() === month - 1 &&
          date.fullDate.getDate() === day
        ))
      } else {
        setSelDate(filTaskDates.findIndex(taskDate => taskDate.id == -1));
      }
      setDates(filTaskDates);
      setTasks(taskParse);    
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [createNote, deletedTask, editedTask]);

  useEffect(() => {
    if (noteOptions === true) {
      setRotate(true);
    }
  }, [noteOptions])

  return (
    <main className='max-w-3xl h-screen flex flex-col pt-3 px-3 mx-auto pb-2 overflow-hidden'>
      <header className='shrink-0'>
        <h1 className='text-5xl mb-2'>TaskMaster</h1>
        <CalendarBadge key={dates.id} selDate={selDate} setSelDate={setSelDate} dates={dates}/>
      </header>

      <section className='relative rounded-xl overflow-hidden flex-1'>
        <Daynote key={dates.id} selDate={selDate} dates={dates} createNote={createNote} noteOptions={noteOptions} setNoteOptions={setNoteOptions} tasks={tasks} setTasks={setTasks} deletedTask={deletedTask} setDeletedTask={setDeletedTask} rotate={rotate} setRotate={setRotate} editedTask={editedTask} setEditedTask={setEditedTask} lastAddedDate={lastAddedDate} setLastAddedDate={setLastAddedDate}/>
        <div className='absolute bottom-4 right-4 w-14 h-14 z-20 bg-white rounded-full'>
          <img onClick={() => {
              if (noteOptions === true) {
                setNoteOptions(false);
              } else {
                setCreateNote(!createNote);
              }
              setRotate(!rotate);
              setNoteOptions(false);
          }} src={plus} alt="add button" className={`w-14 h-14 transition-transform duration-300 cursor-pointer ${rotate ? "rotate-45" : ""}`}/>
        </div>
        {createNote &&
            (
              <AddNote createNote={createNote} setCreateNote={setCreateNote} rotate={rotate} setRotate={setRotate} selDate={selDate} setSelDate={setSelDate} dates={dates} setDates={setDates} lastAddedDate={lastAddedDate} setLastAddedDate={setLastAddedDate}/>
            )
        }
        {/* {noteOptions &&
          (
            <NoteOptions />
          )
        } */}
      </section>     

      <footer className='shrink-0 mt-2 bg-white text-center'>
        <h2>With ❤️ Jash</h2>
      </footer>
    </main>
  )
}

export default App