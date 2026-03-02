import React from 'react'

const CalendarBadge = ({selDate, setSelDate, dates}) => {
  return ( 
        <div className="overflow-x-auto pb-4 flex gap-3">
          {dates.map((date, index) => (
            <div key={index} onClick={() => setSelDate(index)} className={`min-w-14 min-h-14 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center bg-white cursor-pointer border-2 ${index==selDate ? "border-black" : "border-black/10"} transition-all`}>
              <h2 className="text-sm font-semibold tracking-wider text-gray-600">{date?.day}</h2>
              <h2 className="text-2xl font-medium leading-none">{date?.number}</h2>
            </div>
          ))}
        </div>
  )
}

export default CalendarBadge;