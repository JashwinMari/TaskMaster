import React, { useEffect, useState } from 'react'
import CalendarBadge from './components/CalendarBadge'
import Daynote from './components/Daynote'; 
import plus from './assets/plus.svg'
import AddNote from './components/AddNote';
import NoteOptions from './components/NoteOptions';

const API_BASE_URL = "http://127.0.0.1:8000/taskOp";

const App = () => {
  const [dates, setDates] = useState([]);
  const [selDate, setSelDate] = useState(0);
  const [createNote, setCreateNote] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [noteOptions, setNoteOptions] = useState(false);

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Get tasks and update states
  const fetchTasks = async () => {
    try {
    const taskDates = [];

    const response = await fetch(`${API_BASE_URL}/getTasks/`, {
      method: 'GET'
    });

      if(!response.ok) {
        throw new Error('Failed to fetch workouts');
      }

      const data = await response.json();
      for (let i=0; i<data.length; i++) {
        const date = new Date(data[i].taskDate);
        taskDates.push({
          day: days[date.getDay()],
          number: date.getDate(),
          fullDate: date
        })
      }
      setDates(taskDates);
    } catch {
      console.error('Error fetching data. Please try again later');
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (noteOptions === true) {
      setRotate(true);
    }
  }, [noteOptions])

  return (
    <main className='max-w-3xl h-screen flex flex-col pt-3 px-3 mx-auto pb-2 overflow-hidden'>
      <header className='shrink-0'>
        <h1 className='text-5xl mb-2'>TaskMaster</h1>
        <CalendarBadge key={dates.number} selDate={selDate} setSelDate={setSelDate} dates={dates}/>
      </header>

      <section className='relative rounded-xl overflow-hidden flex-1'>
        <Daynote key={dates.number} selDate={selDate} dates={dates} createNote={createNote} noteOptions={noteOptions} setNoteOptions={setNoteOptions}/>
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
              <AddNote />
            )
        }
        {noteOptions &&
          (
            <NoteOptions />
          )
        }
      </section>     

      <footer className='shrink-0 mt-2 bg-white text-center'>
        <h2>With ❤️ Jash</h2>
      </footer>
    </main>
  )
}

export default App