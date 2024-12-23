
import { useState } from "react"
import { CalendarIcon, CircleDot } from 'lucide-react'

export default function Appointment() {
  const [date, setDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const timeSlots = [
    "8:10 - 20:00",
    "8:10 - 20:00",
    "8:10 - 20:00",
    "8:10 - 20:00"
  ]

  return (
   
      <div className="w-full p-6 ">
       <div className="text-xl font-bold mt-6 mb-4 text-white">Make an Appointment</div>
          
        <div className="space-y-6 ">
          <div className=" flex gap-4">
            <label className="text-md text-zinc-300 font-semibold">Date:</label>
            <div className="flex items-center justify-between w-full gap-2 p-3 rounded-lg bg-zinc-800 cursor-pointer">
                <div className="text-zinc-300 w-full">
                  {date ? date.toDateString() : "Pick a date "}
                </div>
                <CalendarIcon className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          <div className="flex gap-4">
            <label className="text-md text-zinc-300 font-semibold">Hour:</label>
            <div className="grid grid-cols-2 w-full gap-2">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTime(time)}
                  className="p-3  rounded-lg  bg-zinc-800 text-yellow-500 text-center"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="pl-14">
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-lg ">
            Make an Appointment
          </button>
          </div>
        </div>
      </div>
   
  )
}

