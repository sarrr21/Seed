export default function BusinessHours() {
    const hours = [
      { day: 'Sunday', time: '09:00 - 20:00' },
      { day: 'Monday', time: '08:00 - 20:00' },
      { day: 'Tuesday', time: '08:00 - 20:00' },
      { day: 'Wednesday', time: '08:00 - 20:00' },
      { day: 'Thursday', time: '08:00 - 20:00' },
      { day: 'Friday', time: '08:00 - 20:00' },
      
    ]
  
    return (
      <section className="p-6  text-white">
        <h2 className="text-xl font-bold  mt-6 mb-4">Business Hours</h2>
        <div className="space-y-4 grid grid-cols-2 gap-4">
          {hours.map((item, index) => (
            <div key={index} className="flex justify-between py-2 border-b border-t border-yellow-400  ">
              <span>{item.day}:</span>
              <span className="text-yellow-400">{item.time}</span>
            </div>
          ))}
        </div>
        <div  className="flex justify-between py-2 border-t border-yellow-400 border-b mx-24 mt-4   ">
          <span>Saturday:</span>
           <span className="text-yellow-400">Closed</span>
          </div>
      </section>
    )
  }
  
  