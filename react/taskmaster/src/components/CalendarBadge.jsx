import React from 'react'

const CalendarBadge = ({selDate, setSelDate, dates}) => {
  return ( 
        <div className="overflow-x-auto pb-4 flex gap-3">
          {dates.map((date, index) => (
            <div key={date.id} onClick={() => setSelDate(index)} className={`min-w-14 min-h-14 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer border-2 ${index==selDate ? "border-black" : "border-black/10"} ${date.id===-1 ? "bg-black" : "bg-white"} transition-all`}>
              <h2 className={`${date.id===-1 ? "text-white" : "text-gray-600"} text-sm font-semibold tracking-wider`}>{date?.month}</h2>
              <h2 className={`${date.id===-1 ? "text-white" : "text-gray-600"} text-2xl font-medium leading-none`}>{date?.number}</h2>
            </div>
          ))}
        </div>
  )
}

export default CalendarBadge;