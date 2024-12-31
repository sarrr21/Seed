import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { CalendarIcon } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

export default function Appointment() {
  
  const [date, setDate] = useState(new Date());

  const [selectedTime, setSelectedTime] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  
  const generateRandomTimeSlots = (numSlots = 4) => {
    let slots = [];
    for (let i = 0; i < numSlots; i++) {
      const startHour = 8 + Math.floor(Math.random() * 9);
      const startMin = Math.random() < 0.5 ? "00" : "30"; 
      
  
      let endHour = startHour;
      let endMin = "45";

      const startTimeStr = `${startHour}:${startMin.padStart(2, "0")}`;
      const endTimeStr = `${endHour}:${endMin.padStart(2, "0")}`;
      slots.push(`${startTimeStr} - ${endTimeStr}`);
    }
    return slots;
  };

  useEffect(() => {
    const slots = generateRandomTimeSlots();
    setTimeSlots(slots);
  }, [date]);

  const handleDateClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateSelect = (newDate) => {
    setDate(newDate);
    setShowDatePicker(false);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleAppointment = () => {
    if (date && selectedTime) {
      alert(`Appointment set on ${date.toDateString()} at ${selectedTime}`);
    } else {
      alert("Please select a date and time first!");
    }
  };

  return (
    <div className="w-full p-6">
      <div className="text-xl font-bold mt-6 mb-4 text-white">
        Make an Appointment
      </div>

      <div className="space-y-6">
       
        <div className="flex gap-4">
          <label className="text-md text-zinc-300 font-semibold">Date:</label>
          <div
            className="flex items-center justify-between w-full gap-2 p-3 rounded-lg bg-zinc-800 cursor-pointer"
            onClick={handleDateClick}
          >
            <div className="text-zinc-300 w-full">
              {date ? date.toDateString() : "Pick a date"}
            </div>
            <CalendarIcon className="w-5 h-5 text-yellow-500" />
          </div>

         
          {showDatePicker && (
            <div className="absolute z-50 mt-14">
              <DatePicker
                selected={date}
                onChange={handleDateSelect}
                inline
              />
            </div>
          )}
        </div>

       
        <div className="flex gap-4">
          <label className="text-md text-zinc-300 font-semibold">Hour:</label>
          <div className="grid grid-cols-2 w-full gap-2">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 rounded-lg text-center 
                  ${
                    selectedTime === time
                      ? "bg-yellow-400 text-black"
                      : "bg-zinc-800 text-yellow-500"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

       
        <div className="pl-14">
          <button
            onClick={handleAppointment}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 rounded-lg"
          >
            Make an Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
